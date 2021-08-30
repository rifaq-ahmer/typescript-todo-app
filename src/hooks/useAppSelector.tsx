import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../pages/add-todo/add-todo.interface";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
