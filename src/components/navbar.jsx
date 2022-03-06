import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Hyperium</Link>
        <div className="navbar-nav navlinks">
          <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
          <Link className="nav-link" to="/promos">Promociones</Link>
          <Link className="nav-link" to="/catalogo/1">Catalogo</Link>
          <Link className="nav-link" to='/contacto'>Contacto</Link>
        </div>
      </div>
  </nav>
  )
}

export default Navbar