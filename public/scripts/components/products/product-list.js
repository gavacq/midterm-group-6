$(() => {
  const $productList = $(`
  <section class="productList" id="productList">
      <p>Loading products...</p>
    </section>
  `);
  AppLib.$productList = $productList;

  AppLib.$productList = {};

  function addProductCard(productCard) {
    $productList.append(productCard);
  }

  function clearProductCards() {
    $productList.empty();
  }

  AppLib.productList.clearProductCards = clearProductCards;

  function createProductList(productsIds) {
    clearProductCards();
    for (const productId in products) {
      const product = products[productId];
      const productCard = AppLib.productCard.(property, isReservation);
      addListing(listing);
    }
  }

  window.productList.addProduct = addProduct;
});
