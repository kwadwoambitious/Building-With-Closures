// Function to create a counter with private variable `count`
function createCounter() {
  let count = 0;

  return {
    // Method to increment the count and log it using `this.count`
    increment: function () {
      count++;
      console.log(this.count);
    },

    // Method to get the current value of the private count
    getCount: function () {
      return count;
    },
  };
}

// Create a counter instance
const counter = createCounter();

// Call increment method
counter.increment();

// Log the current value of count
console.log(counter.getCount());
