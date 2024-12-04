import { addTodo, saveTodos, renderTodos, deleteTodo, completeTodo, loadTodos } from "./taskManager.js";

let todos = loadTodos();

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskForm = document.getElementById("taskForm");

    renderTodos(todos, taskList);

    taskForm.addEventListener("submit", event => {
        event.preventDefault();
        const newTodo = {id: Date.now(), title: taskInput.value, completed: false};
        todos = addTodo(todos, newTodo);
        saveTodos(todos);
        taskInput.value = "";
        renderTodos(todos, taskList);
    });

    taskList.addEventListener("click", event => { 
        const target = event.target;

        if (target.classList.contains("checklist")) {
            const todoId = target.closest(".task").querySelector(".taskDelete").dataset.id;
            todos = completeTodo(todos, parseInt(todoId, 10));
            saveTodos(todos);
            renderTodos(todos, taskList);
        } 

        else if (target.classList.contains("taskDelete")) {
            const id = parseInt(event.target.dataset.id, 10);
            todos = deleteTodo(todos, id);
            saveTodos(todos);
            renderTodos(todos, taskList);
        }
    });
});
