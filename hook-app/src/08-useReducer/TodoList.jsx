import PropTypes from 'prop-types';
import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <ul className="list-group">
        {
            todos.map(todo => <TodoItem key={todo.id} description={todo.description} id={todo.id} onDeleteTodo={onDeleteTodo}/>)
        }
    </ul>
  )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    onDeleteTodo: PropTypes.func
}
