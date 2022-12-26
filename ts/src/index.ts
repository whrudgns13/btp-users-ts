interface Todo{
    text : string;
    complate : boolean;
}
const btn = document.querySelector("#btn") as HTMLButtonElement;
const input = document.querySelector("#todoInput") as HTMLInputElement;
const form = document.querySelector("#todoForm") as HTMLFormElement;
const todoUl = document.querySelector("#todoList") as HTMLUListElement;
const todos : Todo[] = getLocalStorage();

const init = () =>{
    todos.forEach(createTodo);
}
const setLocalStorage = ()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
};

function getLocalStorage() : Todo[]{
    const todoJSON = localStorage.getItem("todos");
    if(todoJSON) return JSON.parse(todoJSON);
    return [];
}

const addTodo = (e : SubmitEvent)=> {
    e.preventDefault();
    const newTodo = {
        text : input.value,
        complate : false
    }
    createTodo(newTodo)
}

const createTodo = (todo : Todo)=>{
    todoUl.append(createLi(todo));
}

const createLi = (todo : Todo)=> {
    const li = document.createElement("li");
    const text = todo.text;
    const checkBox = createCheckBox(todo);
    li.append(text);
    li.append(checkBox);
    input.value = "";

    return li;
}

const createCheckBox = (todo : Todo) => {
    const checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.checked = todo.complate;
    
    checkBox.addEventListener("click",()=>{
        todo.complate = checkBox.checked;
        setLocalStorage();
    })
    return checkBox;
};



form.addEventListener("submit",addTodo);

init();
// btn.addEventListener("click",(e)=>{
//     console.log(input.value);
//     input.value = "";
// })