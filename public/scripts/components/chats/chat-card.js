$(document).ready(function() {
  // add empty object to AppLib library
  AppLib.chatCard = {};

  // FUNCTION: generates the HTML for the modal view of a product.
  const createChatCard = message => {
    return `
    <article class = 'chat-card'>
    <p>content: ${message.content}</p>
    <p>hello<p>
    </article>
    `;
  };

  // add the createChatCard method to the chatCard object in the AppLib library
  AppLib.chatCard.createChatCard = createChatCard;
});
