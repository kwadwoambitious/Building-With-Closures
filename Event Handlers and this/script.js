// Get the button element by its ID
const button = document.getElementById("myButton");

// Regular function for the event handler
function handleClick() {
  // 'this' refers to the button element inside the regular function
  console.log("this:", this);
  console.log("Button ID:", this.id);
  console.log("Button Text:", this.textContent);
}

// Attach the event listener to the button using a regular function
button.addEventListener("click", handleClick);

// Attach another event listener using an arrow function
button.addEventListener("click", () => {
  // 'this' inside the arrow function refers to the surrounding context (global/window)
  console.log("this:", this);
  console.log("Button ID:", this.id);
  console.log("Button Text:", this.textContent);
});
