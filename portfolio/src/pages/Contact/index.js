import React from 'react';
import './style.css';

function Contact() {
  return (
    <div>
      <div className='main-para'>
        <p className="contact-header">Drop me a line.</p>
        <p className="para">if you have a project that you would like to discuss,
          or if you simply have some questions, I would love to
          hear from you. Please feel free to send me an email,
          or use the contact form.
        </p>
      </div>

      <div className='centered'>
        <div className="form col-lg-6 col-md-6 col-sm-12 contact-form">
          <form id="contact-me">
            <div className="form-group">
              <input className="form-control form-control-sm" type="text" placeholder="Your name" id="name"></input>
            </div>

            <div className="form-group">
              <input className="form-control form-control-sm" type="text" placeholder="Your email" id="email"></input>
            </div>

            <div className="form-group">
              <textarea className="form-control form-control-sm" id="exampleFormControlTextarea1" type="text"
                placeholder="Message" rows="3" ></textarea>
            </div>

            <button type="submit" className="btn btn-primary custom-button button-form">Submit</button>
          </form>
        </div>
      </div>

      <div className='contact-buttons'>
        <button className='buttons' type="button">GitHub</button>
        <button className='buttons' type="button">LinkedIn</button>
        <button className='buttons' type="button">Email</button>
        <button className='buttons' type="button">CV</button>
      </div>
    </div>
  )
}

export default Contact;