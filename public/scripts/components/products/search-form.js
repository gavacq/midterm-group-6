$(document).ready(function() {

  const $searchForm = $(

    `
      <form action = '/products' method = 'post' id = 'search-product-form'>
        <h3> Filter by price </h3>
        <div class = 'input-fields'>  
          <label for="min-price-filter">Minimum price</label>
          <input type = 'number' name = "minimum-price" placeholder="minimum" id="min-price-filter">
          <label for="max-price-filter">Maximum price</label>
          <input type = 'number' name = "maximum-price" placeholder="maximum" id="max-price-filter">
        </div>
        <button type = 'submit'>Filter</button>
      </form>
    `);

    // create jQuery element for the favorite icon and add click event.
    // this renders only the favorites.
    $favoriteIcon = $(`<div id = "favorite-icon">Favorites button</div>`)
    .on('click', function(event) {
      event.preventDefault();
      getProducts('favorite=true')
      .then(function(json) {
        AppLib.productList.createProductList(json);
        AppLib.viewManager.show('productList');
    })
  });
  
  // add the createSearchForm method to the searchForm object in the AppLib library
  AppLib.$searchForm = $searchForm;

  $searchForm.on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();

    // send a request to /products with a URL encoded query string
    getProducts(data).then(function(json) {
      AppLib.productList.createProductList(json);
      AppLib.viewManager.show('productList');
    });
  });
});
