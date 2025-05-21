export default function CustomerReviews() {
    const reviews = [
    {
      name: "Anh Trần Quang Dũng",
      title: "CTO Công ty phần mềm NovaTech",
      content:
        'Giải pháp AI Development mà đội ngũ cung cấp thực sự vượt mong đợi. Chúng tôi đã tích hợp mô hình AI vào hệ thống chăm sóc khách hàng, giúp tự động hóa 80% khâu trả lời và xử lý yêu cầu. Hiệu quả tăng gấp đôi trong khi tiết kiệm đáng kể chi phí vận hành.',
    },
    {
      name: "Chị Lê Minh Thảo",
      title: "CEO Công ty thương mại điện tử QuickShop",
      content:
        'Website thương mại điện tử của chúng tôi được xây dựng hoàn toàn mới bởi dịch vụ Web Development. Giao diện mượt mà, tối ưu SEO và trải nghiệm người dùng cực kỳ tốt. Nhờ đó, lượng khách truy cập tăng 40% chỉ sau 2 tháng hoạt động.',
    },
    {
      name: "Anh Nguyễn Tuấn Kiệt",
      title: "Founder & CEO Ứng dụng học tập HọcDễ",
      content:
        'Ứng dụng mobile được phát triển đúng tiến độ, tích hợp AI nhận diện giọng nói và gamification theo yêu cầu. Nhờ dịch vụ Mobile App Development, app của chúng tôi đã đạt mốc 100.000 lượt tải chỉ trong vòng 3 tháng. Đội ngũ hỗ trợ rất tận tâm.',
    },
    {
      name: "Anh Vũ Văn Lâm",
      title: "Trưởng phòng Công nghệ Công ty GOBIZ",
      content:
        'AI Development không chỉ giúp phân tích dữ liệu nhanh chóng mà còn đưa ra dự đoán hành vi khách hàng với độ chính xác cao. Nhóm kỹ thuật đã hỗ trợ tối ưu hóa toàn bộ pipeline xử lý dữ liệu của chúng tôi một cách chuyên nghiệp.',
    },
    {
      name: "Chị Nguyễn Bích Ngọc",
      title: "Chuyên viên Marketing tại VinaTech",
      content:
        'Chúng tôi sử dụng Web Development để thiết kế landing page cho chiến dịch quảng bá sản phẩm mới. Giao diện responsive, tải nhanh và rất dễ chỉnh sửa khi cần. Nhờ vậy, tỷ lệ chuyển đổi tăng 25% so với trang cũ.',
    },
    {
      name: "Anh Lâm Minh Hải",
      title: "Chủ dự án App Sức khoẻ FitLife",
      content:
        'Nhóm Mobile App Development đã giúp tôi hiện thực hóa ý tưởng một ứng dụng chăm sóc sức khỏe cá nhân hóa. App hoạt động ổn định, dễ dùng và được người dùng đánh giá cao trên cả iOS và Android.',
    },
  ];

  return (
    <div className="flex flex-col items-center pt-36 px-2 md:px-6 lg:px-12">
      <h2 className="text-1xl font-bold mb-4 text-green-400">Khách hàng nói gì về chúng tôi</h2>
      <h2 className="text-4xl font-bold mb-12 text-black">Nhận xét và đánh giá của khách hàng</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="flex flex-col p-8 rounded-lg min-h-[260px] relative"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-black mb-1">{review.name}</h3>
                <div className="text-blue-700 font-semibold">{review.title}</div>
              </div>
            </div>
            <div className="text-black text-base">{review.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
