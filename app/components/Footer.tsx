import { PhoneOutlined, MailOutlined, EnvironmentOutlined, FacebookOutlined, LinkedinOutlined, PinterestOutlined, InstagramOutlined, SendOutlined } from "@ant-design/icons";
import ChatWidget from "../floatingbtn/ChatWidget";

export default function Footer() {
  return (
    <footer className="container-fluid bg-black text-white py-24 px-67 relative">
        {/* Contact Information */}
        <div className="absolute top-[-95px] left-1/2 transform -translate-x-1/2 w-[70%] bg-gray-100 p-12 rounded-4xl shadow-lg flex justify-between gap-4">
          <div className="flex items-center justify-between bg-white p-5 rounded-lg border border-gray-300 w-full">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-lg icon-container-custom">
                <PhoneOutlined className="text-blue-500 text-xl" />
              </div>
              <div>
                <p className="font-bold text-black">0916021984</p>
                <p className="text-sm text-gray-600">Gọi cho chúng tôi</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white p-5 rounded-lg border border-gray-300 w-full">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-lg icon-container-custom">
                <MailOutlined className="text-blue-500 text-xl" />
              </div>
              <div>
                <p className="font-bold text-black">diamondvietnam.vn@gmail.com</p>
                <p className="text-sm text-gray-600">Nhắn cho chúng tôi</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white p-5 rounded-lg border border-gray-300 w-full">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-lg icon-container-custom">
                <EnvironmentOutlined className="text-blue-500 text-xl" />
              </div>
              <div>
                <p className="font-bold text-black">407 nhà A, Hacinco, Nhân chính</p>
                <p className="text-sm text-gray-600">Quận Thanh xuân, Thành phố Hà Nội</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid flex justify-between mt-20">
          {/* Company Info */}
          <div className="w-1/3 mx-4">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Diamond Co.</h3>
            <p className="text-sm text-gray-400 mb-6">
              Văn hóa và nguồn nhân lực chính là điểm mấu chốt của sự phát triển và thành công của DIAMOND SOFTWARE. Công ty DIAMOND SOFTWARE đánh giá cao tính trung thực, sáng tạo và tinh thần tương trợ, tôn trọng đồng nghiệp cũng như khách hàng.
            </p>
            <div className="flex gap-4">
              <a href="#" className="icon-container">
                <FacebookOutlined />
              </a>
              <a href="#" className="icon-container">
                <LinkedinOutlined />
              </a>
              <a href="#" className="icon-container">
                <PinterestOutlined />
              </a>
              <a href="#" className="icon-container">
                <InstagramOutlined />
              </a>
            </div>
          </div>
          {/* About Us */}
          <div className="w-1/6 mx-4">
            <h3 className="text-xl font-bold mb-4">Về chúng tôi</h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-2 hover:text-white">
                <a href="/AboutUsPage">Về chúng tôi</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Cơ cấu - Tổ chức</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Tầm nhìn - Chiến lược</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Thế mạnh và sự khác biệt</a>
              </li>
            </ul>
          </div>
          {/* Quick Access */}
          <div className="w-1/6 mx-4">
            <h3 className="text-xl font-bold mb-4">Truy cập nhanh</h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-2 hover:text-white">
                <a href="#about">Tin hoạt động</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#news">Tin công nghệ</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#careers">Tuyển dụng</a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="w-1/3 mx-4">
            <h3 className="text-xl font-bold mb-4">Đăng ký tư vấn</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full p-4 rounded-l-lg bg-gray-800 text-gray-400 focus:outline-none"
              />
              <button className="bg-blue-500 p-4 rounded-r-lg hover:bg-blue-600 flex items-center justify-center">
                <SendOutlined className="text-white" />
              </button>
            </div>
          </div>
        </div>
      <ChatWidget />
      </footer>
  );
}
