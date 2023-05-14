import { useSelector } from "react-redux";
import { RootState } from "../reducer";

export const getUser = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return user;
};

// get isAuthenticated
export const getIsAuthenticated = () => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );
    return isAuthenticated;
}
// get loading
export const getLoading = () => {
    const loading = useSelector((state: RootState) => state.auth.loading);
    return loading;
}

export const getError = () => {
    const error = useSelector((state: RootState) => state.auth.error);
    return error;
}

export const getUsers = () => {
    const users = useSelector((state: RootState) => state.auth.users);
    return users;
}

export const getUpdateUser = () => {
    const updateUser = useSelector((state: RootState) => state.auth.updateUser);
    return updateUser;
}

