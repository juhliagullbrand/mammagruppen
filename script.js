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
let toDoButton = document.querySelector("#buttonToDo");
let toDoInput = document.querySelector("#inputToDO");
let toDoUl = document.querySelector("#ulToDo");

toDoButton.addEventListener("click", () => {
  let todoText = toDoInput.value;

  if (todoText !== "") {
    let toDoLi = document.createElement("li");
    toDoLi.innerText = todoText;

    toDoUl.appendChild(toDoLi);
    toDoInput.value = "";

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.style.cursor = "pointer";
    toDoLi.appendChild(span);
  }
});

toDoUl.addEventListener("click", (event) => {
  if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
  }
});
