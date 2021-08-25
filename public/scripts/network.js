const getProducts = function(params) {
  let url = "/products";
  if (params) {
    url += "?" + params;
  }
  
  return $.ajax({url, });
};

const deleteProduct = function(productId) {
  return $.ajax({
    method: "POST",
    url: `/products/${productId}/delete`
  });
};

const addToFavorites = function(productId) {
  const data = {favorite: true};

  return $.ajax({
    method: "POST",
    url: `/products/${productId}`,
    data
  });
};

const removeFromFavorites = function(productId) {
  const data = {favorite: false};

  return $.ajax({
    method: "POST",
    url: `/products/${productId}`,
    data
  });
};

const postNewProduct = function(data) {
  return $.ajax({
    method: "POST",
    url: "/products",
    data,
  });
};

const viewProduct = function(productId) {
  return $.ajax({url: `/products/${productId}`});
};

const markAsSold = function(productId) {
  return $.ajax({
    method: "POST",
    url: `/products/${productId}/sold`,
  });
};

const getChats = function() {
  return $.ajax({url: "/chats"});
};

const createChat = function(data) {
  return $.ajax({
    method: "POST",
    url: "/chats",
    data,
  });
};

const sendMessage = function(chatId, data) {
  return $.ajax({
    method: "POST",
    url: `/chats/${chatId}`,
    data,
  });
};

const viewChat = function(chatId) {
  return $.ajax({url: `/chats/${chatId}`});
};
