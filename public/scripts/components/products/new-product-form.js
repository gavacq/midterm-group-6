$(document).ready(function() {
  const $newProductForm = $(
    `
      <form id = 'new-product-form'>
        <h3>Create New Product</h3>
        <div class = 'input-fields'>  
          <label for="name">Product name</label>
          <input type = 'text' name = "name" placeholder="Product name" id="Product-name-field">
          <label for="description">Product description</label>
          <input type = 'text' name = "description" placeholder="Product description" id="Product-description-field">
          <label for="price">Product price</label>
          <input type = 'number' name = "price" placeholder="Product price" id="Product-price-field">
          <label for="path">Image path</label>
          <input type = 'text' name = "image_path" placeholder="Product image path" id="Product-image-path">
        </div>
        <button type = 'submit'>Post</button>
      </form>
    `);

  // add the createSearchForm method to the searchForm object in the AppLib library
  AppLib.$newProductForm = $newProductForm;

  $newProductForm.on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();

    // send a request to /products with a URL encoded query string
    postNewProduct(data).then(function(json) {
      getProducts().then(function(json) {
        AppLib.productList.createProductList(json);
        AppLib.viewManager.show('productList');
      });
    });
  });
});
