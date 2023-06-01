import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import session from "./session";

export const store = configureStore({ reducer: { counter, session } })