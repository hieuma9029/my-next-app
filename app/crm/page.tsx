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
          <h1 style={{ fontSize: "2.5rem", marginBottom: 15 }}>
            Giải pháp DSS CRM - Quản lý Quan hệ Khách hàng Toàn diện
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
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
                </div>
              ))}
            </div>

            {/* Features Description Section */}
            <div
              className="features-list"
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
                  style={{ marginBottom: 30 }}
                >
                  <h3 style={{ color: "#0d47a1", fontSize: "1.5rem" }}>
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                  <ul style={{ paddingLeft: 20 }}>
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
              </div>
              <div className="app-item">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Tài chính – Ngân hàng & Bảo hiểm"
                />
                <div className="overlay">Tài chính – Ngân hàng & Bảo hiểm</div>
              </div>
              <div className="app-item">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Sản xuất & Phân phối"
                />
                <div className="overlay">Sản xuất & Phân phối</div>
              </div>
              <div className="app-item">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Dịch vụ – Du lịch – Nhà hàng"
                />
                <div className="overlay">Dịch vụ – Du lịch – Nhà hàng</div>
              </div>
              <div className="app-item">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Bất động sản & Xây dựng"
                />
                <div className="overlay">Bất động sản & Xây dựng</div>
              </div>
              <div className="app-item">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Giáo dục & Đào tạo"
                />
                <div className="overlay">Giáo dục & Đào tạo</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
