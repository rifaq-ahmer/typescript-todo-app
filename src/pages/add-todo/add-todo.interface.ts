import { RouteChildrenProps } from "react-router-dom";

import { configureStore } from "./../../store/index";
import { TodoFormAction } from "../../store/store.interface";
export interface TodoFormDataAttributes {
	id: string;
	todo: string;
}

export interface AddTodoProps extends RouteChildrenProps {
	allTodo: Array<TodoFormDataAttributes>;
	todoData: TodoFormDataAttributes;
	editMode?: boolean;
	updateContact: (todo: TodoFormDataAttributes) => TodoFormAction;
}
const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
