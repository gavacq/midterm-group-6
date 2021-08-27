$(() => {
  AppLib.showProductsView();

  $('.fas.fa-comment-dots').on('click', ()=>{
    AppLib.showChatsView();
  });

  $('#logo').on('click', () => {
    AppLib.showProductsView();
  });
  // add favorites filter button here
});
