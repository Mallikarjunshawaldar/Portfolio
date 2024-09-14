import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Display an alert message upon form submission
    alert('Thank you for getting in touch! We will get back to you soon.');
    console.log('Form submitted');
  };

  const handleClear = () => {
    document.querySelector('form').reset();
  };

  return (
    <>
      <div className="contact" id='contact'>
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title-h1">Contact Me</h1>
        <div className="contact-details-container">
          <div className="contact-container">
            <div className="details-cont">
              <div className="person-cont-container">
                  <h2 className='c-h1'>Mallikarjun</h2>
                  <p><strong>Address:</strong> 139/b, plot no 7, Shakambari Nagar behind KMF, Dharwad, Karnataka</p>
                  <p><strong>Phone:</strong> +91 8073452834</p>
                  <p><strong>Email:</strong> ssmallikarjunsh@example.com</p>
              </div>
            </div>
            <div className="details-cont">
              <h2>Send us a message</h2>
              <form className="form-group" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
                <div className="form-buttons">
                  <button className="btn" type="submit">Send</button>
                  <button
                    className="btn"
                    type="button"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
