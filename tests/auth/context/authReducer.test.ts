import { authReducer } from '../../../src/auth/context/authReducer';
import { AuthActionType, AuthState } from '../../../src/auth/interfaces';

describe('Pruebas en authReducer', () => {
    test('debe cambiar el estado cuando (login)', () => {
        const defaultState : AuthState = {
            logged: false,
            userName: 'N/A'
        };
        const authState = authReducer(defaultState, {type: AuthActionType.login, payload: defaultState});
        expect(authState.logged).toBeTruthy();
    });
    test('debe cambiar el estado cuando (logout)', () => {
        const defaultState : AuthState = {
            logged: true,
            userName: 'Pedro'
        };
        const authState = authReducer(defaultState, {type: AuthActionType.logout, payload: defaultState});
        expect(authState.logged).toBeFalsy();
        expect(authState.userName).toBe('');
    });
})