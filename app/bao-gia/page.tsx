import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="bg-gray-100 py-8 md:py-20 px-2 sm:px-6 md:px-12 lg:px-36">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
            BÁO GIÁ SẢN PHẨM – DỊCH VỤ
          </h1>
          <p className="text-gray-700 mb-6 text-sm md:text-base">
            Giá cả cạnh tranh – Hỗ trợ 24/7 qua Chat, Tổng đài <br />
            Giải pháp đáp ứng tiện ích và tùy biến riêng theo đơn vị <br />
            Cam kết: An toàn – Bảo mật – Ổn định
          </p>
          <button className="bg-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow hover:bg-blue-600 transition text-sm md:text-base">
            ĐĂNG KÝ TƯ VẤN
          </button>
        </div>
        <div className="mt-8 md:mt-12">
          <h2 className="text-lg md:text-xl font-semibold text-center text-blue-600 mb-4">
            BẢNG GIÁ CÁC SẢN PHẨM CỦA M-INVOICE
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-4 md:mb-6">
            <button className="bg-gray-200 text-gray-700 px-3 md:px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition text-sm md:text-base">
              Hóa đơn điện tử
            </button>
            <button className="bg-gray-200 text-gray-700 px-3 md:px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition text-sm md:text-base">
              Quản lý rủi ro hóa đơn SMI
            </button>
          </div>
          <p className="text-center text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
            Phí bản quyền – Khởi tạo lần đầu: <strong>600.000 VNĐ</strong>; <br />
            Miễn phí thủ tục đăng ký sử dụng hóa đơn điện tử.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-8 md:mb-12">
            <button className="bg-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow hover:bg-blue-600 transition text-sm md:text-base">
              Tải báo giá
            </button>
            <button className="bg-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow hover:bg-blue-600 transition text-sm md:text-base">
              Xem giới thiệu
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white text-center rounded-lg shadow">
              <div className="p-6 border border-black border-b-0 rounded-t-lg">
                <h3 className="text-lg text-black font-bold mb-2">M200</h3>
                <p className="text-gray-700 mb-4">Gói 200 hóa đơn</p>
              </div>
              <div 
                className="text-blue-600 font-bold text-xl p-6 
                  border border-black rounded-b-lg h-50 
                  flex flex-col justify-center">
                MIỄN PHÍ
              </div>
            </div>
            <div className="bg-white text-center rounded-lg shadow">
              <div className="p-6 border border-black border-b-0 rounded-t-lg">
                <h3 className="text-lg text-black font-bold mb-2">M300</h3>
                <p className="text-gray-700 mb-4">Gói 300 hóa đơn</p>
              </div>
              <div 
                className="text-blue-600 font-bold text-xl p-6 
                  border border-black rounded-b-lg h-50 
                  flex flex-col justify-center">
                <p>300.000</p>
                <p>VNĐ/Gói</p>
              </div>
            </div>
            <div className="bg-white text-center rounded-lg shadow">
              <div className="p-6 border border-black border-b-0 rounded-t-lg">
                <h3 className="text-lg text-black font-bold mb-2">M500</h3>
                <p className="text-gray-700 mb-4">Gói 500 hóa đơn</p>
              </div>
              <div 
                className="text-blue-600 font-bold text-xl p-6 
                  border border-black rounded-b-lg h-50 
                  flex flex-col justify-center">
                <p>420.000</p>
                <p>VNĐ/Gói</p>
              </div>
            </div>
            <div className="bg-white text-center rounded-lg shadow">
              <div className="p-6 border border-black border-b-0 rounded-t-lg">
                <h3 className="text-lg text-black font-bold mb-2">M1000</h3>
                <p className="text-gray-700 mb-4">Gói 1.000 hóa đơn</p>
              </div>
              <div 
                className="text-blue-600 font-bold text-xl p-6 
                  border border-black rounded-b-lg h-50 
                  flex flex-col justify-center">
                <p>670.000</p>
                <p>VNĐ/Gói</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
