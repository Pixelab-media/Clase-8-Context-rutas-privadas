// import { createContext, useState } from "react";

// export const CounterContext = createContext()

// const CounterProvider = ({ children }) => {

//     const [counter, setCounter] = useState(0);
//     // valorContext = {counter, setCounter}
//     return (
//         <CounterContext.Provider value={{counter, setCounter}}>
//             {children}
//         </CounterContext.Provider>
//     )
// }
// export default CounterProvider

import { createContext, useState } from "react";
export const CounterContext = createContext()
const CounterProvider = ({ children }) => {

    const [user, setUser] = useState("Emiliano");

    // valorContext = {counter, setCounter}
    return (
        <CounterContext.Provider value={{ user, setUser }}>
            {children}
        </CounterContext.Provider>
        
    )
}

export default CounterProvider