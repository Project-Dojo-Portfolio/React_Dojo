import { useCounter, useFetch } from "../hooks";
import { BreakingBad } from "./BreakingBad";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>breakingBad Quotes</h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Cargando.....</div>
      ) : (
        <BreakingBad author={author} quote={quote} />
      )}
      {hasError && <h3>Hubo un error extrayendo los datos del api</h3>}
      <button className="btn btn-primary" onClick={increment}>
        next quote
      </button>
    </>
  );
};
