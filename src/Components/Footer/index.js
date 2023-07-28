import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';
import logo from './misiotronica1.png';


const Footer = () => {

  return (
    <footer>
      <div className="footer-left">
        <img src={logo} alt='logo image'/>
      </div>
      <ul className="footer-right">
        <li>
          <NavLink to='/about-us'>
            Nuestra Empresa
          </NavLink>
        </li>
        <li>
        <NavLink to='/contact'>
            Contacto
        </NavLink>
        </li>
      </ul>
    </footer>
  )
}

export { Footer };