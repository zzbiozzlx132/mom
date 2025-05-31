import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Baby,
  Home,
  ListChecks,
  Utensils,
  Facebook,
  MessageCircle,
  Plus,
  ToyBrick // <= Thêm icon ToyBrick
} from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isFabOpen, setIsFabOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Baby className="h-8 w-8 text-pink-500" />
                <span className="ml-2 font-heading font-bold text-lg text-pink-700">
                  Hành Trình Làm Mẹ
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar for Mobile */}
        {/* Thay đổi grid-cols-3 thành grid-cols-4 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 md:hidden z-50">
          <div className="grid grid-cols-4 h-16"> {/* <= THAY ĐỔI Ở ĐÂY */}
            <Link
              to="/"
              className={`flex flex-col items-center justify-center px-1 py-1 text-center ${ // Giảm px nếu cần
                isActive('/')
                  ? 'text-pink-600 bg-pink-50'
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <Home className="w-5 h-5 mb-1" />
              <span className="text-xs">Hành trình</span>
            </Link>
            <Link
              to="/checklist"
              className={`flex flex-col items-center justify-center px-1 py-1 text-center ${
                isActive('/checklist')
                  ? 'text-pink-600 bg-pink-50'
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <ListChecks className="w-5 h-5 mb-1" />
              <span className="text-xs">Danh Sách</span>
            </Link>
            <Link
              to="/weaning"
              className={`flex flex-col items-center justify-center px-1 py-1 text-center ${
                isActive('/weaning')
                  ? 'text-pink-600 bg-pink-50'
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <Utensils className="w-5 h-5 mb-1" />
              <span className="text-xs">Ăn Dặm</span>
            </Link>
            {/* Mục Đồ Chơi Mới cho Mobile */}
            <Link
              to="/toys"
              className={`flex flex-col items-center justify-center px-1 py-1 text-center ${
                isActive('/toys')
                  ? 'text-pink-600 bg-pink-50'
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <ToyBrick className="w-5 h-5 mb-1" />
              <span className="text-xs">Đồ Chơi</span>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center border-t border-pink-100">
          <div className="flex space-x-4 py-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'bg-pink-100 text-pink-700'
                  : 'text-gray-700 hover:bg-pink-50'
              }`}
            >
              Hành Trình Làm Mẹ
            </Link>
            <Link
              to="/checklist"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/checklist')
                  ? 'bg-pink-100 text-pink-700'
                  : 'text-gray-700 hover:bg-pink-50'
              }`}
            >
              Danh Sách Sau Sinh
            </Link>
            <Link
              to="/weaning"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/weaning')
                  ? 'bg-pink-100 text-pink-700'
                  : 'text-gray-700 hover:bg-pink-50'
              }`}
            >
              Ăn Dặm
            </Link>
            {/* Mục Đồ Chơi Mới cho Desktop */}
            <Link
              to="/toys"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/toys')
                  ? 'bg-pink-100 text-pink-700'
                  : 'text-gray-700 hover:bg-pink-50'
              }`}
            >
              Đồ Chơi Cho Bé
            </Link>
          </div>
        </div>
      </nav>

      {/* === NÚT FAB "XÒE CÁNH" === */}
      <div className="fixed bottom-20 left-4 z-50 md:hidden"> {/* Đảm bảo bottom-20 không bị nav mobile mới che */}
        <div className="relative flex flex-col items-center space-y-3">
          <a
            href="https://www.facebook.com/mpt29"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ease-in-out
              ${isFabOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12 pointer-events-none'
              }`}
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://m.me/mpt29"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ease-in-out
              ${isFabOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6 pointer-events-none'
              }`}
            aria-label="Messenger"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
          <button
            onClick={() => setIsFabOpen(!isFabOpen)}
            className={`bg-pink-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-pink-600 focus:outline-none transition-transform duration-300 ease-in-out z-10 ${
              isFabOpen ? 'rotate-45' : 'rotate-0'
            }`}
            aria-label="Liên hệ"
          >
            <Plus className="w-7 h-7" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;