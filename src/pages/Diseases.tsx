import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { mockConditions } from '../data/mockData';

const Diseases: React.FC = () => {
  const { language } = useLanguage();
  const conditionsList = Object.values(mockConditions);

  return (
    <div className="container section-padding">
      <Helmet>
        <title>{language === 'en' ? 'Disease Directory | HealthGuide' : 'بیماریوں کی ڈائرکٹری | HealthGuide'}</title>
        <meta name="description" content="Browse our comprehensive A-Z list of condition-specific health guides, diets, and exercise plans." />
      </Helmet>

      <h1 className="text-center" style={{ marginBottom: '1rem' }}>
        {language === 'en' ? 'Condition Index' : 'بیماریوں کی فہرست'}
      </h1>
      <p className="text-center text-muted" style={{ marginBottom: '3rem' }}>
        {language === 'en' ? 'A-Z alphabetical list of diseases' : 'بیماریوں کی حروف تہجی کے لحاظ سے فہرست'}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {conditionsList.map((cond) => (
          <Link key={cond.id} to={`/diseases/${cond.id}`} className="card" style={{ display: 'block', textDecoration: 'none' }}>
            <h3 className="text-primary">{cond.name[language]}</h3>
            <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.875rem', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
              {cond.overview[language]}
            </p>
          </Link>
        ))}
        {/* Placeholders to show the grid structure */}
        {['Hypertension', 'PCOD', 'Thyroid', 'Obesity', 'Cholesterol'].map((placeholder, idx) => (
          <div key={idx} className="card" style={{ display: 'block', opacity: 0.6, cursor: 'not-allowed' }}>
            <h3 className="text-primary">{placeholder}</h3>
            <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
              {language === 'en' ? 'Guide coming soon...' : 'گائیڈ جلد آ رہا ہے...'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diseases;
