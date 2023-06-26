import Proptypes from 'prop-types';

export const BreakingBad = ({author, quote}) => {

  return (
    <>
    <blockquote
            className='blockquote text-end'
            style={{display: 'flex'}}>
        <p>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
    </blockquote>
    </>
  )
}

BreakingBad.propTypes = {
    author: Proptypes.string.isRequired,
    quote: Proptypes.string.isRequired
}