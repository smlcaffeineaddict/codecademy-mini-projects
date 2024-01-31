function getSleepHours(day) {
  switch (day.toLowerCase()) {
    case "monday":
      return 7; // Replace with your actual hours for Monday
    case "tuesday":
      return 6; // Replace with your actual hours for Tuesday
    case "wednesday":
      return 8; // Replace with your actual hours for Wednesday
    case "thursday":
      return 6; // Replace with your actual hours for Thursday
    case "friday":
      return 7; // Replace with your actual hours for Friday
    case "saturday":
      return 9; // Replace with your actual hours for Saturday
    case "sunday":
      return 8; // Replace with your actual hours for Sunday
    default:
      return "Invalid day";
  }
}

function getActualSleepHours() {
  let totalSleepHours = 0;
  for (let day of ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]) {
    totalSleepHours += getSleepHours(day);
  }
  return totalSleepHours;
}

// Modified getIdealSleepHours() to accept an argument
function getIdealSleepHours(idealHoursPerNight) {
  return idealHoursPerNight * 7;
}

function calculateSleepDebt() {
   const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8); // Adjust the ideal hours per night here

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    const extraHours = actualSleepHours - idealSleepHours;
    console.log("You got more sleep than needed! You slept", extraHours, "hours more than your ideal.");
  } else {
    const sleepDebt = idealSleepHours - actualSleepHours;
    console.log("You should get some rest! You're", sleepDebt, "hours short of your ideal sleep.");
  }
}

calculateSleepDebt(); // Start the program
