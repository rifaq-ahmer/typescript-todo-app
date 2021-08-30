import { ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
	type?: ButtonType;
	onClick?: () => void;
	children: ReactNode;
}
