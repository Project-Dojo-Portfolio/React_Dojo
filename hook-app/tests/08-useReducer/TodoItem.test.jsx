import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

/* eslint-disable no-undef */
describe('Pruebas en <TodoItem />', () => { 
    const todo = {
        id: 1,
        description: 'Piedras del Alma',
        done: false
    };
    const onDeleteTodoMock = jest.mock();
    const onToggleTodoMock = jest.mock();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el Todo Pendiente de completar', () => {
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}  />);
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        

    })
 })