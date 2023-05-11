import { apiConfig, getUrlCreate } from '../config/apiConfig';
import { LoginRequest, RegisterRequest } from '../types/AuthRequest';
// @ts-ignore
import { HttpClient } from '@library/HttpClient';

const client = HttpClient.getClient();

export default class AuthService {
    async login(request:LoginRequest) {
        return client.post(getUrlCreate(apiConfig.prefixes.auth.login), request);
    }
    async register(request:RegisterRequest){
        return client.post(getUrlCreate(apiConfig.prefixes.auth.register),request);
    } 
}