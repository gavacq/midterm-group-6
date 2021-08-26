$(() => {
  getProducts().then(function(json) {
    AppLib.productList.createProductList(json);
    AppLib.viewManager.show('productList');
  });
  $('.fas.fa-comment-dots').on('click', ()=>{
    console.log('hello');
    getChats().then((json)=>{
      console.log(json);
      AppLib.chatList.createChatList(json);
      AppLib.viewManager.show('chatList');
    });
  });
});
