const checkoutForm = document.getElementById('checkoutForm');
const errorMessagesDiv = document.getElementById('errorMessages');
const errorList = errorMessagesDiv.querySelector('ul');

/**
 * Validates a credit card number using Luhn's algorithm.
 * @param {string} cardNumber - The credit card number string to validate.
 * @returns {boolean} - True if the card number is valid according to Luhn's algorithm, false otherwise.
 */
function isValidLuhn(cardNumber) {
    let sum = 0;
    let isSecondDigit = false;

    // Remove any non-digit characters from the card number
    cardNumber = cardNumber.replace(/\D/g, '');

    // Check typical card number length (13-19 digits)
    if (cardNumber.length < 13 || cardNumber.length > 19) {
        return false;
    }

    // Iterate through the digits from right to left
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i], 10);

        // Double every second digit from the right
        if (isSecondDigit) {
            digit *= 2;
            // If doubling results in a number greater than 9, subtract 9
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        isSecondDigit = !isSecondDigit;
    }

    return (sum % 10 === 0);
}

// Event listener for form submission
checkoutForm.addEventListener('submit', function (event) {
    let errors = [];

    // Clear previous errors
    errorList.innerHTML = '';
    errorMessagesDiv.classList.add('hidden');

    // Get values
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expMonth = parseInt(document.getElementById('expMonth').value);
    const expYear = parseInt(document.getElementById('expYear').value);

    // Credit Card Validation
    if (!isValidLuhn(cardNumber)) {
        errors.push("Credit card number is invalid.");
    }

    // Expiration Date Validation
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // JS months are 0-indexed
    const currentYear = now.getFullYear();

    if (isNaN(expMonth) || expMonth < 1 || expMonth > 12) {
        errors.push("Expiration month must be between 1 and 12.");
    }

    if (isNaN(expYear) || expYear < currentYear) {
        errors.push("Expiration year must be this year or later.");
    } else if (expYear === currentYear && expMonth < currentMonth) {
        errors.push("Expiration month must be current or future month.");
    }

    // Display errors if any
    if (errors.length > 0) {
        event.preventDefault(); // Stop form submission
        errorMessagesDiv.classList.remove('hidden');
        errors.forEach(msg => {
            const li = document.createElement('li');
            li.textContent = msg;
            errorList.appendChild(li);
        });
    }
});
