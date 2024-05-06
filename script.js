const nameInput = document.querySelector('#nameInput')
const numberInput = document.querySelector('#numberInput')
const monthInput = document.querySelector('#monthInput')
const yearInput = document.querySelector('#yearInput')
const cvcInput = document.querySelector('#cvcInput')
const viewCardNumber = document.querySelector('.card_number')
const viewCardName = document.querySelector('.cardholder_name')
const viewCardDate = document.querySelector('.card_date')
const viewCardMonth = document.querySelector('.card_month')
const viewCardCvc = document.querySelector('.cvv')
const complete = document.querySelector('.complete')
const cardForm = document.querySelector('.cardForm')


function setCardNumber (e) {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/(.{4})/g, "$1 ").trim();
  viewCardNumber.innerText = value;
}
function setCardName (e) {
  let value = e.target.value; 
  viewCardName.innerText = value;
}
function setCardMonth (e) {
  let value = e.target.value; 
  viewCardDate.innerText = value;
}
function setCardYear  (e) {
  let value = e.target.value;
  viewCardMonth.innerText = value;
}
function setCVC (e) {
  let value = e.target.value; 
  viewCardCvc.innerText = value;
}

numberInput.addEventListener('input', setCardNumber);
nameInput.addEventListener('input', setCardName);
monthInput.addEventListener('input', setCardMonth);
yearInput.addEventListener('input', setCardYear);
cvcInput.addEventListener('input', setCVC);