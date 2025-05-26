import React, { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { motherBabyChecklistData } from '../data/checklistData';
import { ChecklistItem } from '../types/ChecklistTypes';
import ShareButton from '../components/ShareButton';
import { X, ExternalLink, Check } from 'lucide-react';

const ChecklistPage: React.FC = () => {
  const [checklistData, setChecklistData] = useLocalStorage('motherBabyChecklist', motherBabyChecklistData);
  const [progress, setProgress] = useState({
    mother: { total: 0, checked: 0, percentage: 0 },
    baby: { total: 0, checked: 0, percentage: 0 },
    overall: { total: 0, checked: 0, percentage: 0 }
  });

  useEffect(() => {
    const motherItems = checklistData.sections.find(s => s.id === 'mother-items')?.items || [];
    const babyItems = checklistData.sections.find(s => s.id === 'baby-items')?.items || [];
    
    const motherTotal = motherItems.length;
    const motherChecked = motherItems.filter(item => item.checked).length;
    
    const babyTotal = babyItems.length;
    const babyChecked = babyItems.filter(item => item.checked).length;
    
    const overallTotal = motherTotal + babyTotal;
    const overallChecked = motherChecked + babyChecked;
    
    setProgress({
      mother: {
        total: motherTotal,
        checked: motherChecked,
        percentage: motherTotal > 0 ? Math.round((motherChecked / motherTotal) * 100) : 0
      },
      baby: {
        total: babyTotal,
        checked: babyChecked,
        percentage: babyTotal > 0 ? Math.round((babyChecked / babyTotal) * 100) : 0
      },
      overall: {
        total: overallTotal,
        checked: overallChecked,
        percentage: overallTotal > 0 ? Math.round((overallChecked / overallTotal) * 100) : 0
      }
    });
  }, [checklistData]);

  const handleToggleCheck = (sectionId: string, itemId: string) => {
    setChecklistData(prevData => {
      const updatedSections = prevData.sections.map(section => {
        if (section.id === sectionId) {
          const updatedItems = section.items.map(item => {
            if (item.id === itemId) {
              return { ...item, checked: !item.checked };
            }
            return item;
          });
          return { ...section, items: updatedItems };
        }
        return section;
      });
      return { ...prevData, sections: updatedSections };
    });
  };

  const resetChecklist = () => {
    if (window.confirm('Bạn có chắc chắn muốn đặt lại toàn bộ danh sách không? Tất cả các mục đã chọn sẽ bị bỏ chọn.')) {
      setChecklistData(prevData => {
        const resetSections = prevData.sections.map(section => {
          const resetItems = section.items.map(item => ({
            ...item,
            checked: false
          }));
          return { ...section, items: resetItems };
        });
        return { ...prevData, sections: resetSections };
      });
    }
  };

  const getStatusColor = (percentage: number) => {
    if (percentage === 0) return 'bg-gray-200 dark:bg-gray-700';
    if (percentage < 33) return 'bg-red-400 dark:bg-red-600';
    if (percentage < 66) return 'bg-yellow-400 dark:bg-yellow-600';
    return 'bg-green-400 dark:bg-green-600';
  };

  return (
    <div className="bg-pink-50 dark:bg-gray-900 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h1 className="page-title">{checklistData.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            {checklistData.introduction}
          </p>
          <div className="flex justify-center mb-6">
            <ShareButton
              title="Danh Sách Sau Sinh Cho Mẹ Và Bé"
              text="Checklist đầy đủ những đồ dùng cần thiết cho mẹ và bé sau sinh!"
            />
          </div>
        </header>

        {/* Progress bars */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 animate-fade-in">
           <h2 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-4">Tiến độ chuẩn bị</h2>
           {/* ... (phần progress bar giữ nguyên) ... */}
           <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tổng thể</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {progress.overall.checked}/{progress.overall.total} ({progress.overall.percentage}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ${getStatusColor(progress.overall.percentage)}`}
                  style={{ width: `${progress.overall.percentage}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Đồ dùng cho mẹ</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {progress.mother.checked}/{progress.mother.total} ({progress.mother.percentage}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ${getStatusColor(progress.mother.percentage)}`}
                  style={{ width: `${progress.mother.percentage}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Đồ dùng cho bé</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {progress.baby.checked}/{progress.baby.total} ({progress.baby.percentage}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ${getStatusColor(progress.baby.percentage)}`}
                  style={{ width: `${progress.baby.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-right">
            <button
              onClick={resetChecklist}
              className="inline-flex items-center px-3 py-1.5 text-sm bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <X className="w-4 h-4 mr-1" /> Đặt lại danh sách
            </button>
          </div>
        </div>

        {/* Checklist sections */}
        {checklistData.sections.map((section) => (
          <section key={section.id} className="mb-10 animate-slide-in">
            <h2 className="section-title bg-white dark:bg-gray-800 p-4 rounded-t-lg shadow-sm">
              {section.title}
            </h2>

            {/* Giao diện Bảng (Desktop) */}
            <div className="bg-white dark:bg-gray-800 rounded-b-lg shadow-md overflow-hidden hidden md:block">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  {/* ... (thead giữ nguyên) ... */}
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                      <th scope="col" className="w-12 px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">STT</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Vật dụng</th>
                      <th scope="col" className="w-24 px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Số lượng</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Kinh nghiệm</th>
                      <th scope="col" className="w-20 px-4 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Đã có</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {section.items.map((item, index) => (
                      <tr key={item.id} className={`${item.checked ? 'bg-green-50 dark:bg-green-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'} transition-colors`}>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{index + 1}</td>
                        <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100"><span className={item.checked ? 'line-through text-gray-500' : ''}>{item.name}</span></td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{item.quantity}</td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                           <div className="flex items-center justify-between">
                            <span className={`${item.checked ? 'line-through' : ''} flex-1 pr-2`}>{item.reason}</span>
                            {item.link && (
                              <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2.5 py-1.5 bg-pink-100 text-pink-700 rounded-md shadow-sm hover:bg-pink-200 dark:bg-pink-900 dark:text-pink-300 dark:hover:bg-pink-800 transition-colors text-xs font-medium whitespace-nowrap">
                                Gợi ý SP <ExternalLink className="w-3.5 h-3.5 ml-1" />
                              </a>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-center">
                          <label className="relative inline-flex items-center justify-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked={item.checked} onChange={() => handleToggleCheck(section.id, item.id)} />
                            <div className={`w-6 h-6 border-2 rounded-md flex items-center justify-center ${item.checked ? 'bg-pink-500 border-pink-500' : 'bg-white border-gray-300'}`}>{item.checked && <Check className="w-4 h-4 text-white" />}</div>
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* === GIAO DIỆN THẺ CHO MOBILE (ĐÃ THÊM STT) === */}
            <div className="block md:hidden bg-white dark:bg-gray-800 rounded-b-lg shadow-md p-4 space-y-4">
              {section.items.map((item, index) => ( // <= Thêm 'index' vào map
                <div
                  key={item.id}
                  className={`p-4 rounded-lg shadow border-l-4 ${
                    item.checked
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-400'
                      : 'bg-white dark:bg-gray-800 border-pink-400'
                  }`}
                  style={{boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)'}}
                >
                  <div className="flex justify-between items-start mb-3">
                    {/* === KHỐI STT VÀ TÊN VẬT DỤNG === */}
                    <div className="flex items-start flex-1">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-xs font-semibold text-pink-700 bg-pink-100 rounded-full flex-shrink-0">
                        {index + 1} {/* <= Hiển thị STT */}
                      </span>
                      <h3
                        className={`text-base font-semibold text-gray-900 dark:text-gray-100 flex-1 mr-3 ${
                          item.checked ? 'line-through text-gray-500 dark:text-gray-400' : ''
                        }`}
                      >
                        {item.name}
                      </h3>
                    </div>
                    {/* Checkbox */}
                    <label className="relative inline-flex items-center justify-center cursor-pointer flex-shrink-0">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={item.checked}
                        onChange={() => handleToggleCheck(section.id, item.id)}
                      />
                      <div className={`w-6 h-6 border-2 rounded-md flex items-center justify-center transition-colors
                        ${item.checked
                          ? 'bg-pink-500 border-pink-500 dark:bg-pink-600 dark:border-pink-600'
                          : 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600'}`}>
                        {item.checked && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </label>
                  </div>

                  {/* Số lượng */}
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-3 ml-9"> {/* Thêm ml-9 để thẳng hàng với tên */}
                    <strong>Số lượng:</strong> {item.quantity}
                  </div>

                  {/* Lý do/Kinh nghiệm */}
                  {item.reason && (
                    <p className={`text-sm text-gray-500 dark:text-gray-400 mb-4 ml-9 ${item.checked ? 'line-through' : ''}`}> {/* Thêm ml-9 */}
                      {item.reason}
                    </p>
                  )}

                  {/* Nút Gợi ý SP */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-2.5 py-1.5 bg-pink-100 text-pink-700 rounded-md shadow-sm hover:bg-pink-200 dark:bg-pink-900 dark:text-pink-300 dark:hover:bg-pink-800 transition-colors text-xs font-medium whitespace-nowrap ml-9" // Thêm ml-9
                    >
                      Gợi ý SP <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ChecklistPage;