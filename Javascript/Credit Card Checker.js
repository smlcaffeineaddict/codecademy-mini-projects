// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
// Validate CC numbers
function validateCred(cardNumber){
  let sum = 0;
  for (let i = cardNumber.length - 1; i >= 0; i--){
    let digit = cardNumber[i];
    if (i % 2 === 0){
      digit *= 2;
      if (digit > 9){
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}

// Find Invalid Cards
function findInvalidCards(cardNumbers) {
  return cardNumbers.filter(cardNumber => !validateCred(cardNumber));
}

// Identify invalid card companies
function idInvalidCardCompanies(invalidCards) {
  const companies = new Set();

  for (const card of invalidCards) {
    const firstDigit = card[0];
    switch (firstDigit) {
      case 3:
        companies.add('Amex (American Express)');
        break;
      case 4:
        companies.add('Visa');
        break;
      case 5:
        companies.add('Mastercard');
        break;
      case 6:
        companies.add('Discover');
        break;
      default:
        console.log('Company not found');
    }
  }

  return Array.from(companies);
}


const invalidCards = findInvalidCards(batch);
const companies = idInvalidCardCompanies(invalidCards);

console.log(invalidCards);
console.log(companies);

// Challenge
// Converting strings to number arrays
function stringToNumberArray(str) {
  return str.split('').map(char => parseInt(char));
}

// Generating random cc numbers
function generateRandomCreditCardNumber(length = 16) {
  const prefix = Math.floor(Math.random() * 4) + 4; // 4 for Visa, 5 for Mastercard, etc.
  const number = Array.from({ length }, () => Math.floor(Math.random() * 9));
  number.unshift(prefix);
  // Implement Luhn algorithm to generate a valid check digit here
  return number;
}


// Converting invalid numbers to valid
function convertToValid(invalidNumber) {
  const number = [...invalidNumber];
  number[number.length - 1] = calculateCheckDigit(number.slice(0, -1));
  return number;
}

function calculateCheckDigit(number) {
  let sum = 0;
  let double = false;

  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number[i], 10);

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    double = !double;
  }

  return (10 - (sum % 10)) % 10;
}


// Testing
// Example usage:
const stringCardNumber = '4123456789012345';
const numberArray = stringToNumberArray(stringCardNumber);
const isValid = validateCred(numberArray);
console.log(isValid); // Output: true or false

const randomCard = generateRandomCreditCardNumber();
console.log(randomCard);

const invalidCard = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const validCard = convertToValid(invalidCard);
console.log(validCard);




