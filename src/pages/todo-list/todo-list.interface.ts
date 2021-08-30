import { RouteChildrenProps } from "react-router-dom";
import { TodoFormDataAttributes } from "../add-todo/add-todo.interface";

export interface TodoListProps extends RouteChildrenProps {
	savedContact: Array<TodoFormDataAttributes>;
}
