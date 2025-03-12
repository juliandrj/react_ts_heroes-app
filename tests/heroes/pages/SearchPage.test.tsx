import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas de SearchPage', () => {
    
    beforeEach(() => jest.clearAllMocks() );

    test('debe mostrar elementos de la busqueda indicada', () => {
        const txt = 'batman';
        render(<MemoryRouter initialEntries={[`/search?q=${txt}`]}>
            <SearchPage />
        </MemoryRouter>);
        const searchText = screen.getByLabelText('search') as HTMLInputElement;
        expect(searchText.value).toBe(txt);
        const h5 = screen.getByLabelText('hero-name');
        expect(h5.innerHTML.toLowerCase()).toBe(txt);
    })

    test('debe mostrar el mensaje que no se encontraron resultados', () => {
        const txt = 'batman123';
        render(<MemoryRouter initialEntries={[`/search?q=${txt}`]}>
            <SearchPage />
        </MemoryRouter>);
        const alert = screen.getByLabelText('search-alert');
        expect(alert.innerHTML).toBe(`Heroes not found (${txt})`);
    })

    test('debe realizar la búsqueda señalada', () => {
        const txt = 'superman';
        render(<MemoryRouter initialEntries={['/search']}>
            <SearchPage />
        </MemoryRouter>);
        const searchText = screen.getByLabelText('search') as HTMLInputElement;
        fireEvent.change(searchText, {target: {value: txt}});
        const form = screen.getByLabelText('search-form');
        fireEvent.submit(form);
        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${txt}`);
    })
})