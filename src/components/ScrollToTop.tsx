import React from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      // ĐÃ THAY ĐỔI: bottom-6 thành bottom-20 để đẩy nút lên cao hơn
      className="fixed bottom-20 right-6 p-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-colors z-40 animate-fade-in"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTop;