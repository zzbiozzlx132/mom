import React from 'react';
import { Heart, Share2, Coffee, MessageCircle, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Hành Trình Làm Mẹ Cùng Trang & Gạo',
        text: 'Khám phá kinh nghiệm và lời khuyên hữu ích cho các mẹ bỉm sữa!',
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing:', error));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Đã sao chép đường dẫn vào clipboard!'))
        .catch((err) => console.log('Could not copy text: ', err));
    }
  };

  return (
    <footer className="bg-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 flex items-center">
              Được tạo với <Heart className="h-4 w-4 text-pink-500 mx-1" /> bởi Trang
            </p>
            <p className="text-xs text-gray-500 mt-1">
              © {currentYear} Hành Trình Làm Mẹ. Mọi quyền được bảo lưu.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://www.facebook.com/mpt29" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-pink-600 hover:text-pink-700 transition-colors"
            >
              <Facebook className="h-4 w-4 mr-1" /> Facebook của Trang
            </a>
            <a 
              href="https://m.me/mpt29" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-pink-600 hover:text-pink-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4 mr-1" /> Nhắn tin cho Trang
            </a>
            <button 
              onClick={handleShare}
              className="flex items-center text-sm text-pink-600 hover:text-pink-700 transition-colors"
            >
              <Share2 className="h-4 w-4 mr-1" /> Chia sẻ
            </button>
            <a 
              href="#" 
              className="flex items-center text-sm text-pink-600 hover:text-pink-700 transition-colors"
            >
              <Coffee className="h-4 w-4 mr-1" /> Hỗ trợ mình
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            "Không có người mẹ hoàn hảo, chỉ có người mẹ yêu thương con hết lòng."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;