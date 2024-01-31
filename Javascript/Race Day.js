// Generate a random race number between 0 and 999
let raceNumber = Math.floor(Math.random() * 1000);

// Indicate whether the runner registered early
let earlyRegister = true;

// Store the runner's age
let runnerAge = 18;

// Assign race numbers and times based on registration status and age:

// If the runner registered early and is 18 or older:
if (earlyRegister === true && runnerAge >= 18) {
 // Add 1000 to the race number for early registrants
 raceNumber += 1000;
 console.log(`Your race number is ${raceNumber}. Your race is at 9:30am.`);
}
// If the runner registered late but is 18 or older:
else if (earlyRegister === false && runnerAge >= 18) {
 console.log(`Your race number is ${raceNumber}. Your race is at 11:00am.`);
}
// If the runner is under 18 (regardless of registration status):
else if (runnerAge <= 18) {
 console.log(`Your race number is ${raceNumber}. Your race is at 12:30pm.`);
}
