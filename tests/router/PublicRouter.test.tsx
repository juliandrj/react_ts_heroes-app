import React from 'react';
import { render, screen } from "@testing-library/react";
import { AuthState } from "../../src/auth/interfaces";
import { AuthContext } from '../../src/auth/context/AuthContext';
import { PublicRouter } from '../../src/router/PublicRouter';
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Prueba de PublicRouter', () => {
    test('debe mostrar el children si no está autenticado', () => {
        const defaultState : AuthState = {
            logged: false,
            userName: 'N/A'
        };
        const texto = "Ruta pública";
        render(
            <AuthContext.Provider value={defaultState}>
                <PublicRouter>
                    <h1>{texto}</h1>
                </PublicRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText(texto)).toBeTruthy();
    })
    test('debe mostrar la pagina de marvel si está autenticado', () => {
        const defaultState : AuthState = {
            logged: true,
            userName: 'Usuario'
        };
        const textoPub = "Ruta pública";
        const textoPri = "Ruta privada";
        render(
            <AuthContext.Provider value={defaultState}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRouter>
                                <h1>{textoPub}</h1>
                            </PublicRouter>
                        } />
                        <Route path="marvel" element={
                            <h1>{textoPri}</h1>
                        } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText(textoPri)).toBeTruthy();
    })
})