import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

/* eslint-disable no-undef */
describe('Pruebas en el useForm', () => {
    const initialForm = {
        name: 'Fernando',
        email: 'fernando@google.com'
    }
    test('dede de regresar los valores por defectos', () => { 
        const {result} = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
     });

     test('debe de cambiar el nombre del formulario ', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(initialForm));
        const {onInputChange, onResetForm} = result.current;
        act(() => {
            onInputChange({
                target: {name: 'name', value: newValue}
               
            })
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);


     });


    
});