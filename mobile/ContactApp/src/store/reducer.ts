import { combineReducers } from "redux";
import { authReducer } from './auth/reducer';
import { contactReducer } from "./contact/reducer";

export const rootReducer = combineReducers({
	auth: authReducer,
	contact: contactReducer,
});

export type RootState = ReturnType<typeof rootReducer>;