$(document).ready(function() {
  // add empty object to AppLib library
  AppLib.chatCard = {};

  // FUNCTION: generates the HTML for the modal view of a product.
  const createChatCard = chat => {
    const $chatCard =
    $(`<article class = 'chat-card' id = ${chat.chatId}>

        <img src = '${chat.imagePath}' width=200 alt = 'product-preview'>    
    
    </article>`
    ).on('click', (function(event) {
      // launch modal
      event.preventDefault();
      this.blur(); // Manually remove focus from clicked link.
      viewChat(this.id).then(function(data) {
        // $(`<div><p>${JSON.stringify(data)}</p></div>`).appendTo('#main-content').modal();
        console.log('data',data)
        AppLib.chatModal.createChatModal(data).appendTo('#main-content').modal();
      });
    }));

    return $chatCard;
  };

  // add the createChatCard method to the chatCard object in the AppLib library
  AppLib.chatCard.createChatCard = createChatCard;
});
