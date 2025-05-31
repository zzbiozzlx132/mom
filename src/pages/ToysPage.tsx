import React from 'react';
import { toysData, ToyItem, AgeGroupSection } from '../data/toysData'; // Import dữ liệu
import { ExternalLink, ShoppingCart } from 'lucide-react'; // Thêm ShoppingCart nếu muốn icon khác cho link SP

const ToysPage: React.FC = () => {
  return (
    // ĐÃ XÓA: dark:bg-gray-900
    <div className="bg-pink-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1 className="page-title">{toysData.mainTitle}</h1>
          {/* ĐÃ XÓA: dark:text-gray-300 */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            {toysData.introduction}
          </p>
        </header>

        {toysData.ageGroups.map((ageGroup: AgeGroupSection) => (
          <section key={ageGroup.id} className="mb-12 animate-fade-in">
            {/* ĐÃ XÓA: dark:bg-gray-800 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* ĐÃ XÓA: dark:text-pink-400 */}
              <h2 className="text-2xl font-semibold text-pink-600 mb-3 border-b-2 border-pink-200 pb-2">
                {ageGroup.title}
              </h2>
              {ageGroup.introduction && (
                // ĐÃ XÓA: dark:text-gray-300
                <p className="text-gray-600 mb-6 italic">
                  {ageGroup.introduction}
                </p>
              )}
              <div className="space-y-8">
                {ageGroup.toys.map((toy: ToyItem) => (
                  // ĐÃ XÓA: dark:border-gray-700 dark:bg-gray-800
                  <div key={toy.id} className="p-4 rounded-md border border-pink-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    {/* ĐÃ XÓA: dark:text-pink-300 */}
                    <h3 className="text-lg font-semibold text-pink-700 mb-2">
                      {toy.name}
                    </h3>
                    {/* ĐÃ XÓA: dark:text-gray-400 */}
                    <p className="text-gray-700 whitespace-pre-line mb-3">
                      {toy.description}
                    </p>
                    {toy.links && toy.links.length > 0 && (
                      <div>
                        {/* ĐÃ XÓA: dark:text-gray-200 */}
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          Gợi ý sản phẩm:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {toy.links.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              // ĐÃ XÓA: dark:bg-pink-900 dark:text-pink-300 dark:hover:bg-pink-800
                              className="inline-flex items-center px-3 py-1.5 text-xs bg-pink-100 text-pink-700 rounded-md shadow-sm hover:bg-pink-200 transition-colors font-medium"
                            >
                              {link.text || `Link gợi ý ${index + 1}`}
                              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                            </a>
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
            {/* ĐÃ XÓA: dark:bg-gray-800 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* ĐÃ XÓA: dark:text-pink-400 */}
              <h2 className="text-xl font-semibold text-pink-600 mb-3">
                {toysData.tipsTitle}
              </h2>
              {/* ĐÃ XÓA: dark:text-gray-300 */}
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