import React from 'react';
import './contact.css';
import youtube from '../../Assets/youtube.png';
import Instagram from '../../Assets/ig.png';
import Facebook from '../../Assets/facebook.png';
import Whatsapp from '../../Assets/whatsapp.png';
import Mail from '../../Assets/mail.png';

function Contact() {
  return (
    <>
      <div className='contact-container'>
        <div className='title-container-form'>
          <h2>Tienes alguna consulta?</h2>
          <h3>Contáctanos</h3>
        </div>
        <div className='form-container'>
          <form>
            <label htmlFor='nombre'>
              <span>Cual es tu nombre?</span>
              <input type='text' id='nombre' placeholder='Escribe tu nombre' required/>
            </label>
            <label htmlFor='email'>
              <span>Cual es tu email</span>
              <input type='email' id='email' placeholder='Escribe tu email' required/>
            </label>
            <label htmlFor='comments'>
              <span>Déjame un comentario/consulta</span>
              <textarea name='comments' id='comentary' cols='40' rows='20' required></textarea>
              <input type='submit' value='Enviar' id='btn-send'/>
            </label>
          </form>
        </div>
        <h2>O búscanos en las redes</h2>
        <div className='social-media'>
          <ul className='icons-media'>
            <li>
              <a href='https://www.youtube.com' target='_blank' >
                <img src={youtube} alt='youtube'/>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com' target='_blank' >
                <img src={Instagram} alt='instagram'/>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com' target='_blank' >
                <img src={Facebook} alt='facebook'/>
              </a>
            </li>
          </ul>
        
        
          <ul className='icons-contact'>
            <li>
              <a href='https://www.whatsapp.com' target='_blank' >
                <img src={Whatsapp} alt='whatsapp'/>
                <span>3764-XXXXXX</span>
              </a>
            </li>
            <li>
              <a >
                <img src={Mail} alt='mail'/>
                <span>misiotronica@misiotronica.com</span>
              </a>
            </li>
          </ul>
        
        </div>
      </div>
    </>
  );
}

export { Contact };