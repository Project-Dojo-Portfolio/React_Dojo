import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Test <GifExpertApp />', () => { 
    test('Deberia solo mostrar el formulario con el boton de submit', () => { 
        render(<GifExpertApp />);
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');
        expect(form).toBeTruthy();
        expect(input.value).toBe('');
        expect(button.innerHTML).toBe('Agregar');
     });

     test('Deberia mostrar gifs cuando ejecuto una busqueda', async () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: 'Dragon Ball'}});
        fireEvent.submit(form);
        expect(screen.findByText('Dragon Ball')).toBeDefined()
        expect(screen.findByText('Cargando....')).toBeDefined()
        await waitFor(
            () => {
                expect(screen.getAllByRole('img').length).toBeGreaterThan(0)
                expect(screen.getAllByText(/Dragon Ball/).length).toBeGreaterThan(0);
            }
        );
     });
 });