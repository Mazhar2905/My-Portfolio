import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // SIMPLIFIED tracking function - NO navigation logic
  const trackContactEvent = (action, label) => {
    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: 'Contact',
        event_label: label,
        value: 1
      });
      console.log(`📊 Tracked: ${action} - ${label}`);
    } else {
      console.warn('Google Analytics not loaded yet');
    }
  };

  // SIMPLIFIED click handlers - Just track, don't navigate
  const handleEmailClick = (e) => {
    trackContactEvent('email_click', 'Email Link');
    console.log('Email click tracked...');
    // Let the <a href="mailto:..."> work naturally
  };

  const handlePhoneClick = (e) => {
    trackContactEvent('phone_click', 'Phone Link');
    console.log('Phone click tracked...');
    // Let the <a href="tel:..."> work naturally
  };

  const handleLinkedInClick = (e) => {
    trackContactEvent('social_click', 'LinkedIn');
    console.log('LinkedIn click tracked...');
    // Let the <a href="https://..." target="_blank"> work naturally
  };

  const handleFormSubmit = (e) => {
    trackContactEvent('form_submit', 'Contact Form');
    console.log('Form submission tracked');
    // Formspree handles the rest
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Interested in discussing data analytics opportunities or just want to connect?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-dark mb-8">Let's Connect</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                  <a 
                    href="mailto:sayyedmazhar.2905@gmail.com?subject=Portfolio Inquiry"
                    onClick={handleEmailClick}
                    className="text-gray-600 hover:text-primary underline"
                  >
                    sayyedmazhar.2905@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Typically responds within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                  <a 
                    href="tel:+918668324424"
                    onClick={handlePhoneClick}
                    className="text-gray-600 hover:text-primary underline"
                  >
                    +91 8668324424
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Available for calls Mon-Fri, 10AM-6PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">Maharashtra, India</p>
                  <p className="text-sm text-gray-500 mt-1">Open to remote opportunities & relocation</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-12">
              <h4 className="font-bold text-gray-800 mb-6">Follow My Journey</h4>
              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/sayyedmazhar/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkedInClick}
                  className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-md transition-all duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://github.com/Mazhar2905" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkedInClick}
                  className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-md transition-all duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.kaggle.com/mazharsayyed"
                  target="_blank"
                  rel="noopener noreferrer" 
                  onClick={handleLinkedInClick}
                  className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-md transition-all duration-300"
                >
                  <div className="text-lg font-bold text-gray-700">K</div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-dark mb-6">Send a Message</h3>
            
            <form 
              action="https://formspree.io/f/mldqoqeb" 
              method="POST"
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                  placeholder="I'd like to discuss..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-secondary transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Note:</span> I'm currently seeking internship opportunities 
                and entry-level data analyst positions. Let's discuss how I can add value to your team!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;