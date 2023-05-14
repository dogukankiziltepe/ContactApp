import AuthService from "../../services/AuthService";
import { LoginRequest, RegisterRequest } from "../../types/AuthRequest";
import asyncStorage from "../../utils/asyncStorage";
import { setUserLoading, setUser, setUserSuccess, setUserError, setUserLogoutSuccess, setUserLogoutError, setUsers, setUserRegisterSuccess, SetUpdateUserSuccess, setUserAllUsersSuccess } from "../auth/actions";
import { setContactLoading, setContacts, setContactsError } from "../contact/actions";
const authService = new AuthService();


export function login(request: LoginRequest):any {
    return async (dispatch: any) => {
        dispatch(setUserLoading(true));
        const response = await authService.login(request);
        if (response.httpStatus === 201) {
            var cookies = response.headers["set-cookie"][0];
                    for (const cookie of cookies.split(';')) {
                        const [key, value] = cookie.split('=')
                        if (key === 'jwt') {
                            await asyncStorage.save("userToken", value)
                            break;
                        }
                    }
            dispatch(setUser(response.data));
            dispatch(setUserSuccess(true));
        }
        else {
            dispatch(setUserError(response.data));
        }
        dispatch(setUserLoading(false));
    };
}

export function register(request: RegisterRequest):any {
    return async (dispatch: any) => {
        dispatch(setUserLoading(true));
        const response = await authService.register(request);
        if (response.status === 201) {
            dispatch(setUserRegisterSuccess());
        }
        else {
            dispatch(setUserError(response.data));
        }
        dispatch(setUserLoading(false));
    };
}

export function logout():any {
    return async (dispatch: any) => {
        dispatch(setUserLoading(true));
        try {
            await asyncStorage.remove("userToken");
            dispatch(setUserLogoutSuccess());
        }
        catch (e: any) {
            dispatch(setUserLogoutError(e));
        }
        finally {
            dispatch(setUserLoading(false));
        }
    };
}

export function getAllUsers ():any{
    return async (dispatch: any) => {
        dispatch(setUserLoading(true));
        const response = await authService.getAllUsers();
        if (response.httpStatus === 200) {
            dispatch(setUserAllUsersSuccess(response.data));
        }
        else { 
            dispatch(setContactsError(response.data));
        }
        dispatch(setContactLoading(false));
    }
    
}

export function getUserDetails (userId: number):any{
    return async (dispatch: any) => {
        dispatch(setUserLoading(true));
        const response = await authService.getUserDetails(userId);
        if (response.httpStatus === 200) {
            dispatch(SetUpdateUserSuccess(response.data));
        }
        else { 
            dispatch(setUserError(response.data));
        }
        dispatch(setUserLoading(false));
    }
    
}

export function updateUser (userId: number, request: RegisterRequest):any{
    return async (dispatch: any) => {
        dispatch(setUserLoading(true));
        const response = await authService.updateUser(userId, request);
        if (response.httpStatus === 200) {
            dispatch(SetUpdateUserSuccess(response.data));
        }
        else { 
            dispatch(setUserError(response.data));
        }
        dispatch(setUserLoading(false));
    }
}

export function deleteUser(userId: number):any {
    return async (dispatch: any) => {
        dispatch(setUserLoading(true));
        const response = await authService.deleteUser(userId);
        if (response.httpStatus === 200) {
            return null;
        }
        else {
            dispatch(setUserError(response.data));
        }
        dispatch(setUserLoading(false));
    };
}
