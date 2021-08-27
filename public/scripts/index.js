$(() => {
  getProducts().then(function(json) {
    AppLib.productList.createProductList(json);
    AppLib.viewManager.show('productList');
  });
  $('.fas.fa-comment-dots').on('click', ()=>{
    getChats().then((json)=>{
      AppLib.chatList.createChatList(json);
      AppLib.viewManager.show('chatList');
    });
  });
  // add favorites filter button here
});
