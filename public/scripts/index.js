$(() => {
  AppLib.showProductsView();

  $('.fas.fa-comment-dots').on('click', ()=>{
    AppLib.showChatsView();
  });

  $('#logo').on('click', () => {
    AppLib.showProductsView();
  });

  $('#favorites-filter').on('click', function(event) {
    event.preventDefault();
    getProducts('favorite=true').then(function(json) {
      AppLib.productList.createProductList(json);
      AppLib.viewManager.show('productList');
    });
    $('#page-title').text("Favorites");
  });
  // add favorites filter button here
});
