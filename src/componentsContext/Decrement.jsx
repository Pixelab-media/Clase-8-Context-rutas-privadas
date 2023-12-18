import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function Decrement() {

    const {counter, setCounter} = useContext(CounterContext)
  
    return (
      <button onClick={() => setCounter(counter - 1)}>
        {counter}--
      </button>

    )
  }
  
  export default Decrement
  