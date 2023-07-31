import React from 'react';
import { NavLink } from 'react-router-dom';
import misiotronica from '../../Assets/misiotronica1.png';
import './signin.css';



function SignIn() {
  return (
    <>
      <div className='login'>
        <div className='login-form-container'>
            <img src={misiotronica} alt='login' className='login-logo'/>

                <form action='/' className='login-form'>
                <label htmlFor='email' className='label'>Correo electrónico</label>
                <input type='text' id='email' placeholder='example@gmail.com' className='login-input input-email'/>

                <label htmlFor='new-password' className='label'>Contraseña</label>
                <input type='password' id='password' placeholder='*********' className='login-input input-password'/>

                <input type='submit' value='Ingresar' className='primary-button login-button'/>
                
                <NavLink to='/create-account'>Olvidé mi contraseña</NavLink>
            </form>

            <NavLink to='/create-account'>
            <button className='secondary-button signup-button'>Registrarse</button>
            </NavLink>
        </div>
      </div>
    </>
  );
}

export { SignIn };