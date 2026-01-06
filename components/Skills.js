'use client'

import { useState } from 'react'

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skills = [
    { 
      name: 'Python', 
      icon: '1.png', 
      level: 75, 
      category: 'Backend',
      description: 'Backend development, data analysis, and automation',
      projects: 3
    },
    { 
      name: 'JavaScript', 
      icon: '2.png', 
      level: 70, 
      category: 'Frontend',
      description: 'Interactive web applications and DOM manipulation',
      projects: 4
    },
    { 
      name: 'MySQL', 
      icon: '3.png', 
      level: 65, 
      category: 'Database',
      description: 'Database design, queries, and data management',
      projects: 2
    },
    { 
      name: 'C++', 
      icon: '4.png', 
      level: 80, 
      category: 'Programming',
      description: 'Object-oriented programming and data structures',
      projects: 2
    },
    { 
      name: 'C', 
      icon: '5.png', 
      level: 75, 
      category: 'Programming',
      description: 'System programming and algorithmic thinking',
      projects: 1
    },
    { 
      name: 'HTML', 
      icon: '6.png', 
      level: 85, 
      category: 'Frontend',
      description: 'Semantic markup and web structure',
      projects: 5
    },
    { 
      name: 'CSS', 
      icon: '7.png', 
      level: 80, 
      category: 'Frontend',
      description: 'Responsive design and modern styling',
      projects: 5
    },
  ]

  return (
    <section id="skills" className="skills-section-modern">
      <div className="container">
        <div className="skills-header-modern" data-aos="fade-up">
          <h2 className="skills-title-modern">Technical Skills</h2>
          <p className="skills-subtitle-modern">Expertise across multiple technologies and frameworks</p>
        </div>
        
        <div className="skills-carousel-wrapper" data-aos="fade-up" data-aos-delay="100">
          <div className="skills-carousel-track">
            {/* First set of skills */}
            {skills.map((skill, index) => (
              <div 
                key={`first-${index}`}
                className="skill-card-modern"
                onMouseEnter={() => setHoveredSkill(`first-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="skill-card-header">
                  <div className="skill-icon-wrapper">
                    <img src={`/${skill.icon}`} alt={skill.name} />
                  </div>
                  <div className="skill-category-badge">{skill.category}</div>
                </div>
                
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
                
                <div className="skill-stats">
                  <div className="skill-level-bar">
                    <div 
                      className="skill-level-fill" 
                      style={{ width: hoveredSkill === `first-${index}` ? `${skill.level}%` : '0%' }}
                    >
                      <span className="skill-level-text">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="skill-projects">
                    <i className="fas fa-project-diagram"></i>
                    <span>{skill.projects} Projects</span>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {skills.map((skill, index) => (
              <div 
                key={`second-${index}`}
                className="skill-card-modern"
                onMouseEnter={() => setHoveredSkill(`second-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="skill-card-header">
                  <div className="skill-icon-wrapper">
                    <img src={`/${skill.icon}`} alt={skill.name} />
                  </div>
                  <div className="skill-category-badge">{skill.category}</div>
                </div>
                
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
                
                <div className="skill-stats">
                  <div className="skill-level-bar">
                    <div 
                      className="skill-level-fill" 
                      style={{ width: hoveredSkill === `second-${index}` ? `${skill.level}%` : '0%' }}
                    >
                      <span className="skill-level-text">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="skill-projects">
                    <i className="fas fa-project-diagram"></i>
                    <span>{skill.projects} Projects</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
