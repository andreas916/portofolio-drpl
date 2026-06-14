import React from 'react';
import './SkillsBox.css';

const SkillsBox = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 75 },
    { name: "HTML/CSS", level: 95 },
  ];

  return (
    <div className="glass-panel bento-item skills-box">
      <div className="box-header">
        <h3>Skills</h3>
      </div>
      <div className="skills-content">
        <p className="skills-desc">
          Tech Stack yang sering saya gunakan:
        </p>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsBox;
