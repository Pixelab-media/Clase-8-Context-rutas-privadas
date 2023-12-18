import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function Increment() {

    const {counter, setCounter} = useContext(CounterContext)
  
    return (
      <button onClick={() => setCounter(counter + 1)}>
        {/* {counter}++ */}
      </button>

    )
  }
  
  export default Increment
  