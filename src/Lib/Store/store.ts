import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook,
} from "react-redux";
import Lesson_Slice from '@/Features/Slices/Lesson_Slice';

export const makeStore = () =>
  configureStore({
    reducer: {
      lesson: Lesson_Slice,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
