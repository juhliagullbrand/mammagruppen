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
