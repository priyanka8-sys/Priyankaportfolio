'use client'

import { useState } from 'react'
import Folder from './Folder'

export default function Projects() {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const projects = [
    {
      title: 'Rock Paper Scissors Game',
      description: 'A classic game implemented in Java with an intuitive user interface.',
      image: 'p1.PNG',
      tech: ['Java', 'OOP'],
      link: 'https://drive.google.com/file/d/1iQ1ofcQt3_rYyuzATUZcnCEQizm7mBJa/view?usp=sharing',
    },
    {
      title: 'TUK TUK GO',
      description: 'A responsive web using react and tailwind.',
      image: 'p2.PNG',
      tech: ['tailwind', 'react'],
      link: 'https://papaya-cocada-89021b.netlify.app/',
    },
    {
      title: 'Temperature Converter',
      description: 'Web application for converting temperatures between units.',
      image: 'p3.PNG',
      tech: ['HTML', 'JavaScript'],
      link: 'https://drive.google.com/drive/folders/1yA0TsNUNbQIUCwbSsMsFGGuywImW9d_r?usp=sharing',
    },
    {
      title: 'To-Do List Application',
      description: 'Task management app with local storage for data persistence.',
      image: 'p4.PNG',
      tech: ['JavaScript', 'Storage'],
      link: 'https://gorgeous-profiterole-da4ad4.netlify.app/',
    },
    {
      title: 'Calculator',
      description: 'A functional calculator with clean interface and keyboard support.',
      image: 'p6.png',
      tech: ['HTML', 'JavaScript'],
      link: 'https://lovely-eclair-f6ee68.netlify.app',
    },
  ]

  const folderItems = projects.slice(0, 3).map((project, index) => (
    <div key={index} className="folder-paper-content">
      <img src={`/${project.image}`} alt={project.title} />
    </div>
  ));

  return (
    <section id="projects" className="projects-section-folder">
      <div className="container">
        <div className="projects-header-modern" data-aos="fade-up">
          <h2 className="projects-title-modern">Projects</h2>
          <p className="projects-subtitle-modern">My creative work and achievements</p>
        </div>
        <div className={`projects-circular-layout ${isFolderOpen ? 'folder-open' : ''}`} data-aos="zoom-in" data-aos-delay="100">
          <div className="projects-center-folder">
            <Folder 
              color="#ff8c42" 
              size={4} 
              items={folderItems}
              className="projects-folder"
              onOpenChange={setIsFolderOpen}
            />
          </div>
          <div className="projects-surrounding-items">
            {projects.map((project, index) => (
              <div key={index} className="project-circular-item" style={{'--index': index}}>
                <div className="project-circular-content">
                  <h3 className="project-circular-title">{project.title}</h3>
                  <div className="project-circular-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="project-circular-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-circular-link">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
