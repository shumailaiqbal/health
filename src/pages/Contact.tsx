import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="container section-padding">
      <Helmet>
        <title>{language === 'en' ? 'Consultation & Contact | HealthGuide' : 'مشاورت اور رابطہ | HealthGuide'}</title>
      </Helmet>
      
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h1 className="text-primary" style={{ marginBottom: '1rem' }}>
          {language === 'en' ? 'Expert Consultation' : 'ماہرین سے مشاورت'}
        </h1>
        <p className="text-muted">
          {language === 'en' 
            ? 'Need personalized advice? Reach out to our team of certified dietitians and medical experts.'
            : 'ذاتی مشورے کی ضرورت ہے؟ ہماری تصدیق شدہ ماہرین خوراک اور طبی ماہرین کی ٹیم سے رابطہ کریں۔'}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        
        {/* Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-lg)' }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>
              {language === 'en' ? 'Contact Information' : 'رابطے کی معلومات'}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Mail className="text-primary" />
              <span>consult@healthguide.example.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Phone className="text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <MapPin className="text-primary" />
              <span>123 Health Ave, Wellness City, HC 90210</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="card" style={{ margin: 0 }}>
          <h3 style={{ marginBottom: '1.5rem' }}>
            {language === 'en' ? 'Send a Message' : 'پیغام بھیجیں'}
          </h3>
          <div className="form-group">
            <label className="form-label">{language === 'en' ? 'Full Name' : 'پورا نام'}</label>
            <input type="text" className="form-input" placeholder={language === 'en' ? "Your name" : "آپ کا نام"} />
          </div>
          <div className="form-group">
            <label className="form-label">{language === 'en' ? 'Email Address' : 'ای میل ایڈریس'}</label>
            <input type="email" className="form-input" placeholder={language === 'en' ? "Your email" : "آپ کا ای میل"} />
          </div>
          <div className="form-group">
            <label className="form-label">{language === 'en' ? 'Condition / Topic' : 'بیماری / موضوع'}</label>
            <select className="form-input">
              <option>{language === 'en' ? 'General Inquiry' : 'عام تفتیش'}</option>
              <option>{language === 'en' ? 'Dietary Consultation' : 'غذائی مشاورت'}</option>
              <option>{language === 'en' ? 'Workout Planning' : 'ورزش کی منصوبہ بندی'}</option>
              <option>{language === 'en' ? 'Technical Support' : 'تکنیکی مدد'}</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">{language === 'en' ? 'Message' : 'پیغام'}</label>
            <textarea className="form-input" rows={5} placeholder={language === 'en' ? "How can we help?" : "ہم کیسے مدد کر سکتے ہیں؟"}></textarea>
          </div>
          <button type="button" className="btn btn-primary" style={{ width: '100%' }}>
            {language === 'en' ? 'Send Message' : 'پیغام بھیجیں'}
          </button>
        </form>

      </div>
    </div>
  );
};
export default Contact;
