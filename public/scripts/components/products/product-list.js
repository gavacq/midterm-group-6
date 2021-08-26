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
    for (const productId in products) {
      const product = products[productId];
      const productCard = AppLib.productCard.createProductCard(product);
      addProductCard(productCard);
    }
  }

  AppLib.productList.createProductList = createProductList;
  console.log(addProductCard(createProductList))
});
