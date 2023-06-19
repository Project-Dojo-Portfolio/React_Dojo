import PropTypes from 'prop-types';

export const TodoItem = ({description, id , onDeleteTodo}) => {
  return (
    <>
    <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center" >{description}</span>
        <button className="btn btn-danger" onClick={() => onDeleteTodo(id)}>Borrar</button>
    </li>
    </>
  )
}

TodoItem.propTypes = {
  description: PropTypes.string,
  onDeleteTodo: PropTypes.func,
  id: PropTypes.number
}