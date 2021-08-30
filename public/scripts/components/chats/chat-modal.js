$(() => {
  AppLib.chatModal = {};

  const createChatModal = (chat) => {
    const $chatModal = $(`<div class ='chat-modal'></div>`);
    const $messageContainer = $(`<div class ='message-container'></div>`);
    $chatModal.append($messageContainer)

    chat.forEach((e) => {
      console.log('e.from_admin', e.from_admin)
      if (e.from_admin === false) {
        $messageContainer.append(`<div class = 'message'>${e.content}</div>`);
        
      } 
       else {
        $messageContainer.append(`<div class = 'message message-admin'>${e.content}</div>`);
      }
    });

    $chatModal.append(
      
      `<form id="chat__form"><input type='text' name='message' placeholder='Enter a message :)'><button type='submit'>Send</button></form>`
    );

    $chatModal.children("form").on("submit", function (event) {
      event.preventDefault();
      // console.log($(this).serialize());

      const data = $(this).serialize();
      // console.log("data", data);

      $("input").val("");

      sendMessage(chat[0].chat_id, data).then(function (json) {
        console.log('json',json)
        // AppLib.productList.createProductList(json);
        // AppLib.viewManager.show('productList');
        if (json.from_admin === true) {
          $('.message-container').append(`<div class = 'message-admin'>${json.content}</div>`);
        } else{
          $('.message-container').append(`<div class = 'message'>${json.content}</div>`);
        }
      });
    });

    return $chatModal;
  };

  AppLib.chatModal.createChatModal = createChatModal;
});
