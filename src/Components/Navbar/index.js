import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from '../../Context';
import shoppingCart from './icon_shopping_cart.svg';
import misiotronica from './misiotronica1.png';
import './Navbar.css';


const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  
  let activeStyle = {
    textDecoration: 'underline',
  }

  const toggleCheckoutMenu = () => {
    context.closeProductDetail();
    context.openCheckoutMenu();
  }

  return (
    <nav>
      <div className="navbar-left">
        <div className="logo">
          <img src={ misiotronica } alt="logo-empresa"/>
        </div> 
        <ul>
          <li>
            <NavLink 
              to= '/' 
              onClick={() => context.handleCategoryClick('todo')}
              style={({ isActive }) => isActive ? activeStyle : undefined}
              >
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink 
              to= '/informatica'
              onClick={() => context.handleCategoryClick('informatica')}
              style={({ isActive }) => isActive ? activeStyle : undefined}
              >
              Informática
            </NavLink>
          </li>
          <li>
            <NavLink 
              to= '/audio-video'
              onClick={() => context.handleCategoryClick('audio-video')}
              style={({ isActive }) => isActive ? activeStyle : undefined}
              >
              Audio y Video
            </NavLink>
          </li>
          <li>
            <NavLink 
              to= '/electronica'
              onClick={() => context.handleCategoryClick('electronica')}
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              Electrónica
            </NavLink>
          </li>
          <li>
            <NavLink 
              to= '/redes-conectividad'
              onClick={() => context.handleCategoryClick('redes-conectividad')}
              style={({ isActive }) => isActive ? activeStyle : undefined}>
              Redes y Conectividad
            </NavLink>
          </li>
          <li>
            <NavLink 
              to= '/iluminacion'
              onClick={() => context.handleCategoryClick('iluminacion')}
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
          <li className='navbar-my-orders'>
            <NavLink to= '/my-orders'>
              Mis Compras
            </NavLink>
          </li>
          <li className='navbar-my-account'>
            <NavLink to= '/my-account'>
              Mi cuenta
            </NavLink>
          </li>
          <li className='navbar-sign-in'>
            <NavLink to= '/sign-in'>
              Iniciar sesión
            </NavLink>
          </li>
          <li className="navbar-shopping-cart">
            <NavLink onClick={toggleCheckoutMenu} >
            <img src= { shoppingCart } alt="icon-cart"/>
            <div>
              {context.count}
            </div>
            </NavLink>
          </li>
        </ul>
        </div>
    </nav>
  )
}

export { Navbar };