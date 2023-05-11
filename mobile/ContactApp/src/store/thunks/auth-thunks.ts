import AuthService from "../../services/AuthService";
import { LoginRequest, RegisterRequest } from "../../types/AuthRequest";
import asyncStorage from "../../utils/asyncStorage";
import { setUserLoading, setUser, setUserSuccess, setUserError, setUserLogoutSuccess, setUserLogoutError, setUserRegister, setUserRegisterSuccess } from "../auth/actions";
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