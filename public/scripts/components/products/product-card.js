// NOTES:
//  LINE 18 - 19 ONLY IF ADMIN: show if the item is in the favorites - render the heart icon here?
// NOTE: in the template strings should the variable names be req.body or product.etc ??

$(document).ready(function() {

  // FUNCTION: generates the HTML for the modal view of a product.
  // if admin, the favorites part should not be generated.
  
  const createProductCard = () => {
    return `
    <article class = 'product-card'>
      <section class = 'product-card-preview-image'>
        <img src = '${product.imagePath /* req.body.imagePath ??*/}'} alt = 'product-preview'>    
      </section>
      <section class = 'product-details'>
        <h3 class = 'product-card-name'>${product.name}</h3>
        <ul class = 'product-details'> 
          <li>Price: ${product.price}</li>
          <li>Description: ${product.description}</li>
        </ul>
        ${product.favorite ?
    `This product is in your favorites` : ``}
      </section> 
    </article>
    `;
  };
});
