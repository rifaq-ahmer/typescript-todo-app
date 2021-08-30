import { FormikHelpers } from "formik";
import { TodoFormDataAttributes } from "../../pages/add-todo/add-todo.interface";

export interface TodoFormProps {
	todoData: TodoFormDataAttributes;
	editMode?: boolean;
	onSubmit: (
		values: TodoFormDataAttributes,
		{ setSubmitting, resetForm }: FormikHelpers<TodoFormDataAttributes>
	) => void;
}
