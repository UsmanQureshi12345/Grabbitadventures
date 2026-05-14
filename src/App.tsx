/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Navigation';
import Home from './pages/Home';
import Treks from './pages/Treks';
import TrekDetail from './pages/TrekDetail';
import Rental from './pages/Rental';
import Contact from './pages/Contact';
import CustomAdventures from './pages/CustomAdventures';
import About from './pages/About';
import Blog from './pages/Blog';
import { LegalPage } from './pages/Legal';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-500 selection:text-white">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/treks" element={<Treks />} />
            <Route path="/treks/:id" element={<TrekDetail />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/custom" element={<CustomAdventures />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<LegalPage title="Terms & Conditions" />} />
            <Route path="/privacy" element={<LegalPage title="Privacy Policy" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


