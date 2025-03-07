import { AuthState } from "./AuthState";

export enum AuthActionType {
    login = "[AUTH] Login",
    logout = "[AUTH] Logout",
};

export interface AuthAction {
    type: AuthActionType,
    payload: AuthState
};