App = {
  web3Provider: null,
  contracts: {},

  init: async function() {

  $.getJSON('./books.json', function(data) {
      //petsRow.append(petTemplate.html());
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');
      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.panel-title').text(data[i].title);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].publicationyear);
        petTemplate.find('.pet-age').text(data[i].author);
        petTemplate.find('.pet-location').text(data[i].publisher);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);
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
