import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="glass-panel bento-item hero-box">
      <div className="hero-content">
        <div className="status-badge">
          <span className="dot"></span> Active Student
        </div>
        <h1>Hi, I'm <span className="highlight">Andreas Saputra Tambun</span></h1>
        <h2>Information Systems and Technology</h2>
        <p>
          Mahasiswa yang tertarik pada teknologi informasi dan pengembangan perangkat lunak.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="primary-btn">Hubungi Saya</a>
          <a href="#projects" className="secondary-btn">Lihat Proyek</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
