import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import BMICalculator from '../components/BMICalculator';
import PlanGenerator from '../components/PlanGenerator';

const Home: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="home-page">
      <Helmet>
        <title>HealthGuide | Disease-Specific Diet & Exercise</title>
        <meta name="description" content="Find specialized diet and exercise plans for specific health conditions." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section medical-gradient">
        <div className="container text-center">
          <h1 className="animate-fade-in" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            {language === 'en' ? 'Your Guide to a Healthier Life' : 'ایک صحت مند زندگی کے لیے آپ کا رہنما'}
          </h1>
          <p className="animate-fade-in text-muted" style={{ fontSize: '1.25rem', marginBottom: '2rem', animationDelay: '0.2s' }}>
            {language === 'en' 
              ? 'Find condition-specific diet and exercise plans backed by science.' 
              : 'سائنس پر مبنی مخصوص بیماریوں کے غذا اور ورزش کے منصوبے تلاش کریں۔'}
          </p>
          
          <div className="search-bar-wrapper animate-fade-in" style={{ animationDelay: '0.4s', maxWidth: '600px', margin: '0 auto' }}>
            <input 
              type="text" 
              className="form-input" 
              placeholder={language === 'en' ? 'Find a diet for your condition (e.g., Diabetes)...' : 'اپنی بیماری کے لئے غذا تلاش کریں...'} 
              style={{ padding: '1rem', fontSize: '1.1rem', borderRadius: '9999px', boxShadow: 'var(--shadow-md)' }}
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding container">
        <h2 className="text-center" style={{ marginBottom: '2rem' }}>
          {language === 'en' ? 'Common Conditions' : 'عام بیماریاں'}
        </h2>
        <div className="disease-grid">
          {['Diabetes', 'Hypertension', 'PCOD', 'Thyroid'].map((cond, idx) => (
            <div key={idx} className="card text-center" style={{ cursor: 'pointer' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-primary-light)', margin: '0 auto 1rem flex', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="text-primary" style={{ fontSize: '1.5rem', fontWeight: 700 }}>{cond[0]}</span>
              </div>
              <h3>{cond}</h3>
              <p className="text-muted" style={{ marginTop: '0.5rem' }}>View Diet & Workout Plan</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '2rem' }}>
            {language === 'en' ? 'Interactive Health Tools' : 'صحت کے انٹرایکٹو ٹولز'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <BMICalculator />
            <PlanGenerator />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
