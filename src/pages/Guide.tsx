import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { mockConditions } from '../data/mockData';
import { CheckCircle, XCircle } from 'lucide-react';

const Guide: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  
  const condition = id ? mockConditions[id.toLowerCase()] : null;

  if (!condition) {
    return (
      <div className="container section-padding text-center">
        <h2>{language === 'en' ? 'Condition not found' : 'بیماری نہیں ملی'}</h2>
        <Link to="/diseases" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          {language === 'en' ? 'Back to Diseases' : 'بیماریوں کی فہرست میں واپس جائیں'}
        </Link>
      </div>
    );
  }

  return (
    <div className="container section-padding">
      <Helmet>
        <title>{condition.name[language]} Guide | Diet & Workouts</title>
        <meta name="description" content={`Get the recommended diet chart, meal plan, and exercise recommendations for managing ${condition.name.en}.`} />
      </Helmet>

      <h1 className="text-primary" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>
        {condition.name[language]}
      </h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '3rem', maxWidth: '800px' }}>
        {condition.overview[language]}
      </p>

      {/* Dietary Chart */}
      <h2 style={{ marginBottom: '1.5rem' }}>{language === 'en' ? 'Dietary Chart' : 'ڈائٹ چارٹ'}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="card" style={{ borderTop: '4px solid var(--color-success)' }}>
          <h3 className="text-success" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <CheckCircle /> {language === 'en' ? 'Foods to Eat' : 'کھانے کے قابل اشیاء'}
          </h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {condition.dietaryChart.eat[language].map((item, idx) => (
              <li key={idx} style={{ padding: '0.5rem', backgroundColor: 'var(--color-success-light)', borderRadius: 'var(--radius-sm)' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="card" style={{ borderTop: '4px solid var(--color-danger)' }}>
          <h3 className="text-danger" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <XCircle /> {language === 'en' ? 'Foods to Avoid' : 'پرہیز کرنے والی اشیاء'}
          </h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {condition.dietaryChart.avoid[language].map((item, idx) => (
              <li key={idx} style={{ padding: '0.5rem', backgroundColor: 'var(--color-danger-light)', borderRadius: 'var(--radius-sm)' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Daily Meal Plan */}
      <h2 style={{ marginBottom: '1.5rem' }}>{language === 'en' ? 'Daily Meal Plan' : 'روزانہ کے کھانے کا منصوبہ'}</h2>
      <div className="card" style={{ marginBottom: '3rem', padding: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ padding: '1rem', fontWeight: 600, backgroundColor: 'var(--color-background)', borderRight: language === 'en' ? '1px solid var(--color-border)' : 'none', borderLeft: language === 'ur' ? '1px solid var(--color-border)' : 'none' }}>
            {language === 'en' ? 'Breakfast' : 'ناشتہ'}
          </div>
          <div style={{ padding: '1rem' }}>{condition.mealPlan.breakfast[language]}</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ padding: '1rem', fontWeight: 600, backgroundColor: 'var(--color-background)', borderRight: language === 'en' ? '1px solid var(--color-border)' : 'none', borderLeft: language === 'ur' ? '1px solid var(--color-border)' : 'none' }}>
            {language === 'en' ? 'Lunch' : 'دوپہر کا کھانا'}
          </div>
          <div style={{ padding: '1rem' }}>{condition.mealPlan.lunch[language]}</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
          <div style={{ padding: '1rem', fontWeight: 600, backgroundColor: 'var(--color-background)', borderRight: language === 'en' ? '1px solid var(--color-border)' : 'none', borderLeft: language === 'ur' ? '1px solid var(--color-border)' : 'none' }}>
            {language === 'en' ? 'Dinner' : 'رات کا کھانا'}
          </div>
          <div style={{ padding: '1rem' }}>{condition.mealPlan.dinner[language]}</div>
        </div>
      </div>

      {/* Exercise Module */}
      <h2 style={{ marginBottom: '1.5rem' }}>{language === 'en' ? 'Exercise Recommendations' : 'ورزش کی تجاویز'}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {condition.exercises.map((ex, idx) => (
          <div key={idx} className="card" style={{ overflow: 'hidden', padding: 0 }}>
            <div style={{ height: '200px', backgroundColor: '#e2e8f0', backgroundImage: `url(${ex.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase' }}>{ex.type}</span>
              <h3 style={{ margin: '0.5rem 0' }}>{ex.name[language]}</h3>
              <p className="text-muted">{ex.description[language]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
