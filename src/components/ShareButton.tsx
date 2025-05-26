import React from 'react';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  text: string;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, text, className = '' }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Đã sao chép đường dẫn vào clipboard!'))
        .catch((err) => console.log('Could not copy text: ', err));
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center px-4 py-2 bg-pink-100 text-pink-700 rounded-md hover:bg-pink-200 transition-colors ${className}`}
    >
      <Share2 className="w-4 h-4 mr-2" />
      Chia sẻ
    </button>
  );
};

export default ShareButton;