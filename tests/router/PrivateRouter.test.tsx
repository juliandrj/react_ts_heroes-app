import React from 'react';
import { render, screen } from "@testing-library/react";
import { AuthState } from "../../src/auth/interfaces";
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PrivateRouter } from '../../src/router/PrivateRouter';

describe('Prueba de PrivateRouter', () => {
    test('debe mostrar el children si está autenticado', () => {
        Storage.prototype.setItem = jest.fn();
        const defaultState : AuthState = {
            logged: true,
            userName: 'Julián Rojas'
        };
        const texto = "Ruta privada";
        render(
            <AuthContext.Provider value={defaultState}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRouter>
                        <h1>{texto}</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText(texto)).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled();
    })
    test('debe mostrar la pagina de login si no está autenticado', () => {
        const defaultState : AuthState = {
            logged: false,
            userName: ''
        };
        const textoPub = "Ruta pública";
        const textoPri = "Ruta privada";
        render(
            <AuthContext.Provider value={defaultState}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Routes>
                        <Route path="marvel" element={
                            <PrivateRouter>
                                <h1>{textoPri}</h1>
                            </PrivateRouter>
                        } />
                        <Route path="login" element={
                            <h1>{textoPub}</h1>
                        } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText(textoPub)).toBeTruthy();
    })
})