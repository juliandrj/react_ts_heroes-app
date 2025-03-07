import { useReducer } from "react"
import { AuthActionType, AuthProviderProps, AuthState } from "../interfaces"
import { AuthContext, initialAuthState } from "./AuthContext"
import { authReducer } from "./authReducer"

const init = ():AuthState => {
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
        return JSON.parse(userJson);
    }
    return initialAuthState;
};

export const AuthProvider = ({children}:AuthProviderProps) => {
    const [authState, dispatch] = useReducer(authReducer, initialAuthState, init);
    const login = (userName:string) => {
        const user:AuthState = {
            userName
            ,logged: true
        };
        dispatch({
            type: AuthActionType.login,
            payload: user
        });
        localStorage.setItem("user", JSON.stringify(user));
    };
    const logout = () => {
        dispatch({
            type: AuthActionType.logout,
            payload: {
                userName: '',
                logged: false
            }
        });
        localStorage.removeItem("user");
    };
    return (
        <AuthContext.Provider value={{...authState, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
