import Proptypes from 'prop-types';
import { useState } from 'react';
import { useLayoutEffect, useRef } from 'react';

export const BreakingBad = ({author, quote}) => {
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height:0
    })
    useLayoutEffect(() => {
        const {height, width} = pRef.current.getBoundingClientReact();
        setBoxSize({
            height,
            width
        })
    }, [quote])

  return (
    <>
    <blockquote
            className='blockquote text-end'
            style={{display: 'flex'}}>
        <p ref={pRef}>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
    </blockquote>
    <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}

BreakingBad.propTypes = {
    author: Proptypes.string.isRequired,
    quote: Proptypes.string.isRequired
}