import React from 'react';
import './App.css';  // Import the custom CSS

const App = () => {
  return (
    <div className="min-h-full">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-container">
            <div className="navbar-brand">
              <p className="navbar-title">Syed Qalb-E-Hassan Gillani</p>
            </div>
            <div className="navbar-links">
              <a href="#home" className="nav-link" aria-current="page">Home</a>
              <a href="#about" className="nav-link">About Me</a>
              <a href="#education" className="nav-link">Education and Experience</a>
              <a href="#skills" className="nav-link">Skills and Services Offered</a>
              <a href="#contact" className="nav-link">Contact Me</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="hero">
        <div className="text-center">
          <h1 className="hero-title">"Creating web magic with a blend of design and development"</h1>
          <p className="hero-text">Front End Developer here always ready to turn your dream ideas into reality through my responsive websites practical solutions.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#contact" className="hero-button">Contact Me</a>
            <a href="#about" className="text-sm font-semibold leading-6 text-white"> Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div className="section bg-cover bg-center" style={{ backgroundImage: "url('ABOUTUSIMAGE.png')" }} id="about">
        <div className="text-center text-bold">
          <h1 className="section-title text-primary">About Me</h1>
          <p className="section-text text-black">I am doing BSCS from Superior University Lahore with 3 CGPA out of 4 and I want to pursue my career as a developer either in front end or back end. I want to become a full stack developer in the future. Currently, I am working on some small projects with one of my class fellows. I am enrolled in the 7th Semester and very passionate to pursue my career and polish my professional skills. I am very much dedicated towards my work and always ready to face challenges and accomplish challenging tasks to enhance my professional and personal skills. I am very good at working with teams and I am very soft spoken and confident towards the tasks and the challenges assigned to me.</p>
        </div>
      </div>
      <div className="section bg-zinc-400" id="education">
        <div className="text-center">
          <h1 className="section-title text-primary">Education and Experience Details</h1>
          <p className="section-text text-black">Doing BSCS with CGPA 3 out of 4 from Superior University Lahore. I have done ICS from Alama Iqbal Science College Gojra.</p>
        </div>
      </div>
      <div className="section bg-cover bg-center bg-white" style={{ backgroundImage: "url('bg-img.jpg')" }} id="skills">
        <div className="text-center">
          <h1 className="section-title text-primary">Skills and Services Offered</h1>
          <p className="section-text text-black">I am offering following Services and Skills:</p>
          <ul className="list-disc text-lg text-black">
            <li>Responsive Websites</li>
            <li>SEO Optimized Websites</li>
            <li>WordPress</li>
            <li>Front end Designing</li>
          </ul>
        </div>
      </div>
      <div className='CONT'>
      <div className="contact" id="contact">
          <h1 className="section-title text-primary">Contact Me</h1>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" className="form-input" rows="4" required></textarea>
            </div>
            <button type="submit" className="form-button">Send Message</button>
          </form>
        
      </div>
      </div>
    </div>
  );
};

export default App;