// index.js
const display = document.getElementById("displayInput"); // Only declare display ONCE

const clearDisplay = () => {
  display.value = "";
};

const appendToDisplay = (input) => {
  display.value += input;
};

const calculate = () => {
  try {
    display.value = eval(display.value); // Replace eval with a safer alternative
  } catch (error) {
    display.value = "Error";
  }
};
