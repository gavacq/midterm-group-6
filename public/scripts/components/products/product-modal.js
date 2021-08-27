$(document).ready(function() {
<<<<<<< HEAD
<<<<<<< HEAD
 //see product-card.js
});
=======

=======
>>>>>>> 13ed47e321911ae1edacf2f22ac8fb419c12ffa2
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
      $productModal.append(`
      <i class="fas fa-heart" id="fav-modal-button"></i>
      <form><input type='text' name='content' placeholder='Message the seller'><button type='submit'>Send</button></form>`);
    }

    $productModal.on('click', '#delete-button', function() {
      // retrieve the id from the html
      const productId = (product.id);

      deleteProduct(productId);

      AppLib.showProductsView();
    });

    $productModal.on('click', '#sell-button', function() {
      // retrieve the id from the html
      const productId = (product.id);

      markAsSold(productId);

      AppLib.showProductsView();
    });

    $productModal.on('click', '#fav-modal-button', function() {
      // retrieve the id from the html
      const productId = (product.id);

      addToFavorites(productId);

      AppLib.showProductsView();
    });

    $productModal.children('form').on('submit', function(event) {
      event.preventDefault();
      let data = $(this).serialize();

      data += `&productId=${product.id}`;

      console.log('data', data);

      $('input').val('');

      createChat(data).then(function(json) {
        AppLib.showProductsView();
      });
    });

    return $productModal;
  };

  AppLib.productModal.createProductModal = createProductModal;

  // ('#delete-button').on('click', function() {
});

<<<<<<< HEAD
>>>>>>> da5bb887955c1c20a20e98ade82fdc28c3c09fdf
=======
// If admin, render the delete button. If user, do not render
>>>>>>> 13ed47e321911ae1edacf2f22ac8fb419c12ffa2
