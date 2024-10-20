import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<ThunkDispatch<RootState, any, AnyAction>>();