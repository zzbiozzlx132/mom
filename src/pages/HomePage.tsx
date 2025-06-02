// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ShareButton from '../components/ShareButton';
import ShopeeAffiliateLink from '../components/ShopeeAffiliateLink'; // << THÊM IMPORT NÀY

const HomePage: React.FC = () => {
  const vitaminLinks = [
    { name: "Vitamin tổng hợp", url: "https://s.shopee.vn/qWpl3pe3o", itemName: "Vitamin tổng hợp (Homepage)" },
    { name: "Sắt", url: "https://s.shopee.vn/9pReTdgUZE", itemName: "Sắt (Homepage)" },
    { name: "Canxi", url: "https://s.shopee.vn/2Vf3kD7GZn", itemName: "Canxi (Homepage)" },
    { name: "DHA", url: "https://s.shopee.vn/8AJQUdxSRk", itemName: "DHA (Homepage)" },
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4 font-heading">
            Hành Trình Làm Mẹ - Khoảnh Khắc Đặc Biệt Nhất Cuộc Đời
          </h1>
          <p className="text-lg text-gray-600">
            Chia sẻ những trải nghiệm và kinh nghiệm từ hành trình làm mẹ của Trang và nuôi dạy bé Gạo
          </p>
          <div className="mt-6">
            <ShareButton
              title="Hành Trình Làm Mẹ Cùng Trang & Gạo"
              text="Khám phá kinh nghiệm và lời khuyên hữu ích cho các mẹ bỉm sữa!"
            />
          </div>
        </header>

        <section className="prose max-w-none mb-12 bg-white p-6 rounded-lg shadow-md animate-fade-in">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Dòng tâm sự về hành trình làm Mẹ
          </h2>

          <p>
            Lần đầu sinh con hay lần hai lần ba đi chăng nữa thì mẹ bầu vẫn nên lưu lại kẻo quên 🤰🤰
          </p>

          <p>
            Làm Mẹ - Hành Trình Đặc Biệt Nhất Cuộc Đời. Mình đã từng mang bầu thì đây là những kinh nghiệm mà mình muốn chia sẻ đến các mẹ bầu lần đầu cũng như các mẹ muốn mang bầu tiếp theo🥰
          </p>

          <p>
            Lần đầu làm mẹ. Mình phát hiện tháng đó mình bị trễ kinh, sáng ngủ dậy mình vội thử que thì hiện lên hai vạch (vạch mờ và vạch đậm) cảm giác vừa run vừa mừng. Nhưng các mẹ đừng vội đi siêu âm luôn và ngay, mà hãy chờ 5-7 ngày sau hãy đến phòng siêu âm gặp bác sĩ nha (do lúc đó mình nghĩ que hiện lên hai vạch mình cũng vội siêu âm sớm nên chưa thấy túi thai).
          </p>

          <h3 className="text-xl font-medium text-pink-600 mt-6">
            Tuần 6: Khám thai lần đầu
          </h3>
          <p>
            Bác sĩ hẹn siêu âm để xác định thai vào tử cung chưa. Nhìn thấy chấm nhỏ tí xíu trên màn hình, nghe tiếng tim thai đập "thình thịch", mình đã rưng nước mắt. Một sinh linh đang lớn lên trong mình – cảm giác ấy kỳ diệu không từ nào diễn tả được.
          </p>

          <h3 className="text-xl font-medium text-pink-600 mt-6">
            Tuần 11-13: Đo độ mờ da gáy
          </h3>
          <p>
            Lần siêu âm quan trọng, siêu âm 4D để kiểm tra nguy cơ dị tật Down. Đo độ mờ da gáy và làm xét nghiệm Double Test hoặc NIPT.
          </p>

          <h3 className="text-xl font-medium text-pink-600 mt-6">
            Tuần 16-18: Nghe tim thai, xét nghiệm sàng lọc
          </h3>
          <p>
            Bác sĩ kiểm tra tim thai đều đặn và làm các xét nghiệm máu. Nhiều mẹ sẽ làm xét nghiệm Tripble Test ở tuần thai này nữa nhưng thật ra không cần thiết vì 12 tuần mình đã làm Double Test rồi (giá trị 2 xét nghiệm như nhau), nếu mẹ nào quên Double thì nên làm thôi nhé.
          </p>

          <h3 className="text-xl font-medium text-pink-600 mt-6">
            Tuần 22: Siêu âm hình thái học
          </h3>
          <p>
            Lần này, siêu âm 4D kiểm tra toàn diện các cơ quan của con (mốc quan trọng nhất). Bác sĩ sẽ đo chiều dài CTC để đánh giá tình trạng sinh non nữa nha các mẹ.
          </p>

          <h3 className="text-xl font-medium text-pink-600 mt-6">
            Tuần 26: Kiểm tra đường huyết
          </h3>
          <p>
            Siêu âm để kiểm tra tình hình sức khoẻ của con, bác sĩ sẽ hướng dẫn mẹ làm nghiệm pháp đường huyết thai kì (nỗi ám ảnh với ly nước ngọt gắt đối với mình) và tư vấn mẹ đi tiêm uốn ván mũi 1 nè.
          </p>

          <h3 className="text-xl font-medium text-pink-600 mt-6">
            Tuần 30: Siêu âm 4D, kiểm tra tăng trưởng
          </h3>
          <p>
            Xem tình trạng ối và cân nặng của em bé phát triển như thế nào, và tiêm uốn ván mũi 2 luôn nhé các mẹ.
          </p>

          <h3 className="text-xl font-medium text-pink-600 mt-6">
            Tuần 32-35: Siêu âm 4D, đánh giá ối
          </h3>
          <p>
            Siêu âm 4D hình thái để đánh giá em bé trước sinh chính xác nhất và đánh giá ối của em bé và độ canxi hoá bánh rau.
          </p>

          <h3 className="text-xl font-medium text-pink-600 mt-6">
            Tuần 36-40: Khám mỗi tuần, sẵn sàng cho ngày sinh
          </h3>
          <p>
            Siêu âm theo lịch hẹn và chỉ định theo dõi của bác sĩ là ổn, không cần siêu âm quá nhiều các mẹ nhé.
          </p>

          <p className="mt-6">
            Cứ mỗi tuần là một lần hồi hộp. Từng cơn gò nhẹ. Rồi đến lúc thật sự… mình vào viện, con cất tiếng khóc đầu tiên. Mình hạnh phúc đến nhường nào… Lần đầu làm mẹ là một hành trình không thể nào quên – từ những lần khám thai hồi hộp đến phút giây thiêng liêng khi con ra đời.
          </p>

          <h3 className="text-xl font-semibold text-pink-600 mt-8">
            Những Vấn Đề Cần Lưu Ý
          </h3>
          <ul className="space-y-2 mt-4">
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</span>
              <span>Các mẹ bầu nên bổ sung các loại vitamin tổng hợp chứa nhiều acid folic khi thai dưới 12 tuần, trên 12 tuần các mẹ dùng thêm sắt và canxi theo chỉ định.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</span>
              <span>Tránh qhtd trong 3 tháng đầu.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</span>
              <span>Dinh dưỡng cho mẹ bầu:</span>
            </li>
          </ul>

          <ul className="space-y-2 mt-2 ml-8">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">^</span>
              <span>3 tháng đầu hạn chế ăn dứa và rau ngót, nước dừa. Ăn chín uống sôi là được.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">^</span>
              <span>Nên uống nước cam hàng ngày vì nước cam nhiều vitamin C tăng đề kháng tốt lắm các mẹ ạ.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">^</span>
              <span>Sữa bầu uống cũng được, hoặc có thể thay thế bằng sữa tươi không đường nhé các mẹ.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">^</span>
              <span>Hạn chế ăn đồ ngọt, rượu bia, nước ngọt có gas.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">^</span>
              <span>Nên uống nhiều nước (tối đa 2 lít/ngày).</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">^</span>
              <span>Ăn nhiều rau thịt và trái cây, cơm không cần ăn nhiều đâu, như mình ngày 1 chén là đủ :)))</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">^</span>
              <span>Những tuần từ 37 trở đi các mẹ có thể đi bộ tầm 15-30 phút để giúp dễ sinh hơn.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">^</span>
              <span>Tư thế nằm ngủ thì các mẹ nằm tư thế nào mẹ thoải mái là được. Đau lưng quá thì sử dụng gối kê bụng cho mẹ bầu giúp giảm đau lưng hơn nha.</span>
            </li>
          </ul>

          <h4 className="font-medium text-pink-600 mt-6 mb-3">
            Vitamin cho mẹ bầu (Nhấn vào để xem gợi ý):
          </h4>
          <ul className="space-y-3 mt-2 list-none p-0">
            {vitaminLinks.map((vitamin, index) => (
              <li key={index}>
                {/* << THAY THẾ Ở ĐÂY CHO CÁC LINK VITAMIN >> */}
                <ShopeeAffiliateLink
                  shopeeUrl={vitamin.url}
                  itemName={vitamin.itemName} // itemName đã bao gồm "(Homepage)" để phân biệt
                  className="inline-flex items-center justify-between w-full px-4 py-3 bg-pink-100 text-pink-700 rounded-lg shadow-sm hover:bg-pink-200 transition-all group"
                >
                  <span>{vitamin.name}</span>
                  <ChevronRight className="h-5 w-5 text-pink-500 group-hover:text-pink-600" />
                </ShopeeAffiliateLink>
              </li>
            ))}
          </ul>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Link to="/checklist" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slide-in">
              <h2 className="text-xl font-semibold text-pink-600 mb-3 group-hover:text-pink-700 transition-colors">
                Danh Sách Sau Sinh Cho Mẹ Và Bé
              </h2>
              <p className="text-gray-600 mb-4">
                Tổng hợp những đồ dùng cần thiết cho mẹ và bé sau sinh, giúp bạn chuẩn bị đầy đủ nhất.
              </p>
              <div className="flex items-center text-pink-600 font-medium group-hover:text-pink-700 transition-colors">
                Xem chi tiết <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          </Link>

          <Link to="/weaning" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slide-in">
              <h2 className="text-xl font-semibold text-pink-600 mb-3 group-hover:text-pink-700 transition-colors">
                Chuẩn Bị Cho Bé Ăn Dặm
              </h2>
              <p className="text-gray-600 mb-4">
                Hướng dẫn chi tiết từ A-Z về việc chuẩn bị cho bé ăn dặm, các dụng cụ cần thiết và thực đơn gợi ý.
              </p>
              <div className="flex items-center text-pink-600 font-medium group-hover:text-pink-700 transition-colors">
                Xem chi tiết <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;