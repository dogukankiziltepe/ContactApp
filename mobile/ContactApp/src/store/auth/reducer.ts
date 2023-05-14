import { AuthStore, AuthStoreTypes, SET_ALL_USERS_ERROR, SET_ALL_USERS_SUCCESS, SET_UPDATE_USER, SET_UPDATE_USER_ERROR, SET_UPDATE_USER_SUCCESS, SET_USER, SET_USER_ERROR, SET_USER_LOADING, SET_USER_LOGOUT, SET_USER_LOGOUT_ERROR, SET_USER_LOGOUT_SUCCESS, SET_USER_REGISTER, SET_USER_REGISTER_ERROR, SET_USER_REGISTER_LOADING, SET_USER_REGISTER_SUCCESS, SET_USER_SUCCESS } from './types';

const initialState: AuthStore = {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
    users: null,
    updateUser: null,
};

export function authReducer(state = initialState, action: AuthStoreTypes): AuthStore {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case SET_USER_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case SET_USER_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case SET_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: action.payload,
            };
        case SET_USER_LOGOUT:
            return {
                ...state,
            };
        case SET_USER_LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        case SET_USER_LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case SET_USER_REGISTER:
            return {
                ...state,
            };
        case SET_USER_REGISTER_SUCCESS:
            return {
                ...state,
            };
        case SET_USER_REGISTER_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case SET_USER_REGISTER_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case SET_ALL_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
            }
        case SET_ALL_USERS_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case SET_UPDATE_USER_SUCCESS:
            return {
                ...state,
                updateUser: action.payload,
            }
        case SET_UPDATE_USER_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}
