import axios from "axios";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AddTodo from "./pages/add-todo/add-todo.component";
import TodoList from "./pages/todo-list/todo-list.component";
function App() {
	useEffect(() => {
		axios
			.get("https://rifaq-todo-default-rtdb.firebaseio.com/todolist.json")
			.then((response) => {
				console.log(response.data);
			});
	}, []);
	return (
		<div>
			<h1>TODO APPLICATION.</h1>
			<Switch>
				<Route exact path="/" component={AddTodo}></Route>
				<Route exact path="/todo-list" component={TodoList}></Route>
			</Switch>
		</div>
	);
}

export default App;
