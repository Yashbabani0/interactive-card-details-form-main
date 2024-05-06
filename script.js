document.addEventListener("DOMContentLoaded", () => {
  const setInputRestrictions = (inputElement, regex, maxLength, errorMessageId) => {
    inputElement.addEventListener("input", () => {
      let value = inputElement.value.replace(regex, ""); // Replace unwanted characters
      if (value.length > maxLength) {
        value = value.slice(0, maxLength); // Limit input length
      }

      // Add spaces after every four characters for card number
      if (inputElement.id === "numberInput") {
        value = value.replace(/\D/g, ''); // Remove non-digit characters
        value = value.replace(/(.{4})/g, "$1 ").trim();
      }
      
      inputElement.value = value;

      // Check if input is valid
      const errorElement = document.getElementById(errorMessageId);
      if (value === "") {
        inputElement.classList.add("error"); // Add error class to input
        errorElement.style.display = "block"; // Display error message
      } else {
        inputElement.classList.remove("error"); // Remove error class from input
        errorElement.style.display = "none"; // Hide error message
      }
    });
  };

  const nameInput = document.getElementById("nameInput");
  setInputRestrictions(nameInput, /[^\w\s]/gi, 50, "nameError");

  const numberInput = document.getElementById("numberInput");
  setInputRestrictions(numberInput, /\D/g, 19, "cardNumberError");

  const monthInput = document.getElementById("monthInput");
  setInputRestrictions(monthInput, /\D/g, 2, "monthYearError");

  const yearInput = document.getElementById("yearInput");
  setInputRestrictions(yearInput, /\D/g, 4, "monthYearError");

  const cvcInput = document.getElementById("cvcInput");
  setInputRestrictions(cvcInput, /\D/g, 3, "cvcError");

  const viewCardNumber = document.querySelector('.card_number');
  const viewCardName = document.querySelector('.cardholder_name');
  const viewCardDate = document.querySelector('.card_date');
  const viewCardMonth = document.querySelector('.card_month');
  const viewCardCvc = document.querySelector('.cvv');

  function setCardNumber(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(.{4})/g, "$1 ").trim();
    viewCardNumber.innerText = value;
  }

  function setCardName(e) {
    let value = e.target.value; 
    viewCardName.innerText = value;
  }

  function setCardMonth(e) {
    let value = e.target.value; 
    viewCardDate.innerText = value;
  }

  function setCardYear(e) {
    let value = e.target.value;
    viewCardMonth.innerText = value;
  }

  function setCVC(e) {
    let value = e.target.value; 
    viewCardCvc.innerText = value;
  }

  numberInput.addEventListener('input', setCardNumber);
  nameInput.addEventListener('input', setCardName);
  monthInput.addEventListener('input', setCardMonth);
  yearInput.addEventListener('input', setCardYear);
  cvcInput.addEventListener('input', setCVC);
});
