
const $productModal =
  `
  <div class="product-modal">
    <h3 class="product-name">${product.name}</h3>
    <ul class="product-details"> 
      <li>Price: ${product.price}</li>
      <li>Description: ${product.description}</li>
    </ul> 
  </div> `;

  product.favorite ?
  $productModal.append( `<p>This product is in your favorites.</p>
  <p class="remove-fav">Remove from favorites</p>`) : '';
 
