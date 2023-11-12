let inputText = document.querySelector("#inputText");
let addToDo = document.querySelector("#addToDo");
let clearToDo = document.querySelector("#clearToDo");
let toDoContainer = document.querySelector(".To-dos");

addToDo.addEventListener("click", (e)=>{
    let paraghraph =document.createElement("p");
    paraghraph.classList.add("paraghraph-style");
    toDoContainer.appendChild(paraghraph);
    paraghraph.innerHTML = inputText.value;
    inputText.value = "";
    e.preventDefault();

    paraghraph.addEventListener("click", ()=>{
        paraghraph.style.textDecoration = "line-through";
    });
    paraghraph.addEventListener("dblclick", ()=>{
       toDoContainer.removeChild(paraghraph);
    });
    clearToDo.addEventListener("click", ()=>{
        paraghraph.remove();
     });

});

