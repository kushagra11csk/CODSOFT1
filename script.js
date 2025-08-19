// script.js
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    
    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Clear button
clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

// Equal button
equalBtn.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput).toString(); // evaluates expression
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
});
