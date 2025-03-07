import React from 'react';
import { render, screen } from "@testing-library/react";
import { AuthState } from "../../src/auth/interfaces";
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from '../../src/router/AppRouter';
import { Publisher } from '../../src/heroes/interfaces';

describe('Prueba de AppRouter', () => {
    test('debe mostrar el login si no está autenticado', () => {
        const defaultState : AuthState = {
            logged: false,
            userName: ''
        };
        render(
            <AuthContext.Provider value={defaultState}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toBe('Login Page');
    })
    test('debe mostrar la pagina de marvel si está autenticado', () => {
        const defaultState : AuthState = {
            logged: true,
            userName: 'Pedro'
        };
        render(
            <AuthContext.Provider value={defaultState}>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toBe(`${Publisher.MarvelComics}`);
        expect(screen.getByLabelText('userName').innerHTML).toBe(defaultState.userName);
    })
})