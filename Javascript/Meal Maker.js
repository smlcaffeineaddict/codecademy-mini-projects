// Define a menu object with properties and methods for managing a daily special
const menu = {

  // Private properties to store the meal and price (underscore prefix for privacy)
  _meal: "",
  _price: 0,

  // Getter method for the meal property
  get meal() {
    return this._meal;
  },

  // Setter method for the meal property, enforcing type checking
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    } else {
      console.warn("Invalid meal entered, must be a string!");
      // TODO: Add more specific error handling if needed
    }
  },

  // Getter method for today's special, ensuring both meal and price are set
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price.toFixed(2)}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },

  // Getter method for the price property
  get price() {
    return this._price;
  },

  // Setter method for the price property, handling numbers and strings
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      // Existing logic for numbers (not shown in prompt)
    } else if (typeof priceToCheck === "string") {
      const parsedPrice = parseFloat(priceToCheck);
      if (!isNaN(parsedPrice) && parsedPrice >= 0) {
        this._price = parsedPrice;
      } else {
        console.warn("Invalid price entered, cannot be parsed as a number or is negative!");
      }
    } else {
      console.warn("Invalid price entered, must be a number or a string!");
    }
  },
};

// Set the meal and price using the setters
menu.meal = 'Pasta';
menu.price = '12.99'; // Setter handles string conversion

// Log the today's special to the console
console.log(menu.todaysSpecial);
