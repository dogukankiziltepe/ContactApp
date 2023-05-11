import { User } from "../../types/User";
import {SET_USER, SET_USER_ERROR, SET_USER_LOADING, SET_USER_LOGOUT, SET_USER_LOGOUT_ERROR, SET_USER_LOGOUT_SUCCESS, SET_USER_REGISTER, SET_USER_REGISTER_ERROR, SET_USER_REGISTER_SUCCESS, SET_USER_SUCCESS} from "./types";

export function setUser(payload: User) {
    return {
        type: SET_USER,
        payload,
    };
}

export function setUserLoading(payload: boolean) {
    return {
        type: SET_USER_LOADING,
        payload,
    };
}

export function setUserError(payload: string) {
    return {
        type: SET_USER_ERROR,
        payload,
    };
}

export function setUserSuccess(payload: boolean) {
    return {
        type: SET_USER_SUCCESS,
        payload,
    };
}

export function setUserLogout() {
    return {
        type: SET_USER_LOGOUT,
    };
}

export function setUserLogoutSuccess() {
    return {
        type: SET_USER_LOGOUT_SUCCESS,
    };
}

export function setUserLogoutError(payload: string) {
    return {
        type: SET_USER_LOGOUT_ERROR,
        payload,
    };
}

export function setUserRegister() {
    return {
        type: SET_USER_REGISTER,
    };
}

export function setUserRegisterSuccess() {
    return {
        type: SET_USER_REGISTER_SUCCESS,
    };
}

export function setUserRegisterError(payload: string) {
    return {
        type: SET_USER_REGISTER_ERROR,
        payload,
    };
}
