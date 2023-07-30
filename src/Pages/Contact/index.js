import React from 'react';
import { NavLink } from 'react-router-dom';
import './contact.css';
import youtube from '../../Assets/youtube.png';
import Instagram from '../../Assets/ig.png';
import Facebook from '../../Assets/facebook.png';
import Whatsapp from '../../Assets/whatsapp.png';
import Mail from '../../Assets/mail.png';

function Contact() {
  return (
    <>
      <div>
        <img src={Whatsapp} alt='whatsapp'></img>
      </div>
    </>
  );
}

export { Contact };