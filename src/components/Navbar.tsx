import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  const navLinks = {
    en: [
      { path: '/', label: 'Home' },
      { path: '/diseases', label: 'Diseases' },
      { path: '/diet-plans', label: 'Diet Plans' },
      { path: '/workouts', label: 'Workouts' },
      { path: '/about', label: 'About Us' },
      { path: '/contact', label: 'Contact' },
    ],
    ur: [
      { path: '/', label: 'ہوم' },
      { path: '/diseases', label: 'بیماریاں' },
      { path: '/diet-plans', label: 'ڈائٹ پلانز' },
      { path: '/workouts', label: 'ورزشیں' },
      { path: '/about', label: 'ہمارے بارے میں' },
      { path: '/contact', label: 'رابطہ کریں' },
    ]
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Activity className="text-primary" size={28} />
          <span>Health<span className="text-primary">Guide</span></span>
        </Link>
        
        <div className="navbar-links">
          {navLinks[language].map((link) => (
            <Link key={link.path} to={link.path} className="nav-link">
              {link.label}
            </Link>
          ))}
          
          <button onClick={toggleLanguage} className="btn-lang" aria-label="Toggle Language">
            <Globe size={18} />
            {language === 'en' ? 'اردو' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
