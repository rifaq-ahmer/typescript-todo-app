import { TodoFormDataAttributes } from "../../pages/add-todo/add-todo.interface";
import { TodoFormAction } from "../store.interface";
import { ADD_TODO, EDIT_TODO, UPDATE_TODO, DELETE_TODO } from "./action-types";

export const addTodo = (contact: TodoFormDataAttributes): TodoFormAction => ({
	type: ADD_TODO,
	payload: contact,
});

export const editTodo = (todo: TodoFormDataAttributes): TodoFormAction => ({
	type: EDIT_TODO,
	payload: todo,
});

export const updateTodo = (todo: TodoFormDataAttributes): TodoFormAction => ({
	type: UPDATE_TODO,
	payload: todo,
});

export const deleteTodo = (id: string) => ({
	type: DELETE_TODO,
	payload: { id },
});
