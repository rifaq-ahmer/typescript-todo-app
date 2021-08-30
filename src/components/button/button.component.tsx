import React from "react";
import { ButtonProps } from "./button.interface";

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button className="button" type={props.type} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
