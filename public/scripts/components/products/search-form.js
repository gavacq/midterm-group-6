$(document).ready(function() {
  const $searchForm = $(

    `
      <form id = 'new-product-form'>
        <h3> Filter by price </h3>
        <div class = 'input-fields'>  
          
          <input type = 'number' name = "minimum-price" placeholder="minimum price" id="min-price-filter">
          <input type = 'number' name = "maximum-price" placeholder="maximum price" id="max-price-filter">
        </div>
        <button type = 'submit'>Filter</button>
      </form>
    `);

  // add the createSearchForm method to the searchForm object in the AppLib library
  AppLib.$searchForm = $searchForm;

  $searchForm.on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();

    $('input').val('');

    // send a request to /products with a URL encoded query string
    getProducts(data).then(function(json) {
      AppLib.productList.createProductList(json);
      AppLib.viewManager.show('productList');
    });
  });
});
