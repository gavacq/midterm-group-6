$(() => {
  AppLib.chatModal = {};

  const createChatModal = chat => {
    const $chatModal = $('<article class = chat-modal></article>');

    chat.forEach(e => {
      $chatModal.append(`<p>${e.content}</p>`);
    });

    return $chatModal;
  };

  AppLib.chatModal.createChatModal = createChatModal;
});
