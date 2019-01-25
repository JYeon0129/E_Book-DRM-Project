App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load pets.
      console.log("hello?");


    /*  $.getJSON("C:\\Users\\KNK\\Documents\\GitHub\\web3js\\books.json", {
        sessionId: "1"
    }).done(function(data) {
        alert("Successfully got the messages! ");

        var petsRow = $('#petsRow');
        var petTemplate = $('#petTemplate');

        for (i = 0; i < data.length; i ++) {
          petTemplate.find('.panel-title').text(data[i].title);
          petTemplate.find('img').attr('src', data[i].picture);
          petTemplate.find('.pet-breed').text(data[i].publicationyear);
          petTemplate.find('.pet-age').text(data[i].author);
          petTemplate.find('.pet-location').text(data[i].publisher);
          petTemplate.find('.btn-adopt').attr('data-id', data[i].id);
          console.log(data[i].authoraddr);
          petsRow.append(petTemplate.html());
        }

        $target.empty();

        var messages = [];

        $.each(data,function(k,v) {
            console.log(k + " " + JSON.stringify(v));
        });


        $target.append(data);
    }).fail(function() {
        alert("Could not reload messages!");
    });
*/

    $.getJSON('books.json', function(data) {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.panel-title').text(data[i].title);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].publicationyear);
        petTemplate.find('.pet-age').text(data[i].author);
        petTemplate.find('.pet-location').text(data[i].publisher);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);
        console.log(data[i].authoraddr);
        petsRow.append(petTemplate.html());
      }
    });

    //return await App.initWeb3();
}};

  $(function() {
    $(window).load(function() {
      App.init();
    });
  });
