import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Fixed: Use window.gtag to avoid ESLint errors
  const trackContactEvent = (action, label) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: 'Contact',
        event_label: label,
        value: 1
      });
      console.log(`📊 Tracked: ${action} - ${label}`);
    }
  };

  const handleFormSubmit = (e) => {
    trackContactEvent('form_submit', 'Contact Form');
    console.log('Form submission tracked');
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
              {/* Email Section - FIXED */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sayyedmazhar.2905@gmail.com&su=Portfolio Inquiry - Data Analyst"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary underline"
                    onClick={() => {
                      if (window.gtag) {
                        window.gtag('event', 'click', {
                          event_category: 'Contact',
                          event_label: 'Email Link'
                        });
                      }
                    }}
                  >
                    sayyedmazhar.2905@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Opens Gmail compose window. I respond within 24 hours.
                  </p>
                </div>
              </div>
              
              {/* Phone Section */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                  <a 
                    href="tel:+918668324424"
                    className="text-gray-600 hover:text-primary underline"
                    onClick={() => {
                      if (window.gtag) {
                        window.gtag('event', 'click', {
                          event_category: 'Contact',
                          event_label: 'Phone Link'
                        });
                      }
                    }}
                  >
                    +91 8668324424
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Available for calls Mon-Fri, 10AM-6PM</p>
                </div>
              </div>
              
              {/* Location */}
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
                  className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-md transition-all duration-300"
                  onClick={() => {
                    if (window.gtag) {
                      window.gtag('event', 'click', {
                        event_category: 'Social',
                        event_label: 'LinkedIn'
                      });
                    }
                  }}
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                {/* Other social links similarly... */}
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
              {/* Form fields remain the same */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;