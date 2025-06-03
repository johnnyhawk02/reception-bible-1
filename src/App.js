import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import OpeningProcedure from './pages/OpeningProcedure';
import DosAndDonts from './pages/DosAndDonts';
import Memberships from './pages/Memberships';
import FitnessClasses from './pages/FitnessClasses';
import TillChecks from './pages/TillChecks';
import EndOfDay from './pages/EndOfDay';
import FAQs from './pages/FAQs';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opening-procedure" element={<OpeningProcedure />} />
          <Route path="/dos-and-donts" element={<DosAndDonts />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/fitness-classes" element={<FitnessClasses />} />
          <Route path="/till-checks" element={<TillChecks />} />
          <Route path="/end-of-day" element={<EndOfDay />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;