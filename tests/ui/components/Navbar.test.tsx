import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthState } from "../../../src/auth/interfaces";

describe('Pruebas de Navbar', () => {
    test('debe mostrar el nombre del usuario cuando está logeado', () => {
        const defaultState : AuthState = {
            logged: true,
            userName: 'Julián Rojas',
            logout: jest.fn()
        };
        render(
            <AuthContext.Provider value={defaultState}>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByLabelText('userName').innerHTML).toBe(defaultState.userName);
    })
    test('debe hacer logout al dar clic al botón', () => {
        const defaultState : AuthState = {
            logged: true,
            userName: 'Julián Rojas',
            logout: jest.fn()
        };
        render(
            <AuthContext.Provider value={defaultState}>
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route path="/" element={<Navbar />} />
                        <Route path="/login" element={<h1>Login Page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        const button = screen.getByLabelText('btn-logout');
        fireEvent.click(button);
        expect(defaultState.logout).toHaveBeenCalled();
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toBe('Login Page');
    })
})