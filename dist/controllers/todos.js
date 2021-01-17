"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTodo = exports.getOneTodo = exports.getAllTodos = exports.updateTodo = exports.createTodo = void 0;
var todo_1 = require("../models/todo");
var todos = [];
//create a todo
var createTodo = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new todo_1.Todo(todos.length, text);
    todos.push(newTodo);
    res.status(201).json({ message: 'Created', createdTodo: newTodo });
};
exports.createTodo = createTodo;
//update a todo
var updateTodo = function (req, res, next) {
    var id = parseInt(req.params.id);
    var text = req.body.text;
    console.log(id);
    var newTodo = new todo_1.Todo(id, text);
    todos[id] = newTodo;
    res.status(201).json({ message: 'updated', updatedTodo: newTodo });
};
exports.updateTodo = updateTodo;
//get all todos
var getAllTodos = function (req, res, next) {
    res.status(201).json({ todos: todos });
};
exports.getAllTodos = getAllTodos;
//get one todo
var getOneTodo = function (req, res, next) {
    var id = parseInt(req.params.id);
    var todo = todos[id];
    res.status(201).json({ Todo: todo });
};
exports.getOneTodo = getOneTodo;
//delete a todo
var removeTodo = function (req, res, next) {
    console.log('delete');
    var id = parseInt(req.query.id);
    todos = todos.splice(id, 1);
    res.status(201).json({ message: 'removed' });
};
exports.removeTodo = removeTodo;
