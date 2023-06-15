import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = (iteratioNumber = 100) => {
  for (let index = 0; index < iteratioNumber; index++) {
    console.log('Ahi vamos...');
  }
  return "muchas iteraciones realizadas";
}

export const MemoHook = () => {
   const {counter, increment} = useCounter()
   const [show, setShow] = useState(true)
   const messageMemorized = useMemo(() => heavyStuff(counter), [counter])
  return (
    <div>
        <h1>Counter:  <small>{counter}</small></h1>
        <hr />
        <h4>{messageMemorized}</h4>
        <button
                className="btn btn-primary"
                onClick={increment}>
        +1
        </button>
        <button
                className="btn btn-outline-primary"
                onClick={()=> setShow(!show)}>
            Show/Hide {JSON.stringify(show)}
        </button>
    </div>
  )
}
