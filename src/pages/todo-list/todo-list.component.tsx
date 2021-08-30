import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/button.component";
import { deleteTodo, editTodo } from "../../store/actions/action";

import {
	TodoFormDataAttributes,
	RootState,
} from "../add-todo/add-todo.interface";
import { TodoListProps } from "./todo-list.interface";

const TodoList: FC<TodoListProps> = ({ history }) => {
	const savedContact: any = useSelector<RootState>(
		(state) => state.todo.allTodo
	);
	const dispatch = useDispatch();

	const handleEdit = (todo: TodoFormDataAttributes): void => {
		dispatch(editTodo(todo));
		history.push("/");
	};
	const handleDelete = (id: string): void => {
		dispatch(deleteTodo(id));
	};

	return (
		<div>
			{savedContact.map((todo: TodoFormDataAttributes) => {
				return (
					<div>
						<h3>{todo.todo}</h3>

						<Button type="submit" onClick={() => handleEdit(todo)}>
							Edit
						</Button>
						<Button type="submit" onClick={() => handleDelete(todo.id)}>
							Delete
						</Button>
					</div>
				);
			})}

			<hr />
		</div>
	);
};

export default TodoList;
