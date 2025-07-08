// order-confirmation.js

// Wait until the DOM content is loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Get the URL query parameters
    const params = new URLSearchParams(window.location.search);
  
    // Extract firstName and lastName parameters
    const firstName = params.get("firstName") || "";
    const lastName = params.get("lastName") || "";
  
    // Combine them with a space, trimming any extra whitespace
    const fullName = `${firstName} ${lastName}`.trim();
  
    // Get the thank you message element by ID
    const thankYouElement = document.getElementById("thankYouMessage");
  
    // If the element exists and we have a name, update the message
    if (thankYouElement && fullName) {
      thankYouElement.textContent = `Thank you, ${fullName}!`;
    }
  });
  