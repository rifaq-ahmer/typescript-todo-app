import { combineReducers } from "redux";
import { todoFormReducer } from "./todo-form.reducer";

export const rootReducer = combineReducers({
	todo: todoFormReducer,
});
