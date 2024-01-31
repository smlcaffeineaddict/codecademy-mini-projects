// Store the phrase to be translated
const input = "turpentine and turtles";

// Array of allowable vowels in whale talk
const vowels = ["a", "e", "i", "o", "u"];

// Array to store the translated vowels
const resultArray = [];

// Iterate through each letter in the input string
for (let i = 0; i < input.length; i++) {
  // Check for special vowels 'e' and 'u'
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i], input[i]); // Double the vowel for emphasis
  } else {
    // Check for other vowels
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        resultArray.push(input[i]); // Add the vowel to the result array
        break; // Exit the inner loop as we found a match
      }
    }
  }
}

// Join the translated vowels into a single string and capitalize
const resultString = resultArray.join('').toUpperCase();

// Output the final whale talk string
console.log(resultString);
