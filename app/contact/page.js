'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:herotime.contact@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setStatus('Opening your email client...');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '1rem', 
        color: '#c5e1a5',
        textAlign: 'center'
      }}>
        Contact Us
      </h1>
      
      <p style={{ 
        textAlign: 'center', 
        color: '#c5e1a5', 
        marginBottom: '2rem',
        fontSize: '1.05rem'
      }}>
        Have questions, feedback, or suggestions? We'd be happy to hear from you.
      </p>

      <div style={{ 
        backgroundColor: 'rgba(20, 30, 20, 0.3)', 
        border: '1px solid rgba(74, 222, 128, 0.2)',
        borderRadius: '8px',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <div>
          <h2 className="contact-title" style={{ fontSize: '1.5rem', color: '#c5e1a5', marginBottom: '1.5rem' }}>
            Get in Touch
          </h2>
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#e0e0e0', marginBottom: '1rem' }}>
            📧 Email:{' '}
            <a 
              href="mailto:herotime.contact@gmail.com" 
              style={{ color: '#c5e1a5', textDecoration: 'underline' }}
            >
              herotime.contact@gmail.com
            </a>
          </p>
        </div>

        <div style={{
          backgroundColor: 'rgba(255, 215, 0, 0.05)',
          border: '1px solid rgba(255, 215, 0, 0.2)',
          borderRadius: '6px',
          padding: '1rem',
          marginTop: '1.5rem'
        }}>
          <p style={{ fontSize: '0.9rem', color: '#e0e0e0', lineHeight: '1.6', margin: 0 }}>
            <strong>Please note:</strong><br />
            HeroTime is a fan-made website and cannot provide official information regarding movie releases, studios, or production details.
          </p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: 'rgba(20, 30, 20, 0.3)', 
        border: '1px solid rgba(74, 222, 128, 0.2)',
        borderRadius: '8px',
        padding: '2rem',
        marginBottom: '2rem',
        display: 'none'
      }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="name" 
              style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: '#86efac',
                fontSize: '0.95rem',
                fontWeight: '500'
              }}
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: 'rgba(10, 10, 10, 0.8)',
                border: '1px solid rgba(74, 222, 128, 0.3)',
                borderRadius: '6px',
                color: '#e0e0e0',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="email" 
              style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: '#86efac',
                fontSize: '0.95rem',
                fontWeight: '500'
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: 'rgba(10, 10, 10, 0.8)',
                border: '1px solid rgba(74, 222, 128, 0.3)',
                borderRadius: '6px',
                color: '#e0e0e0',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="subject" 
              style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: '#86efac',
                fontSize: '0.95rem',
                fontWeight: '500'
              }}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="e.g., Feature request, Bug report, General inquiry"
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: 'rgba(10, 10, 10, 0.8)',
                border: '1px solid rgba(74, 222, 128, 0.3)',
                borderRadius: '6px',
                color: '#e0e0e0',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="message" 
              style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: '#86efac',
                fontSize: '0.95rem',
                fontWeight: '500'
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us what's on your mind..."
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: 'rgba(10, 10, 10, 0.8)',
                border: '1px solid rgba(74, 222, 128, 0.3)',
                borderRadius: '6px',
                color: '#e0e0e0',
                fontSize: '1rem',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.9rem',
              backgroundColor: '#228b22',
              color: '#0a0a0a',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)'
            }}
          >
            Send Message
          </button>

          {status && (
            <div style={{
              marginTop: '1rem',
              padding: '0.75rem',
              backgroundColor: 'rgba(74, 222, 128, 0.1)',
              border: '1px solid rgba(74, 222, 128, 0.3)',
              borderRadius: '6px',
              color: '#86efac',
              textAlign: 'center'
            }}>
              {status}
            </div>
          )}
        </form>
      </div>

      <div style={{
        backgroundColor: 'rgba(20, 30, 20, 0.3)',
        border: '1px solid rgba(74, 222, 128, 0.2)',
        borderRadius: '8px',
        padding: '1.5rem',
        textAlign: 'center'
      }}>
        <p style={{ lineHeight: '1.8', color: '#888', fontSize: '0.85rem', margin: 0 }}>
          Advertising – Privacy & Terms – Google
        </p>
      </div>
    </div>
  );
}
