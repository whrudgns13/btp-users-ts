"use strict";
const btn = document.querySelector("#btn");
const input = document.querySelector("#todoInput");
const form = document.querySelector("#todoForm");
const todoUl = document.querySelector("#todoList");
const todos = getLocalStorage();
const init = () => {
    todos.forEach(createTodo);
};
const setLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
function getLocalStorage() {
    const todoJSON = localStorage.getItem("todos");
    if (todoJSON)
        return JSON.parse(todoJSON);
    return [];
}
const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        complate: false
    };
    createTodo(newTodo);
};
const createTodo = (todo) => {
    todoUl.append(createLi(todo));
};
const createLi = (todo) => {
    const li = document.createElement("li");
    const text = todo.text;
    const checkBox = createCheckBox(todo);
    li.append(text);
    li.append(checkBox);
    input.value = "";
    return li;
};
const createCheckBox = (todo) => {
    const checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.checked = todo.complate;
    checkBox.addEventListener("click", () => {
        todo.complate = checkBox.checked;
        setLocalStorage();
    });
    return checkBox;
};
form.addEventListener("submit", addTodo);
init();
// btn.addEventListener("click",(e)=>{
//     console.log(input.value);
//     input.value = "";
// })
