import { createContext } from "react";
import { AuthState } from "../interfaces";

export const initialAuthState: AuthState = {
    logged: false,
    userName: ''
};

export const AuthContext = createContext(initialAuthState);
