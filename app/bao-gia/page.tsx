import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="bg-gray-100 py-42 px-36">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            BÁO GIÁ SẢN PHẨM – DỊCH VỤ
          </h1>
          <p className="text-gray-700 mb-6">
            Giá cả cạnh tranh – Hỗ trợ 24/7 qua Chat, Tổng đài <br />
            Giải pháp đáp ứng tiện ích và tùy biến riêng theo đơn vị <br />
            Cam kết: An toàn – Bảo mật – Ổn định
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
            ĐĂNG KÝ TƯ VẤN
          </button>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">
            BẢNG GIÁ CÁC SẢN PHẨM CỦA M-INVOICE
          </h2>
          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition">
              Hóa đơn điện tử
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition">
              Quản lý rủi ro hóa đơn SMI
            </button>
          </div>
          <p className="text-center text-gray-700 mb-6">
            Phí bản quyền – Khởi tạo lần đầu: <strong>600.000 VNĐ</strong>; <br />
            Miễn phí thủ tục đăng ký sử dụng hóa đơn điện tử.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
              Tải báo giá
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
              Xem giới thiệu
            </button>
          </div>
          <div className="grid grid-cols-4 gap-6">
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
