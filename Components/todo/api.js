const express = require('express');
const todoRouter = express.Router();
const todoService = require("./service");

todoRouter.get('/', (req, res) => {
    todoService.getlist().then(data => {
        return res.send(data);
    });

});
todoRouter.post('/', (req, res) => {
    let todo ={
        content: req.body.content,
        date: req.body.date,
    }
    todoService.insertlist(todo).then(data => {
        return res.send(data);
    });
});
todoRouter.delete('/:todo_id', (req, res) => {
    let id  = req.params.todo_id
    todoService.deletelist(id).then(data => {
        return res.send(data);
    });
});

module.exports = todoRouter;
