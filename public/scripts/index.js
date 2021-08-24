$(() => {
  getProducts().then(function(json) {
    productList.addProductCard(json.products);
    views_manager.show('productList');
  });
});
