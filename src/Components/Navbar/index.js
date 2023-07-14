import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  let activeStyle = {
    textDecoration: 'underline',
  }

  return (
    <nav>
      <div className="navbar-left">
        <ul>
          <li className="logo">
            <NavLink to= '/'>
              Misiotrónica
            </NavLink>
          </li>
          <li>
            <NavLink 
              to= '/' 
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink 
              to= '/informatica'
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              Informática
            </NavLink>
          </li>
          <li>
            <NavLink 
              to= '/audio-video'
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              Audio y Video
            </NavLink>
          </li>
          <li>
            <NavLink 
              to= '/electronica'
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              Electrónica
            </NavLink>
          </li>
          <li>
            <NavLink 
              to= '/redes-conectividad'
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              Redes y Conectividad
            </NavLink>
          </li>
          <li>
            <NavLink 
              to= '/iluminacion'
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              Iluminación
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email">
            <NavLink >
              e-mail@example.com
            </NavLink>
          </li>
          <li>
            <NavLink to= '/my-orders'>
              Mis Compras
            </NavLink>
          </li>
          <li>
            <NavLink to= '/my-account'>
              Mi cuenta
            </NavLink>
          </li>
          <li>
            <NavLink to= '/sign-in'>
              Iniciar sesión
            </NavLink>
          </li>
          <li className="navbar-shopping-cart">
            <NavLink >
              🛒 0
            </NavLink>
          </li>
        </ul>
        </div>
    </nav>
  )
}

export { Navbar };