$(document).ready(function() {
  // add empty object to AppLib library
  AppLib.chatCard = {};

  // FUNCTION: generates the HTML for the modal view of a product.
  const createChatCard = chat => {
    return `
    <article class = 'chat-card'>
    <p>content: ${chat.content}</p>
    </article>
    `;
  };

  // add the createChatCard method to the chatCard object in the AppLib library
  AppLib.chatCard.createChatCard = createChatCard;
});
