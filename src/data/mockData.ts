export interface ConditionData {
  id: string;
  name: { en: string; ur: string };
  overview: { en: string; ur: string };
  dietaryChart: {
    eat: { en: string[]; ur: string[] };
    avoid: { en: string[]; ur: string[] };
  };
  mealPlan: {
    breakfast: { en: string; ur: string };
    lunch: { en: string; ur: string };
    dinner: { en: string; ur: string };
  };
  exercises: {
    name: { en: string; ur: string };
    type: string;
    description: { en: string; ur: string };
    imageUrl: string;
  }[];
}

export const mockConditions: Record<string, ConditionData> = {
  diabetes: {
    id: 'diabetes',
    name: { en: 'Diabetes', ur: 'ذیابیطس' },
    overview: {
      en: 'Diabetes is a chronic disease that occurs either when the pancreas does not produce enough insulin or when the body cannot effectively use the insulin it produces.',
      ur: 'ذیابیطس ایک دائمی بیماری ہے جو اس وقت ہوتی ہے جب لبلبہ کافی انسولین پیدا نہیں کرتا یا جب جسم پیدا ہونے والی انسولین کو مؤثر طریقے سے استعمال نہیں کر سکتا۔',
    },
    dietaryChart: {
      eat: {
        en: ['Leafy Greens', 'Whole Grains', 'Fatty Fish', 'Beans', 'Nuts (Walnuts, Almonds)'],
        ur: ['ہری پتوں والی سبزیاں', 'ثابت اناج', 'چربی والی مچھلی', 'پھلیاں', 'گری دار میوے'],
      },
      avoid: {
        en: ['Sugary Beverages', 'Trans Fats', 'White Bread, Rice, Pasta', 'Fruit-Flavored Yogurt', 'Sweetened Breakfast Cereals'],
        ur: ['میٹھے مشروبات', 'ٹرانس فیٹس', 'سفید روٹی، چاول، پاستا', 'پھلوں کے ذائقے والا دہی', 'میٹھے ناشتے کے سیریلز'],
      },
    },
    mealPlan: {
      breakfast: {
        en: 'Scrambled eggs with spinach and a slice of whole-wheat toast.',
        ur: 'پالک کے ساتھ انڈے کی بھجی اور ایک ٹکڑا ہول ویٹ ٹوسٹ۔',
      },
      lunch: {
        en: 'Grilled chicken salad with mixed greens, tomatoes, and olive oil dressing.',
        ur: 'مکس سلاد، ٹماٹر، اور زیتون کے تیل کی ڈریسنگ کے ساتھ گرلڈ چکن سلاد۔',
      },
      dinner: {
        en: 'Baked salmon with steamed broccoli and quinoa.',
        ur: 'ابلی ہوئی بروکلی اور کوئنو کے ساتھ بیکڈ سالمن۔',
      },
    },
    exercises: [
      {
        name: { en: 'Brisk Walking', ur: 'تیز چلنا' },
        type: 'Cardio',
        description: {
          en: 'Walking for 30 minutes daily helps lower blood sugar levels and improve insulin resistance.',
          ur: 'روزانہ 30 منٹ تک چلنے سے بلڈ شوگر کی سطح کم کرنے اور انسولین کی مزاحمت کو بہتر بنانے میں مدد ملتی ہے۔',
        },
        imageUrl: 'https://via.placeholder.com/300x200?text=Brisk+Walking',
      },
      {
        name: { en: 'Yoga (Surya Namaskar)', ur: 'یوگا' },
        type: 'Flexibility & Strength',
        description: {
          en: 'Improves digestion, reduces stress, and helps in managing weight.',
          ur: 'ہاضمہ بہتر کرتا ہے، تناؤ کم کرتا ہے، اور وزن کو کنٹرول کرنے میں مدد کرتا ہے۔',
        },
        imageUrl: 'https://via.placeholder.com/300x200?text=Yoga+Poses',
      },
    ],
  },
  // Add more conditions as needed
};
