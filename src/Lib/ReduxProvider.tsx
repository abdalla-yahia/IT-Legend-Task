"use client";

import { Provider } from "react-redux";
import { makeStore } from "./Store/store";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={makeStore()}>{children}</Provider>;
}