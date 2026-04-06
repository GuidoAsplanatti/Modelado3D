
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import CursosPage from './pages/CursosPage.jsx';
import InstructorPage from './pages/InstructorPage.jsx';
import UbicacionPage from './pages/UbicacionPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import ContactoPage from './pages/ContactoPage.jsx';
import GraciasPage from './pages/GraciasPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/curso" element={<CursosPage />} />
        <Route path="/instructor" element={<InstructorPage />} />
        <Route path="/ubicacion" element={<UbicacionPage />} />
        <Route path="/preguntas" element={<FaqPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/gracias" element={<GraciasPage />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos" element={<TermsOfService />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
              <p className="text-xl text-slate-600 mb-8">Página no encontrada</p>
              <a 
                href="/" 
                className="inline-block px-6 py-3 bg-[#0369a1] text-white rounded-xl hover:bg-[#0284c7] transition-all duration-200"
              >
                Volver al inicio
              </a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
