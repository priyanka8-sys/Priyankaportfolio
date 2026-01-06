'use client'

export default function Education() {
  return (
    <section id="education" className="education-section-timeline">
      <div className="container">
        <div className="education-header-modern" data-aos="fade-up">
          <h2 className="education-title-modern">Education Journey</h2>
          <p className="education-subtitle">My academic path and achievements</p>
        </div>
        <div className="education-timeline">
          <div className="timeline-line" data-aos="fade-down"></div>
          
          <div className="education-item" data-aos="fade-right" data-aos-delay="100">
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-card-timeline">
              <div className="education-badge">2022</div>
              <h3 className="education-degree-timeline">Secondary Education</h3>
              <h4 className="education-school-timeline">
                <i className="fas fa-school"></i>
                Kendriya Vidyalaya, Mati Kanpur Dehat
              </h4>
              <div className="education-details">
                <span className="education-board"><i className="fas fa-certificate"></i> CBSE Board</span>
                <span className="education-score-badge">87.2%</span>
              </div>
            </div>
          </div>

          <div className="education-item" data-aos="fade-left" data-aos-delay="200">
            <div className="education-icon">
              <i className="fas fa-user-graduate"></i>
            </div>
            <div className="education-card-timeline">
              <div className="education-badge">2022-2026</div>
              <h3 className="education-degree-timeline">Bachelor of Technology</h3>
              <h4 className="education-school-timeline">
                <i className="fas fa-university"></i>
                Maharana Pratap Engineering College, Kanpur
              </h4>
              <div className="education-details">
                <span className="education-major"><i className="fas fa-laptop-code"></i> Computer Science Engineering</span>
                <span className="education-status">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
