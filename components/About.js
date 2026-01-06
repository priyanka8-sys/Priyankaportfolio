'use client'

export default function About() {
  return (
    <section id="about" className="about-section-modern">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate about technology and innovation</p>
        </div>
        <div className="about-split-layout">
          <div className="about-left" data-aos="fade-right" data-aos-delay="100">
            <div className="about-image-wrapper">
              <div className="about-image-decoration"></div>
              <div className="about-profile-card">
                <div className="profile-image-about">
                  <img src="/priyanka-professional.jpg" alt="Profile" />
                </div>
                <div className="profile-info-about">
                  <h3>Priyanka Singh Sengar</h3>
                  <p>Computer Science Student</p>
                  <div className="profile-social">
                    <a href="#" className="social-icon-about"><i className="fab fa-github"></i></a>
                    <a href="#" className="social-icon-about"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="social-icon-about"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-right" data-aos="fade-left" data-aos-delay="200">
            <div className="about-content-box">
              <h3 className="about-heading">Passionate Computer Science Student</h3>
              <p className="about-paragraph">
                I'm a dedicated Computer Science student at <span className="highlight">Maharana Pratap Engineering College</span> with a passion for 
                technology and software development. My journey in programming started with curiosity and has evolved 
                into a strong foundation across multiple programming languages and technologies.
              </p>
              <p className="about-paragraph">
                I believe in continuous learning and staying updated with the latest technological trends. 
                My goal is to contribute to innovative projects that make a positive impact while growing as a developer.
              </p>
              
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon"><i className="fas fa-code"></i></div>
                  <div className="feature-text">
                    <h4>Clean Code</h4>
                    <p>Writing maintainable and efficient code</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><i className="fas fa-lightbulb"></i></div>
                  <div className="feature-text">
                    <h4>Problem Solving</h4>
                    <p>Creative solutions to complex challenges</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><i className="fas fa-rocket"></i></div>
                  <div className="feature-text">
                    <h4>Fast Learner</h4>
                    <p>Quick adaptation to new technologies</p>
                  </div>
                </div>
              </div>

              <div className="about-stats-modern">
                <div className="stat-modern">
                  <div className="stat-icon"><i className="fas fa-project-diagram"></i></div>
                  <h4>5+</h4>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-modern">
                  <div className="stat-icon"><i className="fas fa-code-branch"></i></div>
                  <h4>7+</h4>
                  <p>Technologies</p>
                </div>
                <div className="stat-modern">
                  <div className="stat-icon"><i className="fas fa-calendar-alt"></i></div>
                  <h4>2022-2026</h4>
                  <p>B.Tech Duration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
