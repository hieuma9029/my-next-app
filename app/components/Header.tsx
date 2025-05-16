import Image from "next/image";

export default function Header() {
  return (
    <header className="container-fluid h-20 px-24 py-12 bg-gray-100 flex items-center shadow-md sticky top-0 z-50">
        <nav className="flex items-center flex-grow">
          <a href="/" className="logo-container flex items-center">
            <Image src="/images/logo/companyLogo.png" alt="Logo" width={600} height={80} />
          </a>
          <nav className="flex gap-6 flex-grow justify-center items-center">
            {/* Navigation Links */}
            <div className="relative group">
              <a href="#about" className="text-black hover:text-blue-500">
                Giới thiệu
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-56">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/ve-chung-toi">Về chúng tôi</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#structure">Cơ cấu - Tổ chức</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#vision">Tầm nhìn - Chiến lược</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#strengths">Thế mạnh và sự khác biệt</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative group">
              <a href="#news" className="text-black hover:text-blue-500">
                Tin tức
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-56">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#activity-news">Tin hoạt động</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#tech-news">Tin công nghệ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative group">
              <a href="#products" className="text-black hover:text-blue-500">
                Sản phẩm
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-64">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#internal">Nội vụ</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#labor">Lao động & TBXH</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#education">Giáo dục và Đào Tạo</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#finance">Tài chính</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#inspection">Thanh tra</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#office">Văn phòng ủy ban nhân dân huyện</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#union">Tổng liên đoàn lao động/ Liên đoàn lao động tỉnh</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#museum">Bảo tàng</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#justice">Tư pháp</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#ethnic">Ban dân tộc</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#software">Phần mềm quản lý cơ sở dữ liệu thừa phát lại</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative group">
              <a href="#services" className="text-black hover:text-blue-500">
                Dịch vụ
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-64">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#digital-consulting">Tư vấn chuyển đổi số</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#software-maintenance">Dịch vụ bảo trì phần mềm ứng dụng</a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#careers" className="text-black hover:text-blue-500">
              Tuyển dụng
            </a>
            <a href="#contact" className="text-black hover:text-blue-500">
              Liên hệ
            </a>
          </nav>
        </nav>
      </header>
  );
}
