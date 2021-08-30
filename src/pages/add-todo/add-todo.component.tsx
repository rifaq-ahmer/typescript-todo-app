import React, { FC } from "react";
import { FormikHelpers } from "formik";
import { useAppSelector } from "./../../hooks/useAppSelector";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../store/actions/action";
import TodoFormComponent from "../../components/todo-form/todo-form.component";
import { AddTodoProps, TodoFormDataAttributes } from "./add-todo.interface";

const AddTodo: FC<AddTodoProps> = ({ history }) => {
	const dispatch = useDispatch();
	const { todoData, editMode } = useAppSelector((state) => state.todo);

	const handleSubmit = (
		values: TodoFormDataAttributes,
		{ setSubmitting, resetForm }: FormikHelpers<TodoFormDataAttributes>
	): void => {
		console.log(values);
		history.push("/todo-list");
		if (!editMode) {
			values.id = uuidv4();
			dispatch(addTodo({ ...values }));
		} else {
			dispatch(updateTodo({ ...values }));
		}
		history.push("/todo-list");

		setSubmitting(false);
		resetForm();
	};
	console.log("ADD-TODO");

	return (
		<div>
			<TodoFormComponent
				onSubmit={handleSubmit}
				todoData={todoData}
				editMode={editMode}
			/>
		</div>
	);
};

export default AddTodo;
