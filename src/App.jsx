import React from 'react';
import './App.css';
import Hero from './components/Hero';
import ProjectsBox from './components/ProjectsBox';
import SkillsBox from './components/SkillsBox';
import ContactBox from './components/ContactBox';

function App() {
  return (
    <div className="app-container">
      <div className="bento-grid">
        <Hero />
        <SkillsBox />
        <ProjectsBox />
        <ContactBox />
      </div>
    </div>
  );
}

export default App;
