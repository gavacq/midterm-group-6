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
    for (const chat of chats) {
      // TODO: for user, group chat cards by productId. For admin, group by user, and then productiD
      const chatCard = AppLib.chatCard.createChatCard(chat);
      addChatCard(chatCard);
    }
  }
  
  AppLib.chatList.createChatList = createChatList;
});
