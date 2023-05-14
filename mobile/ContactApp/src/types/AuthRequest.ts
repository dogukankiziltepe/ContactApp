export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
    status: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}