import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-left">
        <ul>
          <li className="logo">
            <NavLink to= '/'>
              Logo
            </NavLink>
          </li>
          <li>
            <NavLink to= '/'>
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink to= '/informatica'>
              Informática
            </NavLink>
          </li>
          <li>
            <NavLink to= '/audio-video'>
              Audio y Video
            </NavLink>
          </li>
          <li>
            <NavLink to= '/electronica'>
              Electrónica
            </NavLink>
          </li>
          <li>
            <NavLink to= '/redes-conectividad'>
              Redes y Conectividad
            </NavLink>
          </li>
          <li>
            <NavLink to= '/iluminacion'>
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