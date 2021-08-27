$(() => {
  const $chatList = $(`
  <section class="chatList">
      <p>Loading products...</p>
    </section>
  `);

  AppLib.$chatList = $chatList;
  AppLib.chatList = {};

  function addChatCard(chatCard) {
    $chatList.append(chatCard);
  }

  function clearChatList() {
    $chatList.empty();
  }

  function createChatList(chats) {
    clearChatList();
    for (const chat in chats) {
      console.log('chats: ', chats[chat]);

      const chatCardData = {
        chatId: chats[chat][0].chat_id,
        imagePath: chats[chat][0].image_path
      };
      
      // TODO: for user, group chat cards by productId. For admin, group by user, and then productiD
      const chatCard = AppLib.chatCard.createChatCard(chatCardData);
      addChatCard(chatCard);
    }
  }
  
  AppLib.chatList.createChatList = createChatList;
});
