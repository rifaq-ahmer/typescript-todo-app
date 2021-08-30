import React from "react";
import { Switch, Route } from "react-router-dom";
import Button from "./components/button/button.component";
import TodoFormComponent from "./components/todo-form/todo-form.component";
import TodoList from "./pages/todo-list/todo-list.component";
function App() {
	return (
		<div>
			<h1>TODO APPLICATION.</h1>
			<Switch>
				<Route exact path="/" component={TodoFormComponent}></Route>
				<Route exact path="/todo-list" component={TodoList}></Route>
			</Switch>
		</div>
	);
}

export default App;
