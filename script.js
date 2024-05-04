document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const numberInput = document.getElementById("numberInput");
    const monthInput = document.getElementById("monthInput");
    const yearInput = document.getElementById("yearInput");
    const cvcInput = document.getElementById("cvcInput");

    nameInput.addEventListener("input", function () {
      this.value = this.value.replace(/[\d]/g, ""); // Allow only letters
    });

    numberInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, ""); // Allow only digits
      if (this.value.length > 16) this.value = this.value.slice(0, 16); // Limit to 16 digits
    });

    monthInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, ""); // Allow only digits
      if (parseInt(this.value) > 12) this.value = "12"; // Limit to 12
      if (this.value.length > 2) this.value = this.value.slice(0, 2); // Limit to 2 characters
    });

    yearInput.addEventListener("input", function () {
      const currentYear = new Date().getFullYear();
      let enteredYear = parseInt(this.value);
      if (isNaN(enteredYear)) enteredYear = currentYear; // If entered value is not a number, set it to current year
      if (enteredYear < currentYear) enteredYear = currentYear; // If entered year is less than current year, set it to current year
      if (enteredYear > currentYear + 15) enteredYear = currentYear + 15; // Limit to current year + 15 years
      this.value = enteredYear.toString();
    });

    cvcInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, ""); // Allow only digits
      if (this.value.length > 3) this.value = this.value.slice(0, 3); // Limit to 3 digits
    });
  });