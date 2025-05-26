import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/Footer'; // <= Đã xóa hoặc comment dòng này
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ChecklistPage from './pages/ChecklistPage';
import WeaningPage from './pages/WeaningPage';
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
        <main className="flex-grow pb-16 md:pb-0"> {/* Thêm padding-bottom cho mobile để không bị che bởi Nav/FAB */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checklist" element={<ChecklistPage />} />
            <Route path="/weaning" element={<WeaningPage />} />
          </Routes>
        </main>
        {/* <Footer /> <= Đã xóa dòng này */}
        {showScrollButton && <ScrollToTop />}
      </div>
    </ThemeProvider>
  );
}

export default App;