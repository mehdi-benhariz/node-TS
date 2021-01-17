import {Router} from 'express'

export const router = Router();

import{createTodo,removeTodo,updateTodo,getAllTodos,getOneTodo} from "../controllers/todos";

router.get('/',getAllTodos)

router.get('/:id',getOneTodo)

router.post('/',createTodo)

router.delete('/:id',removeTodo)

router.patch('/:id',updateTodo)

