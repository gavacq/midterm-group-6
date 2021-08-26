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

  function createChatList(chats) {
    for (const chatId in chats) {
      const chat = chats[chatId];
      const chatCard = AppLib.chatCard.createChatCard(chat);
      addChatCard(chatCard);
    }
  }
  
  AppLib.chatList.createChatList = createChatList;
});
