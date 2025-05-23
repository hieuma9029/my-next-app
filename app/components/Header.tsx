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
              <a href="#about" className="text-black hover:text-blue-500 pb-3">
                Giới thiệu
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-56">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/ve-chung-toi">Về chúng tôi</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/co-cau-co-quan-to-chuc">Cơ cấu - Tổ chức</a>
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
              <a href="#news" className="text-black hover:text-blue-500 pb-3">
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
              <a href="#products" className="text-black hover:text-blue-500 pb-3">
                Sản phẩm
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-64">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#internal">CRM (Hệ thống tương tác khách hàng đa kênh)</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#labor">Hệ thống ERP (Quản trị tổng thể nguồn lực doanh nghiệp</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#education">Phần mềm kế toán (TT88, TT133, TT200)</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#finance">Hệ thống HRM</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#inspection">Hệ thống quản lý ký túc xá</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#internal">Hoá đơn điện tử</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#labor">Quản lý rủi ro hoá đơn mSMI</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/bao-gia">Báo giá</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#education">Bảo hiểm xã hội điện tử</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#finance">Hợp đồng điện tử</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative group">
              <a href="#services" className="text-black hover:text-blue-500 pb-3">
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
            <a href="#register" className="text-black hover:text-blue-500">
              Đăng ký sử dụng
            </a>
          </nav>
        </nav>
      </header>
  );
}
