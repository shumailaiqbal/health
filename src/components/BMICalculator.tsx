import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BMICalculator: React.FC = () => {
  const { language } = useLanguage();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // cm to m
    if (w > 0 && h > 0) {
      setBmi(w / (h * h));
    }
  };

  const getCategory = (val: number) => {
    if (val < 18.5) return language === 'en' ? 'Underweight' : 'کم وزن';
    if (val < 24.9) return language === 'en' ? 'Normal weight' : 'معمول کا وزن';
    if (val < 29.9) return language === 'en' ? 'Overweight' : 'زیادہ وزن';
    return language === 'en' ? 'Obese' : 'موٹاپا';
  };

  return (
    <div className="card" style={{ maxWidth: 400, margin: '0 auto' }}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <Calculator className="text-primary" />
        {language === 'en' ? 'BMI Calculator' : 'BMI کیلکولیٹر'}
      </h3>
      
      <div className="form-group">
        <label className="form-label">{language === 'en' ? 'Weight (kg)' : 'وزن (کلوگرام)'}</label>
        <input 
          type="number" 
          className="form-input" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
          placeholder="e.g. 70"
        />
      </div>

      <div className="form-group">
        <label className="form-label">{language === 'en' ? 'Height (cm)' : 'قد (سینٹی میٹر)'}</label>
        <input 
          type="number" 
          className="form-input" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
          placeholder="e.g. 175"
        />
      </div>

      <button className="btn btn-primary" style={{ width: '100%' }} onClick={calculateBMI}>
        {language === 'en' ? 'Calculate' : 'حساب کریں'}
      </button>

      {bmi !== null && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
            {bmi.toFixed(1)}
          </div>
          <div style={{ color: 'var(--color-text-main)', marginTop: '0.25rem' }}>
            {getCategory(bmi)}
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
