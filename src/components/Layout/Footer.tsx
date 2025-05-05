import React from 'react';
import { Bird, Twitter, Facebook, Instagram, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Bird className="h-8 w-8 text-primary-300 mr-2" />
              <span className="font-display text-xl font-bold text-white">
                BirdSong Explorer
              </span>
            </div>
            <p className="text-primary-100 text-sm mb-4">
              Discover the beautiful world of birds through sound, visuals, and interactive experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary-100">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore/migration" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Migration Mode
                </Link>
              </li>
              <li>
                <Link to="/explore/field-companion" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Field Companion
                </Link>
              </li>
              <li>
                <Link to="/explore/baby-vs-adult" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Baby vs Adult Calls
                </Link>
              </li>
              <li>
                <Link to="/explore/composer" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Bird Song Composer
                </Link>
              </li>
              <li>
                <Link to="/explore/lost-sounds" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Lost Sounds Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary-100">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/learn" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Bird Encyclopedia
                </Link>
              </li>
              <li>
                <Link to="/conservation" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Conservation Efforts
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Bird Blog
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Bird Gallery
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-200 hover:text-white transition-colors text-sm">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary-100">Stay Updated</h3>
            <p className="text-primary-200 text-sm mb-4">
              Subscribe to our newsletter for updates on new bird sounds and features.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg flex-grow text-sm bg-primary-800 border border-primary-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-r-lg text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-300 text-xs mb-4 md:mb-0">
              © {new Date().getFullYear()} Bird Sound Explorer. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-primary-300 hover:text-white text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-300 hover:text-white text-xs transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-primary-300 hover:text-white text-xs transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-primary-400 text-xs flex items-center justify-center">
              Made with <Heart size={12} className="mx-1 text-error-500" /> for birds and bird enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;