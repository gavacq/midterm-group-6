$(document).ready(function() {
  // add empty object to AppLib library
  AppLib.productCard = {};

  // FUNCTION: generates the HTML for the modal view of a product.
  const createProductCard = function(product) {
    const $productCard = $(`
    <article class = 'product-card' id = ${product.id}>
        <img src = '${product.image_path}' width=500 alt = 'product-preview'>    
    </article>
    `).on('click', (function(event) {
      // launch modal
      event.preventDefault();
      this.blur(); // Manually remove focus from clicked link.
      viewProduct(this.id).then(function(data) {
        AppLib.productModal.createProductModal(data[0]).appendTo('#main-content').modal();
      });
    }));

    return $productCard;
  };

  // add the createProductCard method to the productCard object in the AppLib library
  AppLib.productCard.createProductCard = createProductCard;
});
