// src/components/ShopeeAffiliateLink.tsx
import React from 'react';

// Khai báo gtag trên window để TypeScript không báo lỗi
declare global {
  interface Window {
    gtag?: (event: string, action: string, params?: Record<string, any>) => void;
  }
}

interface ShopeeAffiliateLinkProps {
  shopeeUrl: string;
  itemName: string;
  children: React.ReactNode;
  className?: string;
}

const ShopeeAffiliateLink: React.FC<ShopeeAffiliateLinkProps> = ({ shopeeUrl, itemName, children, className }) => {
  const handleAffiliateClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'click_shopee_affiliate', { // Dòng này giờ sẽ không còn báo lỗi
        'item_name': itemName,
        'link_url': shopeeUrl,
        'platform': 'Shopee',
      });
    } else {
      console.warn('Google Analytics gtag function not found. Affiliate click event not sent.');
    }
  };

  return (
    <a
      href={shopeeUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleAffiliateClick}
      className={className}
    >
      {children}
    </a>
  );
};

export default ShopeeAffiliateLink;