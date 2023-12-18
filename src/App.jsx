// // import { useState } from 'react'
// import './App.css'
// import CounterProvider from './context/CounterContext'
// import Increment from './componentsContext/Increment'
// import Decrement from './componentsContext/Decrement'
// // import Cuenta from './components/Cuenta'

// function App() {

//   // const [data, setData]= useState(0)
//   // const valorContext = {data, setData}

  
//   return (

//     // <CounterContext.Provider value={valorContext} >
//     <CounterProvider>
//         {/* <Cuenta /> */}
//         <Increment />
//         <Decrement />
//     </CounterProvider>

//     // </CounterContext.Provider>
//   )
// }

// export default App

//Rutas protegidas

import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './componentsRutasProtegidas/Navbar'
import Home from './componentsRutasProtegidas/Home'
import Administracion from './componentsRutasProtegidas/Administracion'
import Login from './componentsRutasProtegidas/Login'
import { CounterContext } from './context/CounterContext'
import { useContext } from 'react'



function App() {
  const { user, setUser } = useContext(CounterContext);
  console.log(user)
  
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route 
          path='/admin' 
          element={user ? <Administracion /> : <Navigate to='/login'/>} />
        <Route path='/login' element={<Login />}/>
      </Routes>        
    </>

  )
}

export default App
