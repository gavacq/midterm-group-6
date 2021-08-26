$(() => {
  const $productList = $(`
  <section class="productList" id="productList">
      <p>Loading products...</p>
    </section>
  `);
  AppLib.$productList = $productList;

  AppLib.productList = {};

  function addProductCard(productCard) {
    $productList.append(productCard);
  }

  function clearProductCards() {
    $productList.empty();
  }

  AppLib.productList.clearProductCards = clearProductCards;

  function createProductList(products) {
    clearProductCards();
    for (const product of products) {
      const productCard = AppLib.productCard.createProductCard(product);
      addProductCard(productCard);
    }
  }

  AppLib.productList.createProductList = createProductList;
});
