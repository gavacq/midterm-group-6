// NOTES:
//  LINE 18 - 19 ONLY IF ADMIN: show if the item is in the favorites - render the heart icon here?

$(document).ready(function() {
  // add empty object to AppLib library
  AppLib.productCard = {};

  // FUNCTION: generates the HTML for the modal view of a product.
  // if admin, the favorites part should not be generated.
  const createProductCard = product => {
    const $productCard = $(`
    <article class = 'product-card' id = ${product.id}>
      <section class = 'product-card-preview-image'>
        <img src = '${product.image_path}' width=500 alt = 'product-preview'>    
      </section>
<<<<<<< product-cards
=======
      <section class = 'product-details'>
        <h3 class = 'product-card-name'>${product.name}</h3>
        <ul class = 'product-details'> 
          <p>Price: ${product.price}</p>
          <p>Description: ${product.description}</p>
        </ul>
        ${product.favorite ?
    `This product is in your favorites` : ``}
      </section> 
>>>>>>> master
    </article>
    `).on('click', (function(event) {
      console.log('productCard clicked');
    
      event.preventDefault();
      this.blur(); // Manually remove focus from clicked link.
      viewProduct(this.id).then(function(data) {
        $(`<div><p>${JSON.stringify(data)}</p></div>`).appendTo('#main-content').modal();
      // createProductModal(data).appendTo('#main-content').modal();
      });
    }));

    return $productCard;
  };

  // add the createProductCard method to the productCard object in the AppLib library
  AppLib.productCard.createProductCard = createProductCard;
});
