function createTimer(duration, elementId) {
  // Initialize the remaining time to the provided duration
  let remainingTime = duration;

  // Function to update the timer display and check if it finished
  function updateTimer() {
    const element = document.getElementById(elementId);
    this.textContent = `Time remaining: ${remainingTime}`;

    // If time is up, stop the timer and log a message
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      console.log("Timer finished!");
    } else {
      remainingTime--;
    }
  }

  // Set up an interval to call the update function every second
  const timerInterval = setInterval(function () {
    const element = document.getElementById(elementId);
    updateTimer.call(element);
  }, 1000);

  // Initial update to display the starting time immediately
  updateTimer.call(document.getElementById(elementId));
}

// Start a 10-second timer on an element with ID "timer"
createTimer(10, "timer");
