// Declare the original story as a string
let story = `Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.`;

// Split the story into an array of words
let storyWords = story.split(' ');

// Define words to be replaced or checked
let unnecessaryWord = "literally"; // Word to remove
let misspelledWord = "beautifull"; // Word to spell-check
let badWord = "freaking"; // Word to replace

// Count the number of words in the original story
let count = 0;
storyWords.forEach((word) => {
  count++;
});
console.log("Number of words in the original story:", count);

// Print the original story
console.log("Original story:");
console.log(storyWords.join(" "));

// Spell-check "beautifull" to "beautiful" using .map()
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautiful";
  } else {
    return word;
  }
});
console.log("Story after spell-checking 'beautifull':");
console.log(storyWords.join(" "));

// Remove "literally" using .filter()
storyWords = storyWords.filter((word) => word !== unnecessaryWord);
console.log("Number of words after filtering 'literally':", storyWords.length);

// Find and replace "freaking" with "really"
let badWordIndex = storyWords.findIndex((word) => word === badWord);

if (badWordIndex !== -1) {
  storyWords[badWordIndex] = "really";

  console.log(`Found the "bad word" at index ${badWordIndex}`);
} else {
  console.log("No 'bad word' found!");
}

// Check if all words are 10 characters or less using .every()
let lengthCheck = storyWords.every((word) => word.length <= 10);
if (lengthCheck){
   console.log("Every word in the story has 10 characters or less!");
} else {
  console.log("There are words longer than 10 characters in the story.");
}

// Find and replace the first word longer than 10 characters
let longWord = storyWords.find(word => word.length > 10);

if (longWord) {
  for (let i = 0; i < storyWords.length; i++) {
    if (storyWords[i].length > 10) {
      storyWords[i] = 'stunning'; // Replace with your choice
      break; // Stop after replacing the first long word
    }
  }

  // Join the edited words back into a string
  let editedStory = storyWords.join(' ');
  console.log("Original story with edited array:");
  console.log(editedStory);
}

// Enjoy your polished and improved story!
