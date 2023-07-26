import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from '../../Context'
import mobileMenu from './icon_menu.svg'
import './MobileMenu.css';


const MobileMenu = () => {
  const context = useContext(ShoppingCartContext);
  const { isMobileMenuOpen, openMobileMenu, closeMobileMenu } = context;

  let activeStyle = {
    textDecoration: 'underline',
  };

  const toggleMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  return (
    <>
    <div 
      className={`icon-mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
      onClick={toggleMenu}>
        <img 
          src={mobileMenu} alt='Mobile Menu'
        />
      </div>
    <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : 'hidden'}`}>
      <div>
          <ul>
            <p>CATEGORIAS</p>
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
            
          <ul>
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
          </ul>
          <ul>
            <li className='email'>
              <NavLink >
                e-mail@example.com
              </NavLink>
            </li>
            <li className='sign-out'>
              <NavLink to= '/sign-in'>
                Iniciar sesión
              </NavLink>
            </li>
          </ul>
        </div> 
    </div>
    </>
  )
}

export { MobileMenu };