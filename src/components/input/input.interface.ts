import { ChangeEvent } from "react";

export interface InputProps {
	id: string;
	type: string;
	label: string;
	inputName: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
