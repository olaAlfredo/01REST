const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', (req, res)=> {
    const tasks = taskController.getAllTask();
    res.status(200).json(tasks);

});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const task = taskController.getTaskById(id);
    res.status(200).json(task);
});

router.post('/', (req, res)=> {
   const {title, description} = req.body;
   const newTask = taskController.createTask(title, description);
   res.status(200).json(newTask);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const updateTask = taskController.updateTask(id, title, description);
    res.status(200).json(updateTask);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deletedTask = taskController.deleteTask(id);
    res.status(200).json(deletedTask);
});

router.up

module.exports = router;