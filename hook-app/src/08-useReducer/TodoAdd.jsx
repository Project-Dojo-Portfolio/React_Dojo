import PropTypes from 'prop-types';
import { useForm } from "../hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {
  const {formState, onInputChange, onResetForm } =useForm({
    description: ''
  });

  const {description} = formState;

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(description.length <= 1) return ;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description
    }

    onNewTodo(newTodo)
    onResetForm();

  }
  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type="text"
            name="description"
            value={description} 
            placeholder="Que hay que hacer?"
            className="form-control"
            onChange={onInputChange} />
        <button
                type="submit"
                className="btn btn-outline-primary mt-1">
            Agregar
        </button>
    </form>
  )
}

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func
}