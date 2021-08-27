$(() => {
  AppLib.chatModal = {};

  const createChatModal = chat => {
    const $chatModal = $(`<div class ='chat-modal'></div>`);

    chat.forEach(e => {
      $chatModal.append(`<p>${e.content}</p>`);
    });

    $chatModal.append(`<form><input type='text' name='message' placeholder='enter a message'><button type='submit' class='btn btn-primary'>Send</button></form>`);
    
    $chatModal.children('form').on('submit', function(event) {
      event.preventDefault();
      console.log($(this).serialize());
      
      const data = $(this).serialize();
      console.log('data', data);

      $('input').val('');

      sendMessage(chat[0].chat_id, data).then(function(json) {
        // AppLib.productList.createProductList(json);
        // AppLib.viewManager.show('productList');
        $chatModal.children('form').before(`<p>${json.content}</p>`);
      });
    });

    return $chatModal;
  };

  AppLib.chatModal.createChatModal = createChatModal;
});
