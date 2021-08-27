$(() => {
  AppLib.showProductsView();

  $('.fas.fa-comment-dots').on('click', ()=>{
    AppLib.showChatsView();
  });
  // add favorites filter button here
});
