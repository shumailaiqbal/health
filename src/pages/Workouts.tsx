import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { Activity, Dumbbell, HeartPulse } from 'lucide-react';

const Workouts: React.FC = () => {
  const { language } = useLanguage();

  const workouts = [
    {
      icon: <HeartPulse className="text-danger" size={32} />,
      title: { en: 'Cardio for Heart Health', ur: 'دل کی صحت کے لیے کارڈیو' },
      desc: { en: 'Low to moderate intensity steady state cardio for cardiovascular endurance.', ur: 'قلبی قوت برداشت کے لیے کم سے درمیانی شدت کی مستحکم کارڈیو۔' }
    },
    {
      icon: <Activity className="text-primary" size={32} />,
      title: { en: 'Yoga & Flexibility', ur: 'یوگا اور لچک' },
      desc: { en: 'Stretching and breathing exercises to reduce stress and improve joint mobility.', ur: 'تناؤ کو کم کرنے اور جوڑوں کی نقل و حرکت کو بہتر بنانے کے لیے کھینچنے اور سانس لینے کی مشقیں۔' }
    },
    {
      icon: <Dumbbell className="text-secondary" size={32} />,
      title: { en: 'Strength Training', ur: 'طاقت کی تربیت' },
      desc: { en: 'Build muscle mass to improve metabolism and bone density using light weights.', ur: 'ہلکے وزن کا استعمال کرتے ہوئے میٹابولزم اور ہڈیوں کی کثافت کو بہتر بنانے کے لیے پٹھوں کے حجم کو بڑھائیں۔' }
    }
  ];

  return (
    <div className="container section-padding">
      <Helmet>
        <title>{language === 'en' ? 'Workouts | HealthGuide' : 'ورزشیں | HealthGuide'}</title>
      </Helmet>
      <h1 className="text-center" style={{ marginBottom: '1rem' }}>
        {language === 'en' ? 'Workout Libraries' : 'ورزش کی لائبریریاں'}
      </h1>
      <p className="text-center text-muted" style={{ marginBottom: '3rem' }}>
        {language === 'en' ? 'Safe and effective routines for various health levels.' : 'مختلف صحت کی سطحوں کے لیے محفوظ اور موثر معمولات۔'}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {workouts.map((wk, idx) => (
          <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: 'var(--color-primary-light)', borderRadius: '50%' }}>
              {wk.icon}
            </div>
            <h3 style={{ marginBottom: '0.5rem' }}>{wk.title[language]}</h3>
            <p className="text-muted" style={{ marginBottom: '1.5rem', flex: 1 }}>{wk.desc[language]}</p>
            <button className="btn btn-outline">{language === 'en' ? 'Start Routine' : 'معمول شروع کریں'}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Workouts;
