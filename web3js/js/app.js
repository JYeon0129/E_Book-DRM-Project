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

    $.getJSON('./books.json', function(data) {
        var bookName = data[bookId].title;
        var buyer = "0xF9c22321C90d0eE01Eba8fB4dBB1f7F40c061F5D";
        console.log(bookName,buyer,bookId);
    })

  }

};

  $(function() {
    $(window).load(function() {
      App.init();
    });
  });
