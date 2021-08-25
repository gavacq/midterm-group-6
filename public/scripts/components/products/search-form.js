$(document).ready(function() {

  // add empty object to AppLib library
  AppLib.searchForm = {};

  const createSearchForm = options => {

    return `
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
    `;
  }

  // add the createSearchForm method to the searchForm object in the AppLib library
  AppLib.searchForm.createSearchForm = createSearchForm;

});