let tasks = [
    { id: 1, description: "Aprender JavaScript", completed: false },
    { id: 2, description: "Leer un libro sobre CSS", completed: false },
    { id: 3, description: "Hacer ejercicio", completed: false },
];

// Función para renderizar la lista de tareas
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    for (let task of tasks) {
        const taskItem = document.createElement('li');

        taskItem.innerHTML = `
            <span style="text-decoration: ${task.completed ? 'line-through' : 'none'};">
                ${task.description}
            </span>
            <div>
                <button onclick="toggleTask(${task.id})" style="background-color: #3572EF;">${task.completed ? 'Desmarcar' : 'Completar'}</button>
                <button onclick="deleteTask(${task.id})" style="background-color: #C80036; color: white;">Eliminar</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    }

    updateSummary();
}

// Función para agregar una nueva tarea
function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const description = newTaskInput.value.trim();

    if (description) {
        const newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            description,
            completed: false,
        };
        tasks.push(newTask);
        newTaskInput.value = '';
        renderTasks();
    }
}

// Función para borrar una tarea
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// Función para marcar una tarea como completada o no
function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}


function updateSummary() {
    const totalTasks = document.getElementById('total-tasks');
    const completedTasks = document.getElementById('completed-tasks');
    
    totalTasks.textContent = tasks.length;
    completedTasks.textContent = tasks.filter(task => task.completed).length;
}


renderTasks();

