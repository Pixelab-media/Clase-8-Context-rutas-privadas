import { useState } from "react"
import Aumentador from "./Aumentador"


function Cuenta() {
    const [count, setCount] = useState(0) 
    //estado local que el padre Cuenta, se lo comparte con el hijo Aumentador
  
    return (
      <>
        {count}
        <Aumentador setCount={setCount} count={count} />
      </>
    )
  }
  
  export default Cuenta
  