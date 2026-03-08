import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  const disclaimer = language === 'en' 
    ? 'Information is for educational purposes only; consult a doctor before starting any plan.'
    : 'یہ معلومات صرف تعلیمی مقاصد کے لیے ہیں؛ کوئی بھی منصوبہ شروع کرنے سے پہلے ڈاکٹر سے مشورہ کریں۔';

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="disclaimer-chip text-danger">
          <ShieldAlert size={20} />
          <strong>Medical Disclaimer</strong>
        </div>
        <p>{disclaimer}</p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} HealthGuide. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
