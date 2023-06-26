import { todoReducer } from "../../src/08-useReducer/todoReducer";

/* eslint-disable no-undef */
describe('Pruebas en TODO Reducer', () => {
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];
    test('debe de regresar al estado inicial ', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);

    });
    test('debe de agregar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    });
    test('debe de eliminar un TODO', () => { 
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);

    })
    test('debe de realizar el toggle del todo ', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    });
});