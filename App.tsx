import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import PurchaseSteps from './components/PurchaseSteps';
import TechScroll from './components/TechScroll';
import Quiz from './components/Quiz';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PremiumPage from './components/PremiumPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'premium'>('home');

  // Reset scroll when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view: 'home' | 'premium') => {
    setCurrentView(view);
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-blue-500/30 selection:text-white">
      <Navbar currentView={currentView} onNavigate={navigateTo} />
      
      {currentView === 'home' ? (
        <main>
          <Hero />
          <Testimonials />
          <PurchaseSteps />
          <Quiz />
          <TechScroll />
          <FAQ />
        </main>
      ) : (
        <PremiumPage />
      )}
      
      <Footer />
    </div>
  );
};

export default App;