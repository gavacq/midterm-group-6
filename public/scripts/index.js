$(() => {
  getProducts().then(function(json) {
    AppLib.productList.createProductList(json);
    AppLib.viewManager.show('productList');
  });

  $('.fas.fa-comment-dots').on('click', ()=>{
    AppLib.showChatsView();
  });
  // add favorites filter button here
});
