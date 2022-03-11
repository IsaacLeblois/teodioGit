import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Hyperium</Link>
        <div className="navbar-nav navlinks">
          <Link className="nav-link" aria-current="page" to="/">Todos los aviones</Link>
          <Link className="nav-link" to="/airbus">Airbus</Link>
          <Link className="nav-link" to="/boeing">Boeing</Link>
          <Link className="nav-link" to='/antonov'>Antonov</Link>
        </div>
      </div>
  </nav>
  )
}

export default Navbar