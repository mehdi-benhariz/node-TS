import {RequestHandler} from "express"
import {Todo} from "../models/todo"

let todos :Todo[] =[]
//create a todo
export const createTodo:RequestHandler =(req,res,next)=>{
    const text:string=( req.body as {text:string}).text;
    const newTodo :Todo= new Todo(todos.length,text) 

    todos.push(newTodo)
    res.status(201).json({message:'Created',createdTodo :newTodo})
}
//update a todo
export const updateTodo:RequestHandler =(req,res,next)=>{
    const id:number= parseInt((req.params as {id:string}).id);

    const text:string=( req.body as {text:string}).text;
    console.log(id)
    const newTodo :Todo= new Todo(id,text) 

    todos[id] =  newTodo;
    res.status(201).json({message:'updated',updatedTodo :newTodo})
}
//get all todos
export const getAllTodos:RequestHandler =(req,res,next)=>{
    res.status(201).json({todos :todos})
}
//get one todo
export const getOneTodo:RequestHandler =(req,res,next)=>{
    const id:number= parseInt((req.params as {id:string}).id);
    const todo :Todo= todos[id];

    res.status(201).json({Todo :todo})
}
//delete a todo
export const removeTodo:RequestHandler =(req,res,next)=>{
    console.log('delete')
    const id:number= parseInt((req.query as {id:string}).id);

    todos = todos.splice(id,1)
    res.status(201).json({message:'removed'})
}