"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUsPage() {
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  const features = [
    {
      img: "https://via.placeholder.com/400x300",
      alt: "Quản trị hệ thống",
      title: "Quản trị Hệ thống",
      desc:
        "Phân quyền chi tiết, quản lý vai trò, tạo mã tự động và bảo mật tài khoản người dùng.",
    },
    {
      img: "https://via.placeholder.com/400x300",
      alt: "Quản lý khách hàng",
      title: "Quản lý Khách hàng",
      desc:
        "Danh mục cấu hình, quản lý thông tin khách hàng tập trung, phân loại và lọc nâng cao.",
    },
    {
      img: "https://via.placeholder.com/400x300",
      alt: "Callcenter & Auto Dialer",
      title: "Callcenter & Auto Dialer",
      desc:
        "Tích hợp tổng đài ảo, chiến dịch quay số tự động, báo cáo chi tiết, tăng hiệu suất cuộc gọi.",
    },
    {
      img: "https://via.placeholder.com/400x300",
      alt: "Đa kênh",
      title: "Đa Kênh (Omni-Channel)",
      desc:
        "Kết nối Facebook, Zalo, Chat, Email, SMS; kịch bản tự động, rule phân bổ, lịch sử luân chuyển.",
    },
    {
      img: "https://via.placeholder.com/400x300",
      alt: "Quản trị & Phân tích",
      title: "Quản trị & Phân tích",
      desc:
        "Báo cáo thời gian thực, biểu đồ trực quan, phân tích dữ liệu khách hàng chi tiết.",
    },
    {
      img: "https://via.placeholder.com/400x300",
      alt: "Bảo mật & Hiệu suất",
      title: "Bảo mật & Hiệu suất",
      desc:
        "Đám mây sẵn sàng cao, mã hoá dữ liệu, sao lưu định kỳ, phân quyền truy cập chặt chẽ.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1 p-0 m-0 bg-transparent">
        {/* Hero */}
        <section
          className="hero"
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #1e88e5, #3949ab)",
            color: "#fff",
            padding: "80px 20px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: 15 }}>
            Giải pháp DSS CRM - Quản lý Quan hệ Khách hàng Toàn diện
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: 25,
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Tối ưu hoá quy trình bán hàng, chăm sóc khách hàng và tăng trưởng bền
            vững với hệ thống DSS CRM hiện đại, tích hợp đa kênh và tự động hoá.
          </p>
          <a
            className="btn btn-primary hero-cta"
            href="#contact"
            style={{
              display: "inline-block",
              marginTop: 10,
              backgroundColor: "#ff9800",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: 4,
              fontWeight: 500,
            }}
          >
            Yêu cầu Demo
          </a>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="section light"
          style={{
            backgroundColor: "#fff",
            padding: "60px 20px",
          }}
        >
          <div
            className="container"
            style={{ maxWidth: 1100, margin: "0 auto" }}
          >
            <h2
              style={{
                fontSize: "2rem",
                color: "#0d47a1",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Tính năng nổi bật
            </h2>
            <div
              className="features-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
                marginTop: 30,
              }}
            >
              {/* Feature Cards */}
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="feature-card"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 8,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    padding: openFeature === idx ? 30 : 20,
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    transform: openFeature === idx ? "translateY(-5px)" : "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "none")
                  }
                  onClick={() =>
                    setOpenFeature(openFeature === idx ? null : idx)
                  }
                >
                  <img
                    src={feature.img}
                    alt={feature.alt}
                    style={{
                      height: 120,
                      objectFit: "cover",
                      borderRadius: 4,
                      marginBottom: 15,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: 10,
                      color: "#0d47a1",
                    }}
                  >
                    {feature.title}
                  </h3>
                  {openFeature === idx && (
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#555",
                        marginTop: 10,
                      }}
                    >
                      {feature.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section
          id="applications"
          className="section dark"
          style={{
            backgroundColor: "#f0f4f8",
            padding: "60px 20px",
          }}
        >
          <div
            className="container"
            style={{ maxWidth: 1100, margin: "0 auto" }}
          >
            <h2
              style={{
                fontSize: "2rem",
                color: "#0d47a1",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Các lĩnh vực ứng dụng
            </h2>
            <div
              className="apps-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 15,
                marginTop: 30,
              }}
            >
              <div className="app-item">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Bán lẻ & Thương mại điện tử"
                />
                <div className="overlay">Bán lẻ & Thương mại điện tử</div>
                <p>Giải pháp tối ưu cho ngành bán lẻ và thương mại điện tử.</p>
              </div>
              <div className="app-item">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Tài chính – Ngân hàng & Bảo hiểm"
                />
                <div className="overlay">Tài chính – Ngân hàng & Bảo hiểm</div>
                <p>
                  Hỗ trợ quản lý khách hàng và tối ưu hóa quy trình tài chính.
                </p>
              </div>
              <div className="app-item">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Sản xuất & Phân phối"
                />
                <div className="overlay">Sản xuất & Phân phối</div>
                <p>
                  Tăng cường hiệu quả sản xuất và quản lý chuỗi cung ứng.
                </p>
              </div>
              <div className="app-item">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Dịch vụ – Du lịch – Nhà hàng"
                />
                <div className="overlay">Dịch vụ – Du lịch – Nhà hàng</div>
                <p>
                  Quản lý khách hàng và tối ưu hóa trải nghiệm dịch vụ.
                </p>
              </div>
              <div className="app-item">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Bất động sản & Xây dựng"
                />
                <div className="overlay">Bất động sản & Xây dựng</div>
                <p>
                  Hỗ trợ quản lý dự án và tối ưu hóa quy trình xây dựng.
                </p>
              </div>
              <div className="app-item">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Giáo dục & Đào tạo"
                />
                <div className="overlay">Giáo dục & Đào tạo</div>
                <p>
                  Nâng cao hiệu quả quản lý học viên và chương trình đào tạo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
