// Function to generate a random event for an athlete
const getRandEvent = () => {
  // Generate a random number between 0 and 2 (inclusive)
  const random = Math.floor(Math.random() * 3);

  // Assign a specific event based on the generated random number
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// Function to determine the number of training days required for a given event
const getTrainingDays = (event) => {
  let days = 0;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// Function to log an athlete's assigned event
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

// Function to log the number of training days required for an athlete
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// Assign the initial athlete's name
const name = 'Nala';

// Generate a random event for Nala and determine the training days
const event = getRandEvent();
const days = getTrainingDays(event);

// Log the event and training days for Nala
logEvent(name, event);
logTime(name, days);

// Repeat the process for another athlete, Warren
const event2 = getRandEvent(); // Generate a new random event for Warren
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
