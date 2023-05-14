import { User } from "../../types/User";

export const SET_USER = "SET_USER";
export const SET_USER_LOADING = "SET_USER_LOADING";
export const SET_USER_ERROR = "SET_USER_ERROR";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_LOGOUT = "SET_USER_LOGOUT";
export const SET_USER_LOGOUT_SUCCESS = "SET_USER_LOGOUT_SUCCESS";
export const SET_USER_LOGOUT_ERROR = "SET_USER_LOGOUT_ERROR";
export const SET_UPDATE_USER = "SET_UPDATE_USER";
export const SET_UPDATE_USER_SUCCESS = "SET_UPDATE_USER_SUCCESS";
export const SET_UPDATE_USER_ERROR = "SET_UPDATE_USER_ERROR";
export const SET_USER_REGISTER = "SET_USER_REGISTER";
export const SET_USER_REGISTER_SUCCESS = "SET_USER_REGISTER_SUCCESS";
export const SET_USER_REGISTER_ERROR = "SET_USER_REGISTER_ERROR";
export const SET_USER_REGISTER_LOADING = "SET_USER_REGISTER_LOADING";
export const SET_ALL_USERS = "SET_ALL_USERS";
export const SET_ALL_USERS_SUCCESS = "SET_ALL_USERS_SUCCESS";
export const SET_ALL_USERS_ERROR = "SET_ALL_USERS_ERROR";

export interface AuthStore {
    user: User | null;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    users: User[] | null;
    updateUser: User | null;
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
export interface SetAllUsersAction {
    type: typeof SET_ALL_USERS;
}
export interface SetAllUsersSuccessAction {
    type: typeof SET_ALL_USERS_SUCCESS;
    payload: User[];
}
export interface SetAllUsersErrorAction {
    type: typeof SET_ALL_USERS_ERROR;
    payload: string;
}
export interface SetUpdateUserAction {
    type: typeof SET_UPDATE_USER;
}
export interface SetUpdateUserSuccessAction {
    type: typeof SET_UPDATE_USER_SUCCESS;
    payload: User;
}
export interface SetUpdateUserErrorAction {
    type: typeof SET_UPDATE_USER_ERROR;
    payload: string;
}


export type AuthStoreTypes = SetUserAction | SetUserLoadingAction | SetUserErrorAction | SetUserSuccessAction | SetUserLogoutAction | SetUserLogoutSuccessAction | SetUserLogoutErrorAction | SetUserRegisterAction | SetUserRegisterSuccessAction | SetUserRegisterErrorAction | SetUserRegisterLoadingAction | SetAllUsersAction | SetAllUsersSuccessAction | SetAllUsersErrorAction | SetAllUsersSuccessAction | SetAllUsersErrorAction | SetUpdateUserAction | SetUpdateUserSuccessAction | SetUpdateUserErrorAction ;