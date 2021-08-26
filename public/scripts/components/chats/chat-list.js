$(() => {
  const $chatList = $(`
  <section class="chatList">
      <p>Loading products...</p>
    </section>
  `);

  AppLib.$chatList = $chatList;
  AppLib.chatList = {};
});
