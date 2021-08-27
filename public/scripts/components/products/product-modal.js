$(document).ready(function() {

  AppLib.productModal = {};

  const createProductModal = (product) => {

    const $productModal = $(
      `
      <div class="product-modal" id="${product.id}-modal">
        <h3 class="product-name">${product.name}</h3>
        <ul class="product-details"> 
          <li>Price: ${product.price}</li>
          <li>Description: ${product.description}</li>
        </ul>
        <button id="delete-button" type="submit">Delete product</button>
      </div> `
    ).on('click', '#delete-button', function() {
      // retrieve the id from the html
    const productId = (this.id).replace(/-modal/, '');
    console.log('productId: ', productId);
    deleteProduct(productId);
    AppLib.viewManager.show('productList');
  });

    return $productModal;
  }

  AppLib.productModal.createProductModal = createProductModal;


  // ('#delete-button').on('click', function() {
    
  });


    // If admin, render the delete button. If user, do not render

