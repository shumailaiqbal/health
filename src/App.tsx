import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

// Pages placeholders
import Home from './pages/Home';
import Diseases from './pages/Diseases';
import Guide from './pages/Guide';
import DietPlans from './pages/DietPlans';
import Workouts from './pages/Workouts';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="diseases" element={<Diseases />} />
          <Route path="diseases/:id" element={<Guide />} />
          <Route path="diet-plans" element={<DietPlans />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
