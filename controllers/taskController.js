let tasks = [
    {
        id : 1, 
        title: "Tarea 1", 
        description: 'Descripción de la tarea 1',
    },
    {
        id : 2, 
        title: "Tarea 2", 
        description: 'Descripción de la tarea 2',
    },
    {
        id : 3, 
        title: "Tarea 3", 
        description: 'Descripción de la tarea 3',
    },
];

function getAllTask(){
    return tasks;
}

function getTaskById(id){
    return tasks.find(task => task.id === parseInt(id, 10));
}

function createTask(title,description){
    const newTask = {
        id: tasks.length + 1,
        title,
        description
    };
    tasks.push(newTask);
    return newTask;
};

function updateTask(id, title, description) {
    const task = tasks.find(task => task.id === parseInt(id, 10));
    if (task) {
        task.title = title;
        task.description = description;
        return task;
    }
    return null;
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === parseInt(id, 10));
    if (index !== -1) {
        const deletedTask = tasks[index];
        tasks.splice(index, 1);
        return deletedTask;
    }
    return null;
}

module.exports = {
    getAllTask,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}