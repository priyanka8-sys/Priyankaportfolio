'use client'

export default function Hero() {
  return (
    <section id="home" className="hero_section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-left">
            
          </div>
          
          <div className="hero-center">
            <div className="greeting-badge">
              Hello!
              <div className="greeting-sparkle"></div>
            </div>
            <h1 className="hero-name">
              I&apos;m <span className="name-highlight">Priyanka</span>,<br />
              Software Engineer
            </h1>
            
            <div className="hero-image-wrapper">
              <div className="orange-blob"></div>
              <img 
                src="/priyanka-professional.jpg" 
                alt="Priyanka Singh Sengar" 
                className="hero-profile-image"
              />
            </div>
            
            <div className="hero-buttons">
              <a href="https://docs.google.com/document/d/1zUGHLM7jj_I0_-mwPt9rkwLnTHX0t8Jd/edit?usp=sharing&ouid=114200620454333121575&rtpof=true&sd=true" className="btn-portfolio">
                resume<i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" className="btn-hire">
                Hire me
              </a>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  )
}
