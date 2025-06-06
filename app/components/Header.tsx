"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="container-fluid h-20 px-4 sm:px-8 md:px-16 py-4 sm:py-8 bg-gray-100 flex items-center shadow-md sticky top-0 z-50">
      <nav className="flex items-center flex-grow flex-wrap w-full">
        <a href="/" className="logo-container flex items-center flex-shrink-0 mr-4">
          <Image
            src="/images/logo/companyLogo.png"
            alt="Logo"
            width={180}
            height={40}
            className="w-32 sm:w-48 md:w-60 h-auto"
          />
        </a>
        {/* Navigation Links */}
        <nav className="hidden md:flex gap-4 lg:gap-6 flex-grow justify-center items-center">
          <div className="relative group">
            <a href="#about" className="text-black hover:text-blue-500 pb-3">
              Giới thiệu
            </a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-56">
              <ul className="text-sm text-gray-700">
                <a href="/ve-chung-toi">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Về chúng tôi
                  </li>
                </a>
                <a href="/co-cau-co-quan-to-chuc">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Cơ cấu - Tổ chức
                  </li>
                </a>
                <a href="/tam-nhin-chien-luoc">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Tầm nhìn - Chiến lược
                  </li>
                </a>
                <a href="/the-manh-va-su-khac-biet">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Thế mạnh và sự khác biệt
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <a href="#news" className="text-black hover:text-blue-500 pb-3">
              Tin tức
            </a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-56">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="#activity-news">Tin hoạt động</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
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
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="/crm">CRM (Hệ thống tương tác khách hàng đa kênh)</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="#labor">Hệ thống ERP (Quản trị tổng thể nguồn lực doanh nghiệp</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="#education">Phần mềm kế toán (TT88, TT133, TT200)</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="#finance">Hệ thống HRM</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="#inspection">Hệ thống quản lý ký túc xá</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="#internal">Hoá đơn điện tử</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="/bao-gia">Báo giá</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
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
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="#digital-consulting">Tư vấn chuyển đổi số</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
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
          <a href="/dang-ky-su-dung" className="text-black hover:text-blue-500">
            Đăng ký sử dụng
          </a>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden ml-auto relative">
          <button
            aria-label="Open menu"
            className="p-2 rounded"
            style={{ color: "#000" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="text-2xl font-bold" style={{ color: "#000" }}>⋯</span>
          </button>
          {mobileMenuOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-50">
              <ul className="flex flex-col gap-2 p-4 text-gray-700">
                <li className="group relative">
                  <a href="#about" className="block py-2 hover:text-blue-500">Giới thiệu</a>
                  <div className="hidden group-hover:block relative w-full bg-white shadow-lg rounded-lg mt-0 z-50">
                    <ul className="flex flex-col">
                      <a href="/ve-chung-toi">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Về chúng tôi</li>
                      </a>
                      <a href="/co-cau-co-quan-to-chuc">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cơ cấu - Tổ chức</li>
                      </a>
                      <a href="/tam-nhin-chien-luoc">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tầm nhìn - Chiến lược</li>
                      </a>
                      <a href="/the-manh-va-su-khac-biet">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Thế mạnh và sự khác biệt</li>
                      </a>
                    </ul>
                  </div>
                </li>
                <li className="group relative">
                  <a href="#news" className="block py-2 hover:text-blue-500">Tin tức</a>
                  <div className="hidden group-hover:block relative w-full bg-white shadow-lg rounded-lg mt-0 z-50">
                    <ul className="flex flex-col">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="#activity-news">Tin hoạt động</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="#tech-news">Tin công nghệ</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="group relative">
                  <a href="#products" className="block py-2 hover:text-blue-500">Sản phẩm</a>
                  <div className="hidden group-hover:block relative w-full bg-white shadow-lg rounded-lg mt-0 z-50">
                    <ul className="flex flex-col">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="/crm">CRM (Hệ thống tương tác khách hàng đa kênh)</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="#labor">Hệ thống ERP (Quản trị tổng thể nguồn lực doanh nghiệp</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="#education">Phần mềm kế toán (TT88, TT133, TT200)</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="#finance">Hệ thống HRM</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="#inspection">Hệ thống quản lý ký túc xá</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="#internal">Hoá đơn điện tử</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="/bao-gia">Báo giá</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="#finance">Hợp đồng điện tử</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="group relative">
                  <a href="#services" className="block py-2 hover:text-blue-500">Dịch vụ</a>
                  <div className="hidden group-hover:block relative w-full bg-white shadow-lg rounded-lg mt-0 z-50">
                    <ul className="flex flex-col">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="#digital-consulting">Tư vấn chuyển đổi số</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="#software-maintenance">Dịch vụ bảo trì phần mềm ứng dụng</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#careers" className="block py-2 hover:text-blue-500">Tuyển dụng</a>
                </li>
                <li>
                  <a href="#contact" className="block py-2 hover:text-blue-500">Liên hệ</a>
                </li>
                <li>
                  <a href="/dang-ky-su-dung" className="block py-2 hover:text-blue-500">Đăng ký sử dụng</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
