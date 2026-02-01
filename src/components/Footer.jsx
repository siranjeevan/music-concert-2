import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-serif font-bold gradient-text">
                Dhwayam
              </h3>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              A Gen Z-led Carnatic fusion band using music as a bridge between tradition 
              and purpose, creating social impact through fundraising concerts and 
              community outreach programs.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:dhwayamfoundation@gmail.com"
                className="text-gray-400 hover:text-accent-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Initiatives Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-400">
              Our Initiatives
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/initiatives"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  Harmony for Hope
                </Link>
              </li>
              <li>
                <Link
                  to="/initiatives"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  Together Through Music
                </Link>
              </li>
              <li>
                <Link
                  to="/impact"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  Our Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/events"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  Book Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 Dhwayam Foundation. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Contact: dhwayamfoundation@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;