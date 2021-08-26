const productsQueries = require("../../../../db/queries/productsQueries");

const $productModal =
  `
  <div class="product-modal">
    <h3 class="product-name">${product.name}</h3>
    <ul class="product-details"> 
      <li>Price: ${product.price}</li>
      <li>Description: ${product.description}</li>
    </ul>
    <button id="delete-button" type="submit">Delete product</button>
  </div> `;


  $productModal.on('click', '#delete-button', () => {
    productsQueries.deleteProduct(product);
    AppLib.viewManager.show('productList');
  });

    // If admin, render the delete button. If user, do not render

