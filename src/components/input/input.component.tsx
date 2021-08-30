import React, { FC } from "react";
import { InputProps } from "./input.interface";

const Input: FC<InputProps> = (props) => {
	return (
		<div>
			<label htmlFor={props.inputName}>{props.label}</label>
			<input
				className="inputField"
				type={props.type}
				id={props.id}
				name={props.inputName}
				onChange={props.onChange}
				value={props.value}
			/>
		</div>
	);
};

export default Input;
