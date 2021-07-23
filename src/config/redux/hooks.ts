import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IState, IDispatch } from "./store";

export const useAppDispatch = () => useDispatch<IDispatch>()

export const useAppSelector: TypedUseSelectorHook<IState> = useSelector;
