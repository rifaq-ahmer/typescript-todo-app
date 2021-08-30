import { Action } from "redux";
import {
	AddTodoProps,
	TodoFormDataAttributes,
} from "../pages/add-todo/add-todo.interface";
import {
	ADD_TODO,
	EDIT_TODO,
	UPDATE_TODO,
	DELETE_TODO,
} from "./actions/action-types";

export interface TodoFormAction extends Action {
	type:
		| typeof ADD_TODO
		| typeof EDIT_TODO
		| typeof UPDATE_TODO
		| typeof DELETE_TODO;
	payload: TodoFormDataAttributes;
}

export interface AppStore {
	form: AddTodoProps;
}
