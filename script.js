document.addEventListener("DOMContentLoaded", () => {
  const setInputRestrictions = (inputElement, regex, maxLength) => {
    inputElement.addEventListener("input", () => {
      let value = inputElement.value.replace(regex, ""); // Replace unwanted characters
      if (value.length > maxLength) {
        value = value.slice(0, maxLength); // Limit input length
      }
      // Add spaces after every four characters for card number
      if (inputElement.id === "numberInput") {
        value = value.replace(/(.{4})/g, "$1 ").trim();
      }
      inputElement.value = value;

      // Check if card number is valid
      const cardNumber = value.replace(/\s/g, ""); // Remove spaces for validation
      const errorElement = document.getElementById("cardNumberError");
      if (cardNumber.length < 16) {
        errorElement.textContent = "Card number must be 16 digits";
      } else {
        errorElement.textContent = "";
      }
    });
  };

  const nameInput = document.getElementById("nameInput");
  setInputRestrictions(nameInput, /[\d]/g, Infinity); // Allow only letters

  const numberInput = document.getElementById("numberInput");
  setInputRestrictions(numberInput, /\D/g, 19); // Allow only digits, limit to 19 characters (16 digits + 3 spaces)

  const monthInput = document.getElementById("monthInput");
  setInputRestrictions(monthInput, /\D/g, 2); // Allow only digits, limit to 2 characters
  monthInput.addEventListener("input", () => {
    const month = parseInt(monthInput.value);
    if (month > 12) monthInput.value = "12"; // Limit to 12
  });

  const yearInput = document.getElementById("yearInput");
  setInputRestrictions(yearInput, /\D/g, 2); // Allow only digits, limit to 4 characters

  const cvcInput = document.getElementById("cvcInput");
  setInputRestrictions(cvcInput, /\D/g, 3); // Allow only digits, limit to 3 digits
});
