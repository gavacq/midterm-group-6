$(() => {
  // create empty object on the global window object, to avoid storing things in the global scope.
  window.AppLib = {};

  const $main = $('#main-content');

  AppLib.viewManager = {};

  AppLib.showChatsView = () => {
    getChats().then((json)=>{
      AppLib.chatList.createChatList(json);
      AppLib.viewManager.show('chatList');
    });
    $('#page-title').text("Chats");
  };

  AppLib.showProductsView = () => {
    getProducts().then(function(json) {
      let isAdmin = false;
      if (json.includes('isAdmin')) {
        json.pop();
        isAdmin = true;
      }

      AppLib.productList.createProductList(json);
      AppLib.viewManager.show('productList', isAdmin);
    });
    $('#page-title').text("Featured Products");
  };

  AppLib.viewManager.show = function(item, isAdmin) {
    AppLib.$productList.detach();
    AppLib.$searchForm.detach();
    AppLib.$newProductForm.detach();
    AppLib.$chatList.detach();

    switch (item) {
    case 'productList':
      if (isAdmin) {
        AppLib.$newProductForm.appendTo($main);
      }

      AppLib.$searchForm.appendTo($main);
      AppLib.$productList.appendTo($main);
      break;
    case 'chatList':
      AppLib.$chatList.appendTo($main);
      break;
    case 'newProductForm':
      AppLib.$newProductForm.appendTo($main);
      break;
    case 'error': {
      const $error = $(`<p>${arguments[1]}</p>`);
      $error.appendTo('body');
      setTimeout(() => {
        $error.remove();
        view.Manager.show('productList');
      }, 2000);
          
      break;
    }
    }
  };
});
