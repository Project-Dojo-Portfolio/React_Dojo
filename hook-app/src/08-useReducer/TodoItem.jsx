import PropTypes from "prop-types";

export const TodoItem = ({
  description,
  id,
  done,
  onDeleteTodo,
  onToggleTodo,
}) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          className={`align-self-center ${
            done ? "text-decoration-line-through" : ""
          }`}
          onClick={() => onToggleTodo(id)}
          aria-label="span"
        >
          {description}
        </span>
        <button className="btn btn-danger" onClick={() => onDeleteTodo(id)}>
          Borrar
        </button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  description: PropTypes.string,
  onDeleteTodo: PropTypes.func,
  done: PropTypes.bool,
  onToggleTodo: PropTypes.func,
  id: PropTypes.number,
};
