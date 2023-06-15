import PropTypes from 'prop-types';
export const ShowIncrement = ({ increment }) => {
  return (
    <button
        className="btn btn-primary"
        onClick={() => {
            increment(10)
        }}
    >
        Incrementar
    </button>
  )
}

ShowIncrement.propTypes = {
    increment: PropTypes.func
}
