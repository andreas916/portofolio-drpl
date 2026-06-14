import React from 'react';
import './ProjectsBox.css';

const ProjectsBox = () => {
  const projects = [
    {
      id: 1,
      title: "CIVITASK: Platform Freelance Mahasiswa",
      desc: "Full-Stack Task Marketplace App dengan React, Node.js, PostgreSQL, dan WebSockets",
      tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
      link: "https://github.com/andreas916/tubes-tekplat-CIVITASK",
      image: "media/img_civitask.jpeg"
    },
    {
      id: 2,
      title: "TENXI: Tree Environmental Network, indeX, and Information",
      desc: "Aplikasi Desktop Inventarisasi Pohon dan Analisis Karbon dengan Java dan SQLite",
      tech: ["Java", "SQLite"],
      link: "https://github.com/ask4gaje/IF2050-2026-K02-G04-TENXI",
      image: "media/img_tenxi.png"
    }
  ];

  return (
    <div className="glass-panel bento-item projects-box" id="projects">
      <div className="box-header">
        <h3>Featured Projects</h3>
        <a href="https://github.com/andreas916" target="_blank" rel="noreferrer" className="view-all">Selengkapnya di GitHub →</a>
      </div>
      <div className="projects-list">
        {projects.map(project => (
          <a key={project.id} href={project.link} target="_blank" rel="noreferrer" className="project-card">
            <div className="project-image-placeholder">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
              <div className="tech-stack">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsBox;
