import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20 min-h-screen flex items-center justify-center"
      >
        <div className="container-max section-padding text-center">
          <AnimatedSection>
            <CheckCircle className="text-accent-400 mx-auto mb-6" size={64} />
            <h1 className="text-4xl font-serif font-bold mb-4">
              Message <span className="gradient-text">Sent!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Thank you for reaching out to us. We'll get back to you as soon as possible, 
              usually within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </AnimatedSection>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                We'd love to hear from you. Reach out for collaborations, questions, 
                or to learn more about our mission.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-gray-800 rounded-xl p-8">
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-accent-400">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:border-accent-400 focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-accent-400">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:border-accent-400 focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-accent-400">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:border-accent-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="collaboration">Collaboration Opportunity</option>
                      <option value="partnership">Partnership Proposal</option>
                      <option value="media">Media & Press</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-accent-400">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:border-accent-400 focus:outline-none transition-colors resize-vertical"
                      placeholder="Tell us how we can help you or what you'd like to discuss..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-8">
                {/* Primary Contact */}
                <div className="bg-gray-800 rounded-xl p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-6 text-accent-400">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="text-accent-400 mr-4 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-gray-400">dhwayamfoundation@gmail.com</p>
                        <p className="text-gray-500 text-sm mt-1">
                          Primary contact for all inquiries
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-accent-400 mr-4 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-gray-400">Available upon request</p>
                        <p className="text-gray-500 text-sm mt-1">
                          Phone number provided after initial contact
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-accent-400 mr-4 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Location</h4>
                        <p className="text-gray-400">Seattle, Washington</p>
                        <p className="text-gray-500 text-sm mt-1">
                          Serving the Pacific Northwest region
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gray-800 rounded-xl p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-6 text-accent-400">
                    Follow Our Journey
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Stay connected with us on social media to see our latest performances, 
                    impact stories, and upcoming events.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-gray-900 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="text-accent-400" size={24} />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-900 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="text-accent-400" size={24} />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-900 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="text-accent-400" size={24} />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-900 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="text-accent-400" size={24} />
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gray-800 rounded-xl p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4 text-accent-400">
                    Response Time
                  </h3>
                  <p className="text-gray-400 mb-4">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please mention it in your message subject line.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <p className="text-accent-400 font-semibold mb-2">Business Hours:</p>
                    <p className="text-gray-300 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Weekend: Limited availability for urgent matters
                    </p>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="bg-gray-800 rounded-xl p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4 text-accent-400">
                    Quick Questions?
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Before reaching out, you might find answers to common questions about 
                    our booking process, performance details, and impact initiatives.
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-300 font-medium">Common Topics:</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Booking process and requirements</li>
                      <li>• Performance duration and setup</li>
                      <li>• Pricing and nonprofit rates</li>
                      <li>• Travel and accommodation</li>
                      <li>• Technical requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-800">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Create <span className="gradient-text">Impact</span> Together?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you're planning an event, exploring partnerships, or just want to 
              learn more about our mission, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-primary">
                Book a Performance
              </a>
              <a href="mailto:dhwayamfoundation@gmail.com" className="btn-secondary">
                Email Us Directly
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;