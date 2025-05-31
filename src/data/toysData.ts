import { ToyBrick } from 'lucide-react'; // Icon này có thể dùng ở ToysPage nếu muốn

export interface ToyLink {
  url: string;
  text?: string; // Nếu link có mô tả riêng, ví dụ "Link 1", "Link 2"
}

export interface ToyItem {
  id: string;
  name: string;
  description: string;
  links: ToyLink[];
}

export interface AgeGroupSection {
  id: string;
  title: string;
  introduction?: string;
  toys: ToyItem[];
}

export interface ToysDataSchema {
  pageTitle: string; // Tiêu đề chính của trang (ví dụ: "Đồ Chơi Cho Bé Yêu")
  mainTitle: string; // Tiêu đề nội dung (ví dụ: "Đồ Chơi Cho Bé Từ 0 Đến 3 Tuổi")
  introduction: string;
  ageGroups: AgeGroupSection[];
  tipsTitle: string;
  tips: string[];
}

export const toysData: ToysDataSchema = {
  pageTitle: "Đồ Chơi Cho Bé", // Bạn có thể đổi thành "Đồ Chơi Cho Bé Yêu" hoặc tương tự
  mainTitle: "Đồ Chơi Cho Bé Từ 0 Đến 3 Tuổi",
  introduction: "Mình xin chia sẻ với các mẹ list đồ chơi phù hợp cho bé. Những món này mình đã tìm hiểu kỹ, giúp con vừa chơi vừa phát triển theo từng giai đoạn, có nhiều món chính bé nhà mình đã chơi và cũng như những món mình tìm hiểu thêm và mình thấy rất hiệu quả cho các mẹ tham khảo. Mẹ nào đang băn khoăn không biết mua gì cho con thì lưu ngay nhé!",
  ageGroups: [
    {
      id: "0-6months",
      title: "Giai đoạn 0 - 6 tháng: Khám phá giác quan",
      introduction: "Ở giai đoạn này, bé chủ yếu làm quen với âm thanh, màu sắc và cảm giác chạm.",
      toys: [
        {
          id: "06_treonoi",
          name: "Đồ chơi treo nôi/treo xe đẩy có nhạc",
          description: "Màu sắc tươi sáng, chuyển động nhẹ và âm thanh dịu. Lắp vào nôi cũi hoặc xe đẩy dễ dàng, cho bé nhìn hoặc tháo ra cho bé cầm chơi cũm được luôn.\nKích thích thị giác, thính giác. Sách này vừa có âm thanh vừa có hình con vật (màu sắc và trắng đen).",
          links: [
            { url: "https://s.shopee.vn/8Uwl2POUY1", text: "Treo nôi/xe đẩy" },
            { url: "https://s.shopee.vn/5KzjG7Kpdw", text: "Sách âm thanh/hình ảnh" }
          ]
        },
        {
          id: "06_luclac",
          name: "Lục lạc cầm tay nhỏ gọn",
          description: "Có hộp đựng sạch sẽ, vệ sinh bằng nước sôi ở nhiệt độ cao được luôn. Giúp bé làm quen với việc nắm, cầm, lắc tay.",
          links: [{ url: "https://s.shopee.vn/9ACRqhzDiZ" }]
        },
        {
          id: "06_goiom",
          name: "Gối ôm hoặc thú bông mềm",
          description: "Bông mềm dễ ôm, hình con vật cho bé thích thú, cho bé cảm giác an toàn, làm bạn khi ngủ.",
          links: [{ url: "https://s.shopee.vn/7ARNTu63bJ" }]
        },
        {
          id: "06_thamchoi",
          name: "Thảm chơi đa năng",
          description: "Có tiếng kêu và các chi tiết sờ nắm để bé nằm chơi, có lót nằm tiện tháo lắp mang đi mọi nơi.",
          links: [{ url: "https://s.shopee.vn/7ph4HPxHNN" }]
        }
      ]
    },
    {
      id: "6-12months",
      title: "Giai đoạn 6 - 12 tháng: Tập ngồi, tập bò, phát triển vận động",
      introduction: "", // Không có intro riêng cho mục này
      toys: [
        {
          id: "612_xetapdi",
          name: "Xe tập đi có đồ chơi phía trước",
          description: "Bé tập đứng, đẩy và khám phá xung quanh.",
          links: [
            { url: "https://s.shopee.vn/3qAvXhblyL", text: "Xe tập đi (loại 1)" },
            { url: "https://s.shopee.vn/AKOPHlwnrf", text: "Xe tập đi (loại 2)" }
          ]
        },
        {
          id: "612_bongmem",
          name: "Bóng mềm hoặc bóng gai cầm tay",
          description: "Dễ cầm nắm, lăn đẩy, phát triển kỹ năng vận động thô. Kèm thêm bể gấp gọn vừa làm quây bóng bé chơi vừa làm bể bơi để tắm.",
          links: [
            { url: "https://s.shopee.vn/7ph4JMJGmz", text: "Bóng mềm/gai" },
            { url: "https://s.shopee.vn/8KdKuOfDCl", text: "Bể gấp gọn" }
          ]
        },
        {
          id: "612_sachvai",
          name: "Sách vải, sách nhựa có âm thanh",
          description: "Kích thích trí tò mò và thói quen đọc sách sớm.",
          links: [{ url: "https://s.shopee.vn/9pS8u3tNsQ" }]
        },
        {
          id: "612_thavong",
          name: "Đồ chơi thả vòng",
          description: "Giúp bé rèn luyện kỹ năng tay, sự phối hợp tay - mắt.",
          links: [{ url: "https://s.shopee.vn/1g6RBbbH9N" }]
        }
      ]
    },
    {
      id: "1-2years",
      title: "Giai đoạn 1 - 2 tuổi: Học nói, học làm theo",
      introduction: "",
      toys: [
        {
          id: "12y_xephinh",
          name: "Bộ đồ chơi xếp hình đơn giản",
          description: "Lego to, gạch nhựa, giúp bé phát triển tư duy logic và sáng tạo.",
          links: [{ url: "https://s.shopee.vn/7ph4XMyQNf" }]
        },
        {
          id: "12y_nauan",
          name: "Đồ chơi nấu ăn mini hoặc dụng cụ bác sĩ",
          description: "Bé bắt đầu chơi nhập vai, phát triển ngôn ngữ và kỹ năng xã hội.",
          links: [{ url: "https://s.shopee.vn/50MtAKLG2k" }]
        },
        {
          id: "12y_bangve",
          name: "Bảng vẽ từ tính hoặc bảng viết nước",
          description: "Bé tập vẽ, nhận biết hình, màu sắc và làm quen với chữ viết.",
          links: [{ url: "https://s.shopee.vn/800Ujylmfs" }]
        },
        {
          id: "12y_xechoi",
          name: "Xe chòi chân hoặc ngựa bập bênh",
          description: "Hỗ trợ vận động, tạo cảm giác thăng bằng.",
          links: [{ url: "https://s.shopee.vn/3LEfBZU27h" }]
        }
      ]
    },
    {
      id: "2-3years",
      title: "Giai đoạn 2 - 3 tuổi: Tư duy, tưởng tượng phát triển mạnh",
      introduction: "",
      toys: [
        {
          id: "23y_nhaccu",
          name: "Nhạc cụ mini (trống, đàn,…)",
          description: "Kích thích âm nhạc, tiết tấu và khả năng cảm thụ nghệ thuật.",
          links: [{ url: "https://s.shopee.vn/9UpIXC41tg" }]
        },
        {
          id: "23y_puzzle",
          name: "Tranh ghép hình đơn giản (puzzle)",
          description: "Hỗ trợ nhận diện hình dạng, tư duy logic.",
          links: [{ url: "https://s.shopee.vn/40ULzMV5rN" }]
        },
        {
          id: "23y_xephinhnc",
          name: "Bộ xếp hình nâng cao",
          description: "Tập xây dựng, tạo hình sáng tạo hơn.",
          links: [{ url: "https://s.shopee.vn/2B2hoh2MAY" }]
        }
      ]
    }
  ],
  tipsTitle: "Mẹo nhỏ khi chọn đồ chơi cho bé:",
  tips: [
    "Chọn đồ chơi an toàn, không có chi tiết nhỏ dễ nuốt.",
    "Ưu tiên đồ chơi từ chất liệu gỗ, vải, nhựa an toàn cho trẻ nhỏ.",
    "Không cần quá nhiều, chọn đúng độ tuổi và chất lượng tốt là đủ."
  ]
};