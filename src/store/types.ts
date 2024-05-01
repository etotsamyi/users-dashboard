import { Action, ThunkDispatch } from "@reduxjs/toolkit/react";
import { store } from "./store";

export type TAppState = ReturnType<typeof store.getState>;
export type TDispatch = ThunkDispatch<TAppState, void, Action>;
export type TThunkDispatch<T> = ThunkDispatch<TAppState, T, Action>;
