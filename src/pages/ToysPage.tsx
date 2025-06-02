// src/pages/ToysPage.tsx
import React from 'react';
import { toysData, ToyItem, AgeGroupSection, ToyLink } from '../data/toysData'; // Import thêm ToyLink
import { ExternalLink } from 'lucide-react';
import ShopeeAffiliateLink from '../components/ShopeeAffiliateLink'; // << THÊM IMPORT NÀY

const ToysPage: React.FC = () => {
  return (
    <div className="bg-pink-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1 className="page-title">{toysData.mainTitle}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {toysData.introduction}
          </p>
        </header>

        {toysData.ageGroups.map((ageGroup: AgeGroupSection) => (
          <section key={ageGroup.id} className="mb-12 animate-fade-in">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-pink-600 mb-3 border-b-2 border-pink-200 pb-2">
                {ageGroup.title}
              </h2>
              {ageGroup.introduction && (
                <p className="text-gray-600 mb-6 italic">
                  {ageGroup.introduction}
                </p>
              )}
              <div className="space-y-8">
                {ageGroup.toys.map((toy: ToyItem) => (
                  <div key={toy.id} className="p-4 rounded-md border border-pink-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-pink-700 mb-2">
                      {toy.name}
                    </h3>
                    <p className="text-gray-700 whitespace-pre-line mb-3">
                      {toy.description}
                    </p>
                    {toy.links && toy.links.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          Gợi ý sản phẩm:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {toy.links.map((link: ToyLink, index: number) => ( // Thêm type cho link và index
                            // << THAY THẾ Ở ĐÂY CHO CÁC LINK ĐỒ CHƠI >>
                            <ShopeeAffiliateLink
                              key={index}
                              shopeeUrl={link.url}
                              itemName={`${toy.name} - ${link.text || 'Link ' + (index + 1)}`} // Tạo itemName chi tiết
                              className="inline-flex items-center px-3 py-1.5 text-xs bg-pink-100 text-pink-700 rounded-md shadow-sm hover:bg-pink-200 transition-colors font-medium"
                            >
                              {link.text || `Link gợi ý ${index + 1}`}
                              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                            </ShopeeAffiliateLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {toysData.tips && toysData.tips.length > 0 && (
          <section className="mt-12 animate-fade-in">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-pink-600 mb-3">
                {toysData.tipsTitle}
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {toysData.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ToysPage;