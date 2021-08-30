import React, { FC } from "react";
import { Form, Formik } from "formik";
import { TodoFormProps } from "./todo-form.interface";
import Input from "./../input/input.component";
import Button from "./../button/button.component";

const TodoFormComponent: FC<TodoFormProps> = ({
	onSubmit,
	todoData,
	editMode,
}) => {
	const initialValues = {
		todo: "",
		id: "",
	};
	// console.log(onSubmit);
	console.log(editMode);

	return (
		// <Formik
		// 	initialValues={editMode ? todoData : initialValues}
		// 	onSubmit={onSubmit}
		// 	validateOnChange
		// >
		// 	{({ handleSubmit, handleChange, values }) => (
		// 		<Form onSubmit={handleSubmit} noValidate>
		// 			<Input
		// 				label="Add Todo"
		// 				id="todo"
		// 				inputName="todo"
		// 				type="text"
		// 				onChange={handleChange}
		// 				value={values.todo}
		// 			/>
		// 			<Button type="submit">Add Todo</Button>
		// 		</Form>
		// 	)}
		// </Formik>
		<>adasd</>
	);
};

export default TodoFormComponent;
