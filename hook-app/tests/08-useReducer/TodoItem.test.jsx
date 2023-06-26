import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

/* eslint-disable no-undef */
describe('Pruebas en <TodoItem />', () => { 
    const todo = {
        id: 1,
        description: 'Piedras del Alma',
        done: false
    };
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el Todo Pendiente de completar', () => {
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}  />);
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');


    });

    test('debe de mostrar el Todo Completado', () => { 
        render(<TodoItem done={true} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}  />);
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
     });
     test('span debe de llamar el toggleTodo cuando se hace click', () => {
        render(<TodoItem id={todo.id} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}  />);
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

     });
     test('button debe de llamar el deleteTodo', () => {
        render(<TodoItem id={todo.id} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}  />);
        const btnDelete = screen.getByRole('button');
        fireEvent.click(btnDelete);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
     });
 })