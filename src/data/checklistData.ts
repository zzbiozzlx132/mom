import { ChecklistData } from '../types/ChecklistTypes';

// Helper function để làm sạch trường reason, loại bỏ URL khỏi text
const cleanReasonText = (text: string | undefined): string => {
  if (!text) return "";
  const urlRegex = /https?:\/\/[^\s]+/g;
  let cleanedText = text.replace(urlRegex, '');
  cleanedText = cleanedText.replace(/:\s*\.(?=\s*Suit)/g, ':');
  cleanedText = cleanedText.replace(/\s\s+/g, ' ').trim();
  cleanedText = cleanedText.replace(/[\s,:]+$/g, '').trim();
  if (cleanedText && !/[.!?]$/.test(cleanedText) && text !== cleanedText) { // Chỉ thêm dấu chấm nếu text đã bị thay đổi (link đã bị xóa)
    cleanedText += '.';
  }
  return cleanedText;
};


export const motherBabyChecklistData: ChecklistData = {
  title: "LIST TỔNG HỢP SAU SINH CHO MẸ VÀ BÉ",
  introduction: "Sau khi có em bé đầu tiên mình đã có kinh nghiệm tổng hợp lại những đồ dùng cá nhân cần thiết cho mẹ và bé trước khi sinh.",
  sections: [
    {
      id: "mother-items",
      title: "ĐỒ DÙNG CHO MẸ (SAU SINH)",
      items: [
        {
          id: "m1",
          name: "Quần áo sau sinh (mặc thoải mái)",
          quantity: "3–5 bộ",
          reason: cleanReasonText("Mẹ ưu tiên lựa chọn áo có nút tiện cho bé ti nha. https://s.shopee.vn/8pZ28ALI8y"),
          link: "https://s.shopee.vn/8pZ28ALI8y",
          checked: false
        },
        {
          id: "m2",
          name: "Áo ngực cho con bú",
          quantity: "2–3 cái",
          reason: cleanReasonText("Loại này tháo nhanh quá tiện. https://s.shopee.vn/6AYGxeHYSO"),
          link: "https://s.shopee.vn/6AYGxeHYSO",
          checked: false
        },
        {
          id: "m3",
          name: "Băng vệ sinh loại cho mẹ sau sinh",
          quantity: "1–2 gói",
          reason: cleanReasonText("Riêng mình chọn loại này, mềm mỏng vừa đủ xài không quá to. https://s.shopee.vn/8UwBkF0JFZ"),
          link: "https://s.shopee.vn/8UwBkF0JFZ",
          checked: false
        },
        {
          id: "m4",
          name: "Quần lót giấy hoặc loại dùng 1 lần",
          quantity: "5–10 cái",
          reason: cleanReasonText("Mua set này mặc thoải mái tới khi ra viện là vừa. https://s.shopee.vn/7pgUxabRyD"),
          link: "https://s.shopee.vn/7pgUxabRyD",
          checked: false
        },
        {
          id: "m5",
          name: "Gen nịt bụng (nếu cần)",
          quantity: "1 cái",
          reason: cleanReasonText("Mình vẫn đang dùng loại này. https://s.shopee.vn/LaU23T5I"),
          link: "https://s.shopee.vn/LaU23T5I",
          checked: false
        },
        {
          id: "m6",
          name: "Dụng cụ hút sữa (máy điện hoặc tay)",
          quantity: "1 bộ",
          reason: cleanReasonText("Ưu tiên dùng lâu dài mình chọn loại có dây hút sẽ kiệt hơn nha https://s.shopee.vn/707NzVdoBs"),
          link: "https://s.shopee.vn/707NzVdoBs",
          checked: false
        },
        {
          id: "m7",
          name: "Túi trữ sữa",
          quantity: "Tùy nhu cầu",
          reason: cleanReasonText("Túi trữ có 3 khoá giữ kín này https://s.shopee.vn/xdf37Ycv"),
          link: "https://s.shopee.vn/xdf37Ycv",
          checked: false
        },
        {
          id: "m8",
          name: "Kem chống nứt đầu ti",
          quantity: "1 tuýp",
          reason: cleanReasonText("Nhất định phải có chứ không là đau đớn lắm. https://s.shopee.vn/8AJLOET4gG"),
          link: "https://s.shopee.vn/8AJLOET4gG",
          checked: false
        },
        {
          id: "m9",
          name: "Viên chống tắc tia sữa và lợi sữa",
          quantity: "Tuỳ nhu cầu",
          reason: cleanReasonText("Mình dùng https://s.shopee.vn/5pvViSVLXl"),
          link: "https://s.shopee.vn/5pvViSVLXl",
          checked: false
        }
      ]
    },
    {
      id: "baby-items",
      title: "ĐỒ DÙNG CHO BÉ SƠ SINH",
      items: [
        {
          id: "b1",
          name: "Quần áo sơ sinh (ngắn tay , dài tay, body suit…)",
          quantity: "5–10 bộ",
          reason: cleanReasonText("áo ngắn tay : https://s.shopee.vn/4AnCjuYxRy. Suit dài : https://s.shopee.vn/xdmrvshl"),
          link: "https://s.shopee.vn/4AnCjuYxRy",
          checked: false
        },
        {
          id: "b2",
          name: "Bao tay, bao chân, mũ vải",
          quantity: "3–5 bộ",
          reason: cleanReasonText("https://s.shopee.vn/8KcliWdsXh"), // Nếu reason gốc chỉ là link, sau khi clean sẽ là rỗng
          link: "https://s.shopee.vn/8KcliWdsXh",
          checked: false
        },
        {
          id: "b3",
          name: "Khăn sữa",
          quantity: "20–30 cái",
          reason: cleanReasonText("Chọn loại sợi tre mềm mịn dùng lâu giặt khum bị xù lông nhen https://s.shopee.vn/5AfjwrdN0H"),
          link: "https://s.shopee.vn/5AfjwrdN0H",
          checked: false
        },
        {
          id: "b4",
          name: "Khăn tắm",
          quantity: "3 cái",
          reason: cleanReasonText("Mua loại 6 lớp dùng mềm êm lắm https://s.shopee.vn/3qAMNRrNXA"),
          link: "https://s.shopee.vn/3qAMNRrNXA",
          checked: false
        },
        {
          id: "b5",
          name: "Khăn ướt",
          quantity: "1-2 bịch",
          reason: cleanReasonText("Dự phòng khi ra ngoài. Loại này mua nhiều để dùng dần vì rẻ.hihi https://s.shopee.vn/50MJpKckOA"),
          link: "https://s.shopee.vn/50MJpKckOA",
          checked: false
        },
        {
          id: "b6",
          name: "Yếm",
          quantity: "5 cái",
          reason: cleanReasonText("Bé ti bình sẽ cần khi chảy sữa https://s.shopee.vn/4L6iBPDKGK"),
          link: "https://s.shopee.vn/4L6iBPDKGK",
          checked: false
        },
        {
          id: "b7",
          name: "Khăn khô đa năng",
          quantity: "1 bịch",
          reason: cleanReasonText("Khum thể thiếu https://s.shopee.vn/VtuTGSLya"),
          link: "https://s.shopee.vn/VtuTGSLya",
          checked: false
        },
        {
          id: "b8",
          name: "Tã dán sơ sinh",
          quantity: "1–2 bịch",
          reason: cleanReasonText("Mua đủ xài thôi để biết loại nào hợp, với bé nhà mình thì xài loại này https://s.shopee.vn/7AQoLm92UU"),
          link: "https://s.shopee.vn/7AQoLm92UU",
          checked: false
        },
        {
          id: "b9",
          name: "Chăn mỏng, chăn ủ",
          quantity: "2–3 cái",
          reason: cleanReasonText("Vừa làm chăn ủ, vừa làm khăn tắm cũng được luôn.https://s.shopee.vn/LaYzdCWdU , https://s.shopee.vn/2B28Oy9vJF"),
          link: "https://s.shopee.vn/LaYzdCWdU",
          checked: false
        },
        {
          id: "b10",
          name: "Gạc rơ lưỡi, nước muối sinh lý",
          quantity: "Có sẵn",
          reason: cleanReasonText("Gạc mình chọn loại này https://s.shopee.vn/9zkzjSmGvK"),
          link: "https://s.shopee.vn/9zkzjSmGvK",
          checked: false
        },
        {
          id: "b11",
          name: "Tăm bông",
          quantity: "Có sẵn",
          reason: cleanReasonText("Dành cho bé hộp này dùng lâu https://s.shopee.vn/2LLdX1LruM"),
          link: "https://s.shopee.vn/2LLdX1LruM",
          checked: false
        },
        {
          id: "b12",
          name: "Ti giả",
          quantity: "Tuỳ nhu cầu",
          reason: cleanReasonText("Ti này hầu như bé nào cũng hợp tác https://s.shopee.vn/9pReSgnLRA"),
          link: "https://s.shopee.vn/9pReSgnLRA",
          checked: false
        },
        {
          id: "b13",
          name: "Đồ gặm nướu",
          quantity: "Tuỳ nhu cầu",
          reason: cleanReasonText("Tới tầm 3 4 tháng là bé sẽ gặm nhắm mút tay thì mình cho con cái này https://s.shopee.vn/9f8EQNN5nT"),
          link: "https://s.shopee.vn/9f8EQNN5nT",
          checked: false
        },
        {
          id: "b14",
          name: "Sữa tắm",
          quantity: "Có sẵn",
          reason: cleanReasonText("Loại này dịu nhẹ vừa dưỡng ẩm nữa https://s.shopee.vn/xikINiPR"),
          link: "https://s.shopee.vn/xikINiPR",
          checked: false
        },
        {
          id: "b15",
          name: "Dầu tràm hoặc dầu khuynh diệp",
          quantity: "Có sẵn",
          reason: cleanReasonText("tiệm thuốc nào cũng có ☺️"),
          link: undefined,
          checked: false
        },
        {
          id: "b16",
          name: "Dầu thoa muỗi",
          quantity: "Có sẵn",
          reason: cleanReasonText("Hiệu quả lắm nha https://s.shopee.vn/4L6hoq1fm7"),
          link: "https://s.shopee.vn/4L6hoq1fm7",
          checked: false
        },
        {
          id: "b17",
          name: "Kem chống hăm",
          quantity: "1 tuýp",
          reason: cleanReasonText("Này phải có https://s.shopee.vn/9Uonv3CMuo"),
          link: "https://s.shopee.vn/9Uonv3CMuo",
          checked: false
        },
        {
          id: "b18",
          name: "Kem dưỡng ẩm",
          quantity: "1 tuýp",
          reason: cleanReasonText("Bé tắm nước nóng ấm nên da hay bị khô mình dùng loại này https://s.shopee.vn/4AnHZaJRiS"),
          link: "https://s.shopee.vn/4AnHZaJRiS",
          checked: false
        },
        {
          id: "b19",
          name: "Nhiệt kế điện tử",
          quantity: "1 cái",
          reason: cleanReasonText("Theo dõi nhiệt độ khi bé bị sốt https://s.shopee.vn/4L6czHB3ci"),
          link: "https://s.shopee.vn/4L6czHB3ci",
          checked: false
        },
        {
          id: "b20",
          name: "Chậu tắm sơ sinh",
          quantity: "1 cái",
          reason: cleanReasonText("Chậu tắm ếch này xài cho bền https://s.shopee.vn/1g5wdW5HJj"),
          link: "https://s.shopee.vn/1g5wdW5HJj",
          checked: false
        },
        {
          id: "b21",
          name: "Thau lau mặt, vệ sinh cho bé",
          quantity: "2 cái",
          reason: cleanReasonText("Nhỏ gọn lau cho tiện https://s.shopee.vn/1g5wdoOKwa"),
          link: "https://s.shopee.vn/1g5wdoOKwa",
          checked: false
        },
        {
          id: "b22",
          name: "Bấm móng tay cho bé",
          quantity: "1 bộ",
          reason: cleanReasonText("Mình dùng bộ này đầy đủ luôn nè https://s.shopee.vn/7fN4xcsv1E"),
          link: "https://s.shopee.vn/7fN4xcsv1E",
          checked: false
        },
        {
          id: "b23",
          name: "Sữa công thức (phòng khi cần)",
          quantity: "1 hộp",
          reason: cleanReasonText("Bé mình hồi đó dùng dạng thanh này ạ https://s.shopee.vn/40TmbA4LDi"),
          link: "https://s.shopee.vn/40TmbA4LDi",
          checked: false
        },
        {
          id: "b24",
          name: "D3k2",
          quantity: "1 lọ",
          reason: cleanReasonText("Mình bổ sung cho bé loại này https://s.shopee.vn/3fr17rOHgf"),
          link: "https://s.shopee.vn/3fr17rOHgf",
          checked: false
        },
        {
          id: "b25",
          name: "Men vi sinh",
          quantity: "1 lọ",
          reason: cleanReasonText("Biếng ăn hay bé có vấn đề về tiêu hoá thì cho bé dùng https://s.shopee.vn/VtzM0J8Us"),
          link: "https://s.shopee.vn/VtzM0J8Us",
          checked: false
        },
        {
          id: "b26",
          name: "Bình sữa",
          quantity: "Tùy nhu cầu",
          reason: cleanReasonText("Nhu cầu của mỗi bé tìm đến khi nào bé hợp thì thôi. Nên các mom tự tìm hiểu nha"),
          link: undefined,
          checked: false
        },
        {
          id: "b27",
          name: "Dụng cụ rửa bình sữa",
          quantity: "Có sẵn",
          reason: cleanReasonText("Cọ mềm 2 đầu, vừa tiện mà rửa sạch kỹ https://s.shopee.vn/3LEAzRNayK"),
          link: "https://s.shopee.vn/3LEAzRNayK",
          checked: false
        },
        {
          id: "b28",
          name: "Nước rửa bình sữa",
          quantity: "Có sẵn",
          reason: cleanReasonText("Nước rửa chuyên dụng thì sẽ an toàn cho bé hơn https://s.shopee.vn/10qGCxuMsn"),
          link: "https://s.shopee.vn/10qGCxuMsn",
          checked: false
        },
        {
          id: "b29",
          name: "Máy tiệt trùng",
          quantity: "Tuỳ nhu cầu",
          reason: cleanReasonText("Tiệt trùng sấy khô sẽ yên tâm hơn, loại này rẻ https://s.shopee.vn/6fUXn9SRiT"),
          link: "https://s.shopee.vn/6fUXn9SRiT",
          checked: false
        },
        {
          id: "b30",
          name: "Máy hâm sữa",
          quantity: "Tuỳ nhu cầu",
          reason: cleanReasonText("Mom nào sữa mẹ nhiều trữ đông thì mua máy này về hâm sữa nhanh nè https://s.shopee.vn/2fyP1WbY2F"),
          link: "https://s.shopee.vn/2fyP1WbY2F",
          checked: false
        },
        {
          id: "b31",
          name: "Bình đun nước",
          quantity: "Tuỳ nhu cầu",
          reason: cleanReasonText("Chỉnh nhiệt độ theo nhu cầu pha sữa cho bé tiện lắm https://s.shopee.vn/60Er0vwbA2"),
          link: "https://s.shopee.vn/60Er0vwbA2",
          checked: false
        },
        {
          id: "b32",
          name: "Xịt diệt khuẩn khử mùi",
          quantity: "1 chai",
          reason: cleanReasonText("Dùng khi ra ngoài https://s.shopee.vn/5pvQnlS7Ws"),
          link: "https://s.shopee.vn/5pvQnlS7Ws",
          checked: false
        },
        {
          id: "b33",
          name: "Giường cũi hoặc nôi",
          quantity: "Tuỳ nhu cầu",
          reason: cleanReasonText("Hãng này thì khỏi phải bàn. Dùng cho bé tới 12 tuổi luôn ý https://s.shopee.vn/4VQ3DZMXWZ"),
          link: "https://s.shopee.vn/4VQ3DZMXWZ",
          checked: false
        },
        {
          id: "b34",
          name: "Xe đẩy",
          quantity: "1 cái",
          reason: cleanReasonText("Mình thấy loại này okela https://s.shopee.vn/1B9bFkIp8O"),
          link: "https://s.shopee.vn/1B9bFkIp8O",
          checked: false
        },
        {
          id: "b35",
          name: "Địu em bé",
          quantity: "1 cái",
          reason: cleanReasonText("Bé mình địu mẫu này https://s.shopee.vn/707OCZ7ONM"),
          link: "https://s.shopee.vn/707OCZ7ONM",
          checked: false
        },
        {
          id: "b36",
          name: "Gối chống trào",
          quantity: "Tuỳ nhu cầu",
          reason: cleanReasonText("Bé hay ọc nằm gối này đỡ lắm nè https://s.shopee.vn/3AukNI3lVV"),
          link: "https://s.shopee.vn/3AukNI3lVV",
          checked: false
        },
        {
          id: "b37",
          name: "Gối chặn",
          quantity: "Tuỳ nhu cầu",
          reason: cleanReasonText("Chặn khi bé ngủ đỡ giật mình https://s.shopee.vn/AUhL6NyoJI"),
          link: "https://s.shopee.vn/AUhL6NyoJI",
          checked: false
        },
        {
          id: "b38",
          name: "Gối chống bẹp đầu",
          quantity: "Tuỳ nhu cầu",
          reason: cleanReasonText("https://s.shopee.vn/7ph4GwVOdC"), // Sẽ thành rỗng nếu chỉ có link
          link: "https://s.shopee.vn/7ph4GwVOdC",
          checked: false
        }
      ]
    }
  ]
};