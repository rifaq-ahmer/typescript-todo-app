import { AddTodoProps } from "../../pages/add-todo/add-todo.interface";
import { TodoFormAction } from "./../store.interface";

import {
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	UPDATE_TODO,
} from "../actions/action-types";

export const initialState: Pick<
	AddTodoProps,
	"allTodo" | "todoData" | "editMode"
> = {
	allTodo: [],
	editMode: false,
	todoData: {
		id: "",
		todo: "",
	},
};

export const todoFormReducer = (
	state = initialState,
	action: TodoFormAction
): Pick<AddTodoProps, "allTodo" | "todoData" | "editMode"> => {
	switch (action.type) {
		case ADD_TODO: {
			return {
				...state,
				allTodo: state.allTodo.concat(action.payload),
				todoData: {
					id: action.payload.id,
					todo: action.payload.todo,
				},
			};
		}
		case EDIT_TODO: {
			return {
				...state,
				todoData: state.allTodo.filter(
					(todo) => todo.id === action.payload.id
				)[0],
				editMode: true,
			};
		}
		case UPDATE_TODO: {
			return {
				...state,
				editMode: false,
				todoData: {
					id: "",
					todo: "",
				},
				allTodo: state.allTodo.map((todo) =>
					todo.id === action.payload.id
						? {
								...todo,
								id: action.payload.id,
								todo: action.payload.todo,
						  }
						: todo
				),
			};
		}
		case DELETE_TODO: {
			return {
				...state,
				allTodo: state.allTodo.filter((todo) => todo.id !== action.payload.id),
			};
		}

		default: {
			return state;
		}
	}
};
