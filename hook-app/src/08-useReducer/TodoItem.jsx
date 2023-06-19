import PropTypes from 'prop-types';

export const TodoItem = ({description}) => {
  return (
    <>
    <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{description}</span>
        <button className="btn btn-danger">Borrar</button>
    </li>
    </>
  )
}

TodoItem.propTypes = {
  description: PropTypes.string
}