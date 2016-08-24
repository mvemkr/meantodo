var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

// Get all todos
router.get('/todos', function(req, res, next) {
    Todo.find({}, function (err, todos) {
        if(err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    })
});

// Get single todoitem
router.get('/todo/:id', function(req, res, next) {
    Todo.findOne({
        _id: req.params.id
    }, function(err, todo){
        if(err) {
            res.send(err);
        } else {
            res.json(todo);
        }
    })
})
//save todo
router.post('/todo', function(req, res,next) {
    var todo = req.body;
    if(!todo.text || !(todo.isCompleted + '' ) ){
        res.status(400);
        res.json({ "error": "Invalid Data" })
    } else {
        var todoToSave = new Todo({
            text : todo.text,
            isCompleted : todo.isCompleted
        });

        todoToSave.save(function(err, result){
            if(err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});

//update todo
router.put('/todo/:id', function(req, res,next) {
    var todo = req.body;
    var updObj = {};

    if(todo.isCompleted) {
        updObj.isCompleted = todo.isCompleted;
    }

    if(todo.text) {
        updObj.text = todo.text;
    }

    if(!updObj){
        res.status(400);
        res.json({ "error": "Invalid Data" })
    } else {
        Todo.update(
            { _id: req.params.id },
            { $set: {
                    text: updObj.text,
                    isCompleted: updObj.isCompleted
                }
            },
            function(err, result) {
                if(err) {
                    res.send(err);
                } else {
                    res.json(result);
                }
            }
        )
    }
});

//delete todos
router.delete('/todo/:id', function(req, res, next) {
    Todo.remove({
        _id: req.params.id
    }, function(err, result){
        if (!err) {
            res.send(result);
        }
        else {
            res.send(err);
        }
    })
})

module.exports = router;