import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from '../../Context'
import mobileMenu from '../../Assets/icon_menu.svg'
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

    context.closeCheckoutMenu()
    context.closeProductDetail()
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
    <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
      <div>
          <ul>
            <p>CATEGORIAS</p>
            <li>
              <NavLink 
                to= '/'
                onClick={() => context.handleCategoryClick('todo')}
                style={({ isActive }) => isActive ? activeStyle : undefined}>
                Todo
              </NavLink>
            </li>
            <li>
              <NavLink 
                to= '/informatica'
                onClick={() => context.handleCategoryClick('informatica')}
                style={({ isActive }) => isActive ? activeStyle : undefined}>
                Informática
              </NavLink>
            </li>
            <li>
              <NavLink 
                to= '/audio-video'
                onClick={() => context.handleCategoryClick('audio-video')}
                style={({ isActive }) => isActive ? activeStyle : undefined}>
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
            
          <ul>
            <li>
              <NavLink to= '/my-orders'>
                Mis Compras
              </NavLink>
            </li>
            <li>
              <NavLink to= '/create-account'>
                Crear una cuenta
              </NavLink>
            </li>
          </ul>
          <ul>
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