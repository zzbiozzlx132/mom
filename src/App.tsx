import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ChecklistPage from './pages/ChecklistPage';
import WeaningPage from './pages/WeaningPage';
import ToysPage from './pages/ToysPage'; // <= Import ToysPage
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pb-16 md:pb-0"> {/* padding-bottom cho mobile đã có */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checklist" element={<ChecklistPage />} />
            <Route path="/weaning" element={<WeaningPage />} />
            <Route path="/toys" element={<ToysPage />} /> {/* <= Thêm Route mới */}
          </Routes>
        </main>
        {showScrollButton && <ScrollToTop />}
      </div>
    </ThemeProvider>
  );
}

export default App;