$(document).ready(function() {
  AppLib.productModal = {};

  const createProductModal = (product) => {
    console.log('product', product);
    
    const $productModal = $(
      `
      <div class="product-modal" id="${product.id}-modal">
        <h3 class="product-name">${product.name}</h3>
        <ul class="product-details"> 
          <li>Price: ${product.price}</li>
          <li>Description: ${product.description}</li>
        </ul>
      </div> `
    );

    if (product.isAdmin) {
      $productModal.append(`
        <button id="delete-button" type="submit">Delete product</button>
        <button id="sell-button" type="submit">Sell product</button
      `);
    } else {
      $productModal.append(`<form><input type='text' name='content' placeholder='Message the seller'><button type='submit'>Send</button></form>`);
    }
    
    $productModal.on('click', '#delete-button', function() {
      // retrieve the id from the html
      const productId = (product.id);
   
      deleteProduct(productId);
    
      AppLib.showProductsView();
    });

    $productModal.children('form').on('submit', function(event) {
      event.preventDefault();
      let data = $(this).serialize();

      data += `&productId=${product.id}`;

      console.log('data', data);

      createChat(data).then(function(json) {
        AppLib.showProductsView();
      });
    });

    return $productModal;
  };

  AppLib.productModal.createProductModal = createProductModal;

  // ('#delete-button').on('click', function() {
});

// If admin, render the delete button. If user, do not render
