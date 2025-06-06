"use client";

import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { features } from "./featuresData";
import { heroDescription } from "./heroData";
import { featuresDescription } from "./featuresDescriptionData";

export default function AboutUsPage() {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToFeature = (idx: number) => {
    featureRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

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
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ marginBottom: 15 }}
          >
            Giải pháp DSS CRM - Quản lý Quan hệ Khách hàng Toàn diện
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl"
            style={{
              maxWidth: 1150,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {heroDescription}
          </p>
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
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              style={{
                color: "#0d47a1",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Tính năng nổi bật
            </h2>
            <div
              className="features-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8"
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
                    padding: 20,
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "none")
                  }
                  onClick={() => scrollToFeature(idx)}
                >
                  <img
                    src={feature.img}
                    alt={feature.alt}
                    className="mx-auto w-full max-w-[120px] h-auto object-cover rounded mb-4"
                    style={{
                      height: 120,
                      objectFit: "cover",
                      borderRadius: 4,
                      marginBottom: 15,
                    }}
                  />
                  <h3
                    className="text-base sm:text-lg font-semibold"
                    style={{
                      marginBottom: 10,
                      color: "#0d47a1",
                    }}
                  >
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Features Description Section */}
            <div
              className="features-list mt-12 text-sm sm:text-base"
              style={{
                marginTop: 50,
                lineHeight: 1.6,
                color: "#555",
              }}
            >
              {featuresDescription.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    featureRefs.current[idx] = el;
                  }}
                  className="mb-8"
                  style={{ marginBottom: 30 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold" style={{ color: "#0d47a1" }}>
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                  <ul className="pl-4">
                    {item.details.map((detail, detailIdx) => (
                      <li
                        key={detailIdx}
                        style={{
                          marginBottom: 5,
                          paddingLeft: detail.startsWith("🔺") ? 20 : 0,
                          listStyleType: "none",
                        }}
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {item.additionalInfo && (
                    <p style={{ marginTop: 10, fontStyle: "italic" }}>
                      {item.additionalInfo}
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
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              style={{
                color: "#0d47a1",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Các lĩnh vực ứng dụng
            </h2>
            <div
              className="apps-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 15,
                marginTop: 30,
              }}
            >
              {/* Responsive app items */}
              <div className="app-item relative">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Bán lẻ & Thương mại điện tử"
                  className="w-full h-40 sm:h-52 md:h-60 object-cover rounded"
                />
                <div className="overlay absolute bottom-2 left-2 bg-white bg-opacity-80 px-2 py-1 rounded text-xs sm:text-sm font-semibold">
                  Bán lẻ & Thương mại điện tử
                </div>
              </div>
              <div className="app-item relative">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Tài chính – Ngân hàng & Bảo hiểm"
                  className="w-full h-40 sm:h-52 md:h-60 object-cover rounded"
                />
                <div className="overlay absolute bottom-2 left-2 bg-white bg-opacity-80 px-2 py-1 rounded text-xs sm:text-sm font-semibold">
                  Tài chính – Ngân hàng & Bảo hiểm
                </div>
              </div>
              <div className="app-item relative">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Sản xuất & Phân phối"
                  className="w-full h-40 sm:h-52 md:h-60 object-cover rounded"
                />
                <div className="overlay absolute bottom-2 left-2 bg-white bg-opacity-80 px-2 py-1 rounded text-xs sm:text-sm font-semibold">
                  Sản xuất & Phân phối
                </div>
              </div>
              <div className="app-item relative">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Dịch vụ – Du lịch – Nhà hàng"
                  className="w-full h-40 sm:h-52 md:h-60 object-cover rounded"
                />
                <div className="overlay absolute bottom-2 left-2 bg-white bg-opacity-80 px-2 py-1 rounded text-xs sm:text-sm font-semibold">
                  Dịch vụ – Du lịch – Nhà hàng
                </div>
              </div>
              <div className="app-item relative">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Bất động sản & Xây dựng"
                  className="w-full h-40 sm:h-52 md:h-60 object-cover rounded"
                />
                <div className="overlay absolute bottom-2 left-2 bg-white bg-opacity-80 px-2 py-1 rounded text-xs sm:text-sm font-semibold">
                  Bất động sản & Xây dựng
                </div>
              </div>
              <div className="app-item relative">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Giáo dục & Đào tạo"
                  className="w-full h-40 sm:h-52 md:h-60 object-cover rounded"
                />
                <div className="overlay absolute bottom-2 left-2 bg-white bg-opacity-80 px-2 py-1 rounded text-xs sm:text-sm font-semibold">
                  Giáo dục & Đào tạo
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
