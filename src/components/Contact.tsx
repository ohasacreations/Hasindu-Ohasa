import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook,
  Youtube,
  Send,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hasinduohasa@gmail.com',
      href: 'mailto:hasinduohasa@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 76 259 4657',
      href: 'tel:+94762594657'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Sri Jayalath, Getamanna Rd, Kirinda, Puhulwella, Matara, Sri Lanka',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/hasindu-ohasa-991aaa241/?profileId=ACoAADwj-v0BxOYTVFNqZ4oziv0LTObpeIzxYdI',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/ohasacreations',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/imnot_hazi/',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://web.facebook.com/hasindu.ohasa',
      color: 'hover:text-blue-500'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@hasinduohasa5941',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-purple-900/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full" />
          <p className="text-white/80 mt-6 max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities in software development and creative design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-3">
                <MessageCircle className="w-6 h-6 text-purple-400" />
                <span>Contact Information</span>
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300 group"
                    >
                      <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">{item.label}</p>
                        <p className="text-white/90 font-medium">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 ${social.color} group`}
                    >
                      <IconComponent className="w-6 h-6 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 text-center">
                <a
                  href="https://medium.com/@hasinduohasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Also check out my writing on Medium →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <p className="text-white/80">
              © 2025 Hasindu Ohasa. All rights reserved. | Designed with creativity and built with passion.
            </p>
            <p className="text-white/60 mt-2 text-sm">
              Founder of <span className="text-purple-400">Droplens Studios Co.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
