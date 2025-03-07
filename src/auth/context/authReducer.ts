import { AuthAction, AuthActionType, AuthState } from "../interfaces";

export const authReducer = (state:AuthState, action:AuthAction):AuthState => {
    switch (action.type) {
        case AuthActionType.login:
            return {
                ...state,
                logged: true,
                userName: action.payload.userName
            };
        case AuthActionType.logout:
            return {
                ...state,
                logged: false,
                userName: ''
            };
        default:
            return {...state};
    }
}