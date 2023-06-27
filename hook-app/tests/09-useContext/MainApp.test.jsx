/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <MainApp />', () => {
    test('debe de mostrar el homePage ', () => {
        render(
         <MemoryRouter>
            <MainApp />
         </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();
    });
    test('Debe de mostrar el LoginPage ', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
               <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('LoginPage')).toBeTruthy();

    });
});