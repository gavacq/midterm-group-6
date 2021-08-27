$(document).ready(function() {
  // add empty object to AppLib library
  AppLib.productCard = {};

  // FUNCTION: generates the HTML for the modal view of a product.
  const createProductCard = function(product) {

    const $productCard = $(`
    <article class = 'product-card' id = ${product.id}>
      <section class = 'product-card-preview-image'>
        <img src = '${product.image_path}' width=500 alt = 'product-preview'>    
      </section>
    </article>
   


    `).on('click', (function(event) {
      // launch modal
      event.preventDefault();
      this.blur(); // Manually remove focus from clicked link.
      viewProduct(this.id).then(function(data) {
<<<<<<< HEAD
        $('.product-price').html(data.price);
        $('.product-name').html(data.name);
        $('.product-description').html(data.description);

        createProductModal(data).appendTo('#main-content').modal();
=======
        
        console.log('data: ', data);
        
        AppLib.productModal.createProductModal(data[0]).appendTo('#main-content').modal();
>>>>>>> da5bb887955c1c20a20e98ade82fdc28c3c09fdf
      });
    }));

    return $productCard;
  };

  const $productModal =
  `
  <div class="product-modal">
    <h3 class="product-name"></h3>
    <ul class="product-details"> 
      <li class="product-price"></li>
      <li class="product-description"></li>
    </ul> 

    <div class="sendMessage">
    <form class="submitMessage">
    <textarea
      name="text"
      id="tweet-text"
      placeholder="Talk to the admin here!"
    ></textarea>
<br>
      <button type="submit" class="submitButton">Send</button>
      </div>
      <button type="submit" class="soldButton">Mark Sold</button>
  </div> `;

  // $('soldButton').on('click', markAsSold(data.id));

  // add the createProductCard method to the productCard object in the AppLib library
  AppLib.productCard.createProductCard = createProductCard;
});
