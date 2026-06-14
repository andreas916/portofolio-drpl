import React from 'react';
import './ContactBox.css';

const ContactBox = () => {
  return (
    <div className="glass-panel bento-item contact-box" id="contact">
      <h3>Let's Connect!</h3>
      <p>Tertarik untuk berkolaborasi atau ada pertanyaan seputar tugas ini?</p>
      <div className="social-links">
        <a href="https://github.com/andreas916" target="_blank" rel="noreferrer" className="social-icon">
          GitHub
        </a>
        <a href="https://linkedin.com/in/andreassaputratambun" target="_blank" rel="noreferrer" className="social-icon">
          LinkedIn
        </a>
        <a href="mailto:andreast4mbun@gmail.com" className="social-icon">
          Email
        </a>
      </div>
    </div>
  );
};

export default ContactBox;
