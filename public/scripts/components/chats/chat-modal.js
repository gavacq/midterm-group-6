$(() => {
  AppLib.chatModal = {};

  const createChatModal = chat => {
    const $chatModal = $(`<div class ='chat-modal'></div>`);

    chat.forEach(e => {
      $chatModal.append(`<p>${e.content}</p>`);
    });

    $chatModal.append(`<form><input type='text' name='message' placeholder='enter a message'><button type='submit'>Send</button></form>`);

    // $chatModal = $(`<form id = 'new-product-form'>
    //     <h3> Filter by price </h3>
    //     <div class = 'input-fields'>
    //       <label for="min-price-filter">Minimum price</label>
    //       <input type = 'number' name = "minimum-price" placeholder="minimum" id="min-price-filter">
    //       <label for="max-price-filter">Maximum price</label>
    //       <input type = 'number' name = "maximum-price" placeholder="maximum" id="max-price-filter">
    //     </div>
    //     <button type = 'submit'>Filter</button>
    //   </form>`);
    
    $chatModal.children('form').on('submit', function(event) {
      event.preventDefault();
      console.log($(this).serialize());
      
      const data = $(this).serialize();
      console.log('data', data);

      sendMessage(chat[0].chat_id, data).then(function(json) {
        AppLib.productList.createProductList(json);
        AppLib.viewManager.show('productList');
      });
    });

    return $chatModal;
  };

  AppLib.chatModal.createChatModal = createChatModal;
});
