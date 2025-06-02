// src/pages/WeaningPage.tsx
import React, { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { weaningChecklistData, weaningGuideData } from '../data/weaningData';
import ShareButton from '../components/ShareButton';
import { X, ExternalLink, Check, ChevronDown, ChevronUp, Info } from 'lucide-react';
import ShopeeAffiliateLink from '../components/ShopeeAffiliateLink'; // << THÊM IMPORT NÀY

const WeaningPage: React.FC = () => {
  const [checklistData, setChecklistData] = useLocalStorage('weaningChecklist', weaningChecklistData);
  const [visibleSections, setVisibleSections] = useState({
    readiness: true,
    methods: true,
    mealPlans: false,
    avoidFoods: false,
    safety: false
  });

  const toggleSection = (sectionKey: keyof typeof visibleSections) => { // Sửa 'section' thành 'sectionKey' để tránh trùng tên
    setVisibleSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const [progress, setProgress] = useState({
    total: 0,
    checked: 0,
    percentage: 0
  });

  useEffect(() => {
    const allItems = checklistData.sections.flatMap(section => section.items);
    const total = allItems.length;
    const checked = allItems.filter(item => item.checked).length;

    setProgress({
      total,
      checked,
      percentage: total > 0 ? Math.round((checked / total) * 100) : 0
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
    if (percentage === 0) return 'bg-gray-200';
    if (percentage < 33) return 'bg-red-400';
    if (percentage < 66) return 'bg-yellow-400';
    return 'bg-green-400';
  };

  return (
    <div className="bg-pink-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h1 className="page-title">{checklistData.title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            {checklistData.introduction}
          </p>
          <div className="flex justify-center mb-6">
            <ShareButton
              title="Chuẩn Bị Cho Bé Ăn Dặm – Từ A Đến Z"
              text="Hướng dẫn toàn diện về ăn dặm cùng danh sách dụng cụ cần thiết!"
            />
          </div>
        </header>

        {/* When to start weaning section */}
        <section className="mb-10 animate-fade-in">
          <div
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
            onClick={() => toggleSection('readiness')}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-pink-600">
                Khi nào nên bắt đầu ăn dặm?
              </h2>
              {visibleSections.readiness ?
                <ChevronUp className="w-5 h-5 text-pink-600" /> :
                <ChevronDown className="w-5 h-5 text-pink-600" />
              }
            </div>

            {visibleSections.readiness && (
              <div className="mt-4 space-y-3">
                <p className="text-gray-600 mb-3">
                  Bé sẵn sàng ăn dặm khi có các dấu hiệu sau:
                </p>
                <ul className="space-y-2 pl-5">
                  {weaningGuideData.readyForWeaning.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-5 h-5 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Weaning methods section */}
        <section className="mb-10 animate-fade-in">
          <div
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
            onClick={() => toggleSection('methods')}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-pink-600">
                Các phương pháp ăn dặm
              </h2>
              {visibleSections.methods ?
                <ChevronUp className="w-5 h-5 text-pink-600" /> :
                <ChevronDown className="w-5 h-5 text-pink-600" />
              }
            </div>

            {visibleSections.methods && (
              <div className="mt-4 space-y-6">
                {weaningGuideData.weaningMethods.map((method, index) => (
                  <div key={index} className="border-b border-gray-200 pb-5 last:border-0 last:pb-0">
                    <h3 className="text-lg font-medium text-pink-600 mb-2">
                      {method.name}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {method.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-green-600 mb-1">
                          Ưu điểm
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          {method.pros.map((pro, idx) => (
                            <li key={idx}>{pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-red-600 mb-1">
                          Nhược điểm
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          {method.cons.map((con, idx) => (
                            <li key={idx}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Progress bars for checklist */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fade-in">
          <h2 className="text-xl font-semibold text-pink-600 mb-4">Tiến độ chuẩn bị dụng cụ</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Tổng thể</span>
                <span className="text-sm font-medium text-gray-700">
                  {progress.checked}/{progress.total} ({progress.percentage}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ${getStatusColor(progress.percentage)}`}
                  style={{ width: `${progress.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-right">
            <button
              onClick={resetChecklist}
              className="inline-flex items-center px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 mr-1" /> Đặt lại danh sách
            </button>
          </div>
        </div>

        {/* === CHECKLIST SECTIONS (Dụng cụ ăn dặm) === */}
        {checklistData.sections.map((section) => (
          <section key={section.id} className="mb-10 animate-slide-in">
            <h2 className="section-title bg-white p-4 rounded-t-lg shadow-sm">
              {section.title} {/* Ví dụ: "DỤNG CỤ ĂN DẶM CẦN CHUẨN BỊ" */}
            </h2>

            {/* Giao diện Bảng (Desktop) */}
            <div className="bg-white rounded-b-lg shadow-md overflow-hidden hidden md:block">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="w-12 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dụng cụ</th>
                      <th scope="col" className="w-24 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mô tả/Ghi chú</th>
                      <th scope="col" className="w-20 px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Đã có</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {section.items.map((item, index) => (
                      <tr key={item.id} className={`${item.checked ? 'bg-green-50' : 'hover:bg-gray-50'} transition-colors`}>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                        <td className="px-4 py-4 text-sm text-gray-900"><span className={item.checked ? 'line-through text-gray-500' : ''}>{item.name}</span></td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                        <td className="px-4 py-4 text-sm text-gray-500">
                            <div className="flex items-center justify-between">
                            <span className={`${item.checked ? 'line-through' : ''} flex-1 pr-2`}>{item.reason}</span>
                            {item.link && (
                              // << THAY THẾ Ở ĐÂY CHO DESKTOP VIEW (WEANING CHECKLIST) >>
                              <ShopeeAffiliateLink
                                shopeeUrl={item.link}
                                itemName={item.name}
                                className="inline-flex items-center px-2.5 py-1.5 bg-pink-100 text-pink-700 rounded-md shadow-sm hover:bg-pink-200 transition-colors text-xs font-medium whitespace-nowrap"
                              >
                                Gợi ý SP <ExternalLink className="w-3.5 h-3.5 ml-1" />
                              </ShopeeAffiliateLink>
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

            {/* Giao diện Thẻ (Mobile) */}
            <div className="block md:hidden bg-white rounded-b-lg shadow-md p-4 space-y-4">
              {section.items.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-lg shadow border-l-4 ${
                    item.checked
                      ? 'bg-green-50 border-green-400'
                      : 'bg-white border-pink-400'
                  }`}
                  style={{boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)'}}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-start flex-1">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-xs font-semibold text-pink-700 bg-pink-100 rounded-full flex-shrink-0">
                        {index + 1}
                      </span>
                      <h3
                        className={`text-base font-semibold text-gray-900 flex-1 mr-3 ${
                          item.checked ? 'line-through text-gray-500' : ''
                        }`}
                      >
                        {item.name}
                      </h3>
                    </div>
                    <label className="relative inline-flex items-center justify-center cursor-pointer flex-shrink-0">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={item.checked}
                        onChange={() => handleToggleCheck(section.id, item.id)}
                      />
                      <div className={`w-6 h-6 border-2 rounded-md flex items-center justify-center transition-colors
                        ${item.checked
                          ? 'bg-pink-500 border-pink-500'
                          : 'bg-white border-gray-300'
                        }`}>
                        {item.checked && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </label>
                  </div>
                  <div className="text-sm text-gray-600 mb-3 ml-9">
                    <strong>Số lượng:</strong> {item.quantity}
                  </div>
                  {item.reason && (
                    <p className={`text-sm text-gray-500 mb-4 ml-9 ${item.checked ? 'line-through' : ''}`}>
                      {item.reason}
                    </p>
                  )}
                  {item.link && (
                    // << THAY THẾ Ở ĐÂY CHO MOBILE VIEW (WEANING CHECKLIST) >>
                    <ShopeeAffiliateLink
                      shopeeUrl={item.link}
                      itemName={item.name}
                      className="inline-flex items-center px-2.5 py-1.5 bg-pink-100 text-pink-700 rounded-md shadow-sm hover:bg-pink-200 transition-colors text-xs font-medium whitespace-nowrap ml-9"
                    >
                      Gợi ý SP <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </ShopeeAffiliateLink>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
        
        {/* Các phần hướng dẫn khác (Meal plans, Avoid foods, Safety tips) giữ nguyên vì không có link affiliate trực tiếp trong cấu trúc dữ liệu hiện tại */}
        <section className="mb-10 animate-fade-in">
          <div
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
            onClick={() => toggleSection('mealPlans')}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-pink-600">
                Thực đơn theo độ tuổi
              </h2>
              {visibleSections.mealPlans ?
                <ChevronUp className="w-5 h-5 text-pink-600" /> :
                <ChevronDown className="w-5 h-5 text-pink-600" />
              }
            </div>
            {visibleSections.mealPlans && (
              <div className="mt-6 space-y-8">
                {weaningGuideData.mealPlansByAge.map((agePlan, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-lg font-medium text-pink-600 mb-3 inline-flex items-center">
                      <span className="bg-pink-100 text-pink-800 text-sm py-1 px-2 rounded-md mr-2">
                        {agePlan.age}
                      </span>
                      {index === 0 && (
                        <span className="bg-green-100 text-green-800 text-xs py-0.5 px-2 rounded-md ml-2">
                          Bắt đầu
                        </span>
                      )}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-pink-50 p-3 rounded-md">
                        <p className="text-sm font-medium text-pink-700 mb-1">Tần suất</p>
                        <p className="text-sm text-gray-700">{agePlan.frequency}</p>
                      </div>
                      <div className="bg-pink-50 p-3 rounded-md">
                        <p className="text-sm font-medium text-pink-700 mb-1">Kết cấu</p>
                        <p className="text-sm text-gray-700">{agePlan.consistency}</p>
                      </div>
                      <div className="bg-pink-50 p-3 rounded-md">
                        <p className="text-sm font-medium text-pink-700 mb-1">Khẩu phần</p>
                        <p className="text-sm text-gray-700">{agePlan.portions}</p>
                      </div>
                    </div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <Info className="w-4 h-4 mr-1 text-pink-500" /> Thực phẩm gợi ý
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {agePlan.foods.map((food, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-5 h-5 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">•</span>
                          <span className="text-sm text-gray-700">{food}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="mb-10 animate-fade-in">
          <div
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
            onClick={() => toggleSection('avoidFoods')}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-pink-600">
                Thực phẩm cần tránh
              </h2>
              {visibleSections.avoidFoods ?
                <ChevronUp className="w-5 h-5 text-pink-600" /> :
                <ChevronDown className="w-5 h-5 text-pink-600" />
              }
            </div>
            {visibleSections.avoidFoods && (
              <div className="mt-4">
                <div className="bg-red-50 p-4 rounded-md mb-4">
                  <p className="text-sm text-red-800 font-medium">
                    Lưu ý: Cần đặc biệt chú ý tránh những thực phẩm sau để đảm bảo an toàn cho bé.
                  </p>
                </div>
                <ul className="space-y-2">
                  {weaningGuideData.avoidFoods.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✕</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        <section className="mb-10 animate-fade-in">
          <div
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
            onClick={() => toggleSection('safety')}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-pink-600">
                Lưu ý về an toàn và vệ sinh
              </h2>
              {visibleSections.safety ?
                <ChevronUp className="w-5 h-5 text-pink-600" /> :
                <ChevronDown className="w-5 h-5 text-pink-600" />
              }
            </div>
            {visibleSections.safety && (
              <div className="mt-4">
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <p className="text-sm text-blue-800 font-medium">
                    Những điều cần nhớ để đảm bảo an toàn khi cho bé ăn dặm.
                  </p>
                </div>
                <ul className="space-y-2">
                  {weaningGuideData.safetyTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WeaningPage;