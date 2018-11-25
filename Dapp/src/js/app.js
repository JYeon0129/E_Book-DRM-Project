App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load pets.
    $.getJSON('../books.json', function(data) {
      var booksRow = $('#booksRow');
      var bookTemplate = $('#bookTemplate');

      for (i = 0; i < data.length; i ++) {
        bookTemplate.find('.panel-title').text(data[i].title);
        bookTemplate.find('img').attr('src', data[i].picture);
        bookTemplate.find('.pub-year').text(data[i].publicationyear);
        bookTemplate.find('.author').text(data[i].author);
        bookTemplate.find('.publisher').text(data[i].publisher);
        bookTemplate.find('.btn-buy').attr('data-id', data[i].id);
        console.log(data[i].authoraddr);
        booksRow.append(bookTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
    // Modern dapp browsers...
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Adoption.json', function(data){
      var AdoptionArtifact = data;
      App.contracts.Adoption = TruffleContract(AdoptionArtifact);

      App.contracts.Adoption.setProvider(App.web3Provider);

      return App.markAdopted();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-buy', App.handleAdopt);
  },

  markAdopted: function(adopters, account) {
    var adoptionInstance;

    App.contracts.Adoption.deployed().then(function(instance){
      adoptionInstance = instance;

      return adoptionInstance.getAdopters.call();
    }).then(function(adopters){
      for(i = 0; i < adopters.length; i++){
        if(adopters[i] !== '0x0000000000000000000000000000000000000000'){
          $('.panel-pet').eq(i).find('button').text('Success').attr('disabled',true);
        }
      }
    }).catch(function(err){
      console.log(err.message);
    });
  },

  handleAdopt: function(event) {
    event.preventDefault();
    //petId = Book Num
    var petId = parseInt($(event.target).data('id'));
    console.log(petId);
    var adoptionInstance;

    web3.eth.getAccounts(function(error, accounts){
      if(error){
        console.log(error);
      }
      //account = user acc
      var account = accounts[0];
      App.contracts.Adoption.deployed().then(function(instance){
        adoptionInstance = instance;
        console.log(adoptionInstance);
        return adoptionInstance.adopt(petId, {from:account});
      }).then(function(result){
        return App.markAdopted();
      }).catch(function(err){
        console.log(err.message);
      });
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
