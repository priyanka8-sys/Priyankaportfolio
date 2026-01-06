'use client'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')
    
    const mailtoLink = `mailto:priyankasingh03122004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    
    window.location.href = mailtoLink
    e.target.reset()
  }

  return (
    <section id="contact" className="contact-section-modern">
      <div className="container">
        <div className="contact-header-modern" data-aos="fade-up">
          <h2 className="contact-title-modern">Get In Touch</h2>
          <p className="contact-subtitle-modern">Let&apos;s create something amazing together</p>
        </div>
        
        <div className="contact-grid-modern">
          <div className="contact-info-modern" data-aos="fade-right" data-aos-delay="100">
            <div className="contact-card-modern">
              <div className="contact-icon-modern">
                <i className="fas fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <a href="mailto:priyankasingh03122004@gmail.com">priyankasingh03122004@gmail.com</a>
            </div>
            
            <div className="contact-card-modern">
              <div className="contact-icon-modern">
                <i className="fas fa-phone"></i>
              </div>
              <h4>Phone</h4>
              <a href="tel:+918470803563">+91 8470803563</a>
            </div>
            
            <div className="contact-card-modern">
              <div className="contact-icon-modern">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>Location</h4>
              <span>Kanpur, UP</span>
            </div>

            <div className="social-links-modern">
              <a href="https://github.com/priyanka8-sys" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/priyanka-singh-sengar" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/918470803563" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <form className="contact-form-modern" onSubmit={handleSubmit} data-aos="fade-left" data-aos-delay="200">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-btn-modern">
              Send Message <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
