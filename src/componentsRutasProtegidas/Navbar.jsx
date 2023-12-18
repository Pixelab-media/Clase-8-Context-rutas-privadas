import { NavLink } from "react-router-dom"

function Navbar() {
  
    const claseActiva = ({ isActive }) => (isActive ? "activa" : "desactiva")

    return (
  
      <nav>
          <NavLink className={claseActiva} to="/"> Home</NavLink>
          <NavLink className={claseActiva} to="/admin"> Administracion</NavLink>
          <NavLink className={claseActiva} to="/login"> Login</NavLink>
      </nav>
  
    )
  }
  
  export default Navbar