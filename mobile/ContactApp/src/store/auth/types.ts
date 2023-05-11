import { User } from "../../types/User";

export const SET_USER = "SET_USER";
export const SET_USER_LOADING = "SET_USER_LOADING";
export const SET_USER_ERROR = "SET_USER_ERROR";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_LOGOUT = "SET_USER_LOGOUT";
export const SET_USER_LOGOUT_SUCCESS = "SET_USER_LOGOUT_SUCCESS";
export const SET_USER_LOGOUT_ERROR = "SET_USER_LOGOUT_ERROR";
export const SET_USER_REGISTER = "SET_USER_REGISTER";
export const SET_USER_REGISTER_SUCCESS = "SET_USER_REGISTER_SUCCESS";
export const SET_USER_REGISTER_ERROR = "SET_USER_REGISTER_ERROR";
export const SET_USER_REGISTER_LOADING = "SET_USER_REGISTER_LOADING";

export interface AuthStore {
    user: User | null;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}
export interface SetUserAction {
    type: typeof SET_USER;
    payload: User;
}
export interface SetUserLoadingAction {
    type: typeof SET_USER_LOADING;
    payload: boolean;
}
export interface SetUserErrorAction {
    type: typeof SET_USER_ERROR;
    payload: string;
}
export interface SetUserSuccessAction {
    type: typeof SET_USER_SUCCESS;
    payload: boolean;
}
export interface SetUserLogoutAction {
    type: typeof SET_USER_LOGOUT;
}
export interface SetUserLogoutSuccessAction {
    type: typeof SET_USER_LOGOUT_SUCCESS;
}
export interface SetUserLogoutErrorAction {
    type: typeof SET_USER_LOGOUT_ERROR;
    payload: string;
}
export interface SetUserRegisterAction {
    type: typeof SET_USER_REGISTER;
}
export interface SetUserRegisterSuccessAction {
    type: typeof SET_USER_REGISTER_SUCCESS;
}
export interface SetUserRegisterErrorAction {
    type: typeof SET_USER_REGISTER_ERROR;
    payload: string;
}
export interface SetUserRegisterLoadingAction {
    type: typeof SET_USER_REGISTER_LOADING;
    payload: boolean;
}

export type AuthStoreTypes = SetUserAction | SetUserLoadingAction | SetUserErrorAction | SetUserSuccessAction | SetUserLogoutAction | SetUserLogoutSuccessAction | SetUserLogoutErrorAction | SetUserRegisterAction | SetUserRegisterSuccessAction | SetUserRegisterErrorAction | SetUserRegisterLoadingAction;