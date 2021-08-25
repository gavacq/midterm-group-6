// NOTES: 
//  LINE 18 - 19 ONLY IF ADMIN: show if the item is in the favorites
// NOTE: in the template strings should the variable names be req.body or product.etc ??

$(document).ready(function() {

  // FUNCTION: generates the HTML for the modal view of a product
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
          `This product is in your favorites (render heart icon?)` : ``}
      </section> 
    </article>
    `
  }
}); 

  





