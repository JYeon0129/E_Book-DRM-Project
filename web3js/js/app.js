App = {
  web3Provider: null,
  contracts: {},
  
  init: async function() {
    
  $.getJSON('./books.json', function(data) {
      //petsRow.append(petTemplate.html());
      var booksRow = $('#booksRow');
      var bookTemplate = $('#bookTemplate');
      for (i = 0; i < data.length; i ++) {
        bookTemplate.find('.panel-title').text(data[i].title);
        bookTemplate.find('img').attr('src', data[i].picture);
        bookTemplate.find('.book-year').text(data[i].publicationyear);
        bookTemplate.find('.book-author').text(data[i].author);
        bookTemplate.find('.book-pub').text(data[i].publisher);
        bookTemplate.find('.btn-buy').attr('data-id', data[i].id);
        booksRow.append(bookTemplate.html());
      }
      var addres=prompt("address");
      
    });
    //return await App.initWeb3();
    return App.bindEvents();
  },
  bindEvents: function() {
    $(document).on('click', '.btn-buy', App.handleBuy);
  },
  
  handleBuy: function(event){
    event.preventDefault();
    var bookId = parseInt($(event.target).data('id'));
    var bookName,buyer,author,amount;
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
      var abi=[
        {
          "constant": false,
          "inputs": [
            {
              "name": "key",
              "type": "address"
            },
            {
              "name": "bookName",
              "type": "string"
            },
            {
              "name": "buyer",
              "type": "string"
            },
            {
              "name": "author",
              "type": "string"
            },
            {
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "set",
          "outputs": [],
          "payable": false,
          "type": "function",
          "stateMutability": "nonpayable"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "key",
              "type": "address"
            }
          ],
          "name": "getBookName",
          "outputs": [
            {
              "name": "bookName",
              "type": "string"
            }
          ],
          "payable": false,
          "type": "function",
          "stateMutability": "view"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "key",
              "type": "address"
            }
          ],
          "name": "getBuyer",
          "outputs": [
            {
              "name": "buyer",
              "type": "string"
            }
          ],
          "payable": false,
          "type": "function",
          "stateMutability": "view"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "name": "transacs",
          "outputs": [
            {
              "name": "amount",
              "type": "uint256"
            },
            {
              "name": "buyer",
              "type": "string"
            },
            {
              "name": "author",
              "type": "string"
            },
            {
              "name": "bookName",
              "type": "string"
            }
          ],
          "payable": false,
          "type": "function",
          "stateMutability": "view"
        }
      ];
      web3.eth.defaultAccount=web3.eth.accounts[0];
      var blockAddress="0xbef88e039a4866d80525d50fdfe035b2921a3ccb";
      var contracts = web3.eth.contract(abi).at(blockAddress);
      var key = web3.eth.accounts[1];
      console.log(key);
    $.getJSON('./books.json', function(data) {
      bookName = data[bookId].title;
      //buyer = "0xF9c22321C90d0eE01Eba8fB4dBB1f7F40c061F5D";
      author=data[bookId].author;
      amount=parseInt(data[bookId].amount);
      console.log(bookName,buyer,bookId,amount);
      contracts.set(key,bookName,key,author,amount,{from : web3.eth.defaultAccount,gas:300000});
      console.log(key,bookName,amount);
      var a=contracts.getBookName(key);
      console.log(a.toString(10));
      $(event.target).text("see");
    });

      //contract.set(key,"a","b","c",2000,{from:key,gas:3000000});
      //set을 할 때 어디서 나갈지 주소와 gas 지정해줘야함
  }
};

  $(function() {
    $(window).load(function() {
      App.init();
    });
  });
