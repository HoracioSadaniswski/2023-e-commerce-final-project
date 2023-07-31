import React from 'react';
import './create-account.css'


function CreateAccount() {
  return (
    <>
      <div className='create-account'>
        <div className='account-form-container'>
            <h1 className='account-title'>Registrarse</h1>
                
            <form action='/sign-in' className='account-form'>
                <div>
                <label for='name' className='account-label'>Nombre</label>
                <input type='text' id='name' placeholder='Ingresa tu nombre' className='account-input input-name'/>
                    
                <label for='email' className='account-label'>Correo</label>
                <input type='text' id='email' placeholder='example@example.com' className='account-input input-email'/>
    
                <label for='password' className='account-label'>Contraseña</label>
                <input type='password' id='password' placeholder="*********" className='account-input input-password'/>
                </div>

                <input type='submit' value='Crear Cuenta' className='primary-button login-button'/>
            </form>
        </div>
    </div>
    </>
  );
}

export { CreateAccount };