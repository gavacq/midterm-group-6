$(() => {
  getProducts().then(function(json) {
    AppLib.productList.createProductList(json);
    AppLib.viewManager.show('productList');
  });
});
