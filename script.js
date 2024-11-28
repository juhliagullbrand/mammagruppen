const display = document.querySelector("#calculatorInput");

function appendToCalculator(input) {
  display.value += input;
}

function clearCalculator() {
  display.value = "";
}

function calculate() {
  try {
    display.value = Function(`"use strict"; return (${display.value})`)();
  } catch (error) {
    display.value = "Error";
  }
}

document.querySelectorAll("#calculatorNumb .calc").forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      clearCalculator();
    } else {
      appendToCalculator(value);
    }
  });
});
