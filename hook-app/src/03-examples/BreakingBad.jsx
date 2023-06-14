
export const BreakingBad = ({author, quote}) => {
  return (
    <blockquote>
        <p>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  )
}
