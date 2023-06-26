/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter, useFetch } from "../../src/hooks";
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => { 
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })
    test('debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data:null,
            isLoading: true,
            hasError: null
        })
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Cargando.....'));
        expect(screen.getByText('breakingBad Quotes'));
        const nextButton = screen.getByRole('button', {name: 'next quote'});
        expect(nextButton.disabled).toBeFalsy();
     })

     test('Debe de mostrar un Quote ', () => {
        useFetch.mockReturnValue({
            data:[{ 
                author: 'Kevin', quote: 'Hola Mundo'
            }],
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Kevin')).toBeTruthy();
        const nextButton = screen.getByRole('button', {name: 'next quote'});
        expect(nextButton.disabled).toBeFalsy();
     });
     test('Debe de llamar la funcion de incrementar', () => {
        useFetch.mockReturnValue({
            data:[{ 
                author: 'Kevin', quote: 'Hola Mundo'
            }],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'next quote'});
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Kevin')).toBeTruthy();
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();

     })
 })