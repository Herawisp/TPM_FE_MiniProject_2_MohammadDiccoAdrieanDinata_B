export const addTodo = (todos, newTodo) => {
    return [...todos, newTodo];
};

export const deleteyTodo = (todos, id) => {
    return todos.filter(todo => todo.id !== id);
};

export const completeTodo = (todos, id) => {
    return todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
};

export const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

export const loadTodos = () => {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
};

export const renderTodos = (todos, container) => {
    container.innerHTML = "";
    todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.innerHTML = `
            <div class="task">
                <div class="taskInfo">
                    <div class="checklist ${todo.completed ? 'completed' : ''}"></div>
                    <p>${todo.title}</p>
                </div>
                <button class="taskDelete" data-id="${todo.id}"></button>
            </div>
        `;
        container.appendChild(todoElement);
    });
};
