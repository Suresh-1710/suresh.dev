import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
      window.location.href = `mailto:suresh171005@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: name, from_email: email, message },
        { publicKey: PUBLIC_KEY }
      );
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <h2>
        Get In <span className="gradient-text">Touch</span>
      </h2>

      <div className="contact-panel">
        <div className="contact-info">
          <h3>Let's talk about everything!</h3>
          <p>Feel free to reach out for collaborations, opportunities, or just to say hi.</p>

          <a href="mailto:suresh171005@gmail.com" className="contact-email">
            <i className="fas fa-envelope"></i> suresh171005@gmail.com
          </a>

          <a href="tel:8610480644" className="contact-email">
            <i className="fas fa-phone"></i> 8610480644
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/Suresh-1710"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/suresh-narasimhan-1203aa369"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="btn btn-primary btn-send" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}{' '}
            <i className="fas fa-paper-plane"></i>
          </button>
          {status === 'sent' && (
            <p className="form-status form-status-success">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status form-status-error">
              Something went wrong. Please email me directly instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
