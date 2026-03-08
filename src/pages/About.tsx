import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

  const articles = [
    {
      title: { en: 'Understanding Glycemic Index', ur: 'گلائسیمک انڈیکس کو سمجھنا' },
      date: 'March 15, 2026',
      excerpt: { en: 'Learn how different carbohydrate-containing foods affect your blood sugar levels.', ur: 'جانیں کہ کاربوہائیڈریٹ پر مشتمل مختلف غذائیں آپ کے بلڈ شوگر کی سطح کو کیسے متاثر کرتی ہیں۔' },
      author: 'Dr. Sarah Jenkins'
    },
    {
      title: { en: 'The Role of Sleep in Weight Management', ur: 'وزن کو کنٹرول کرنے میں نیند کا کردار' },
      date: 'March 10, 2026',
      excerpt: { en: 'Why getting 7-8 hours of quality sleep is just as important as diet and exercise.', ur: 'کیوں 7-8 گھنٹے کی معیاری نیند خوراک اور ورزش کے برابر اہم ہے۔' },
      author: 'Mark Rutherford, Nutritionist'
    },
    {
      title: { en: 'Managing Stress for Better Heart Health', ur: 'بہتر دل کی صحت کے لیے تناؤ کا انتظام' },
      date: 'March 05, 2026',
      excerpt: { en: 'Practical techniques to lower cortisol levels and protect your cardiovascular system.', ur: 'کورٹیسول کی سطح کو کم کرنے اور آپ کے دل کے نظام کی حفاظت کے لیے عملی تکنیک۔' },
      author: 'Dr. Aisha Khan'
    }
  ];

  return (
    <div className="container section-padding">
      <Helmet>
        <title>{language === 'en' ? 'About Us & Expert Blog | HealthGuide' : 'ہمارے بارے میں اور ماہرین کا بلاگ | HealthGuide'}</title>
      </Helmet>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="text-primary" style={{ marginBottom: '1rem' }}>
          {language === 'en' ? 'About HealthGuide' : 'HealthGuide کے بارے میں'}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>
          {language === 'en' 
            ? 'Our mission is to provide accessible, scientifically-backed nutritional and exercise guidance to help you manage health conditions effectively.'
            : 'ہمارا مشن آپ کو صحت کی حالتوں کو مؤثر طریقے سے منظم کرنے میں مدد کے لیے قابل رسائی، سائنسی بنیادوں پر غذائی اور ورزش کی رہنمائی فراہم کرنا ہے۔'}
        </p>
      </div>

      <h2 style={{ marginBottom: '2rem' }}>
        {language === 'en' ? 'Expert Health Articles' : 'ماہرین کے صحت سے متعلق مضامین'}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        {articles.map((art, idx) => (
          <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 className="text-primary">{art.title[language]}</h3>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              <span>{art.author}</span> • <span>{art.date}</span>
            </div>
            <p>{art.excerpt[language]}</p>
            <a href="#" className="text-secondary" style={{ fontWeight: 500, marginTop: '0.5rem', display: 'inline-block' }}>
              {language === 'en' ? 'Read Full Article →' : 'مکمل مضمون پڑھیں ←'}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
