import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { Apple, Coffee, Utensils } from 'lucide-react';

const DietPlans: React.FC = () => {
  const { language } = useLanguage();

  const plans = [
    {
      icon: <Apple className="text-success" size={32} />,
      title: { en: 'Weight Loss Plan', ur: 'وزن کم کرنے کا منصوبہ' },
      desc: { en: 'A balanced caloric deficit plan focusing on lean proteins and complex carbs.', ur: 'دبلی پتلی پروٹین اور پیچیدہ کاربوہائیڈریٹس پر مبنی متوازن کیلوریز کی کمی کا منصوبہ۔' }
    },
    {
      icon: <Coffee className="text-primary" size={32} />,
      title: { en: 'Intermittent Fasting', ur: 'وقفے وقفے سے روزہ' },
      desc: { en: '16:8 fasting method to improve insulin sensitivity and support cellular repair.', ur: 'انسولین کی حساسیت کو بہتر بنانے اور خلیوں کی مرمت میں مدد کے لیے 16:8 روزے کا طریقہ۔' }
    },
    {
      icon: <Utensils className="text-secondary" size={32} />,
      title: { en: 'Heart Healthy (DASH)', ur: 'دل کی صحت (DASH)' },
      desc: { en: 'Dietary Approaches to Stop Hypertension, rich in fruits, vegetables, and low-fat dairy.', ur: 'ہائی بلڈ پریشر کو روکنے کے لیے غذائی نقطہ نظر، جو پھلوں، سبزیوں اور کم چکنائی والی ڈیری سے بھرپور ہے۔' }
    }
  ];

  return (
    <div className="container section-padding">
      <Helmet>
        <title>{language === 'en' ? 'Diet Plans | HealthGuide' : 'ڈائٹ پلانز | HealthGuide'}</title>
      </Helmet>
      <h1 className="text-center" style={{ marginBottom: '1rem' }}>
        {language === 'en' ? 'General Diet Plans' : 'عام ڈائٹ پلانز'}
      </h1>
      <p className="text-center text-muted" style={{ marginBottom: '3rem' }}>
        {language === 'en' ? 'Browse our popular, evidence-based nutrition plans.' : 'ہمارے مقبول، شواہد پر مبنی غذائی منصوبے براؤز کریں۔'}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {plans.map((plan, idx) => (
          <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: 'var(--color-background)', borderRadius: '50%' }}>
              {plan.icon}
            </div>
            <h3 style={{ marginBottom: '0.5rem' }}>{plan.title[language]}</h3>
            <p className="text-muted" style={{ marginBottom: '1.5rem', flex: 1 }}>{plan.desc[language]}</p>
            <button className="btn btn-outline">{language === 'en' ? 'View Details' : 'تفصیلات دیکھیں'}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DietPlans;
