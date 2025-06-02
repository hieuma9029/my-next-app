"use client";

import React from "react";

export default function LatestNews() {
  return (
    <div className="container-fluid flex flex-col items-center px-63 py-42 bg-gray-100">
      <h2 className="text-1xl font-bold mb-4 text-green-400">Tin tức</h2>
      <h2 className="text-4xl font-bold mb-6 text-black">Tin tức mới</h2>
      <div className="container-fluid flex gap-8">
        {/* Main News */}
        <div
          className="flex flex-col w-1/2 bg-white p-6 rounded-lg shadow-md main-news"
          onMouseEnter={(e) => e.currentTarget.classList.add("animate-slide-left")}
          onMouseLeave={(e) => e.currentTarget.classList.remove("animate-slide-left")}
        >
          <img
            src="/images/banners/gllauyabiaaiulj-728.jpg"
            alt="Main News"
            className="w-full h-auto rounded-lg mb-4"
          />
          <p className="text-sm text-gray-500 mb-2">Ngày 05/12/2024</p>
          <h3 className="text-2xl text-gray-600 font-bold mb-4">
            Tim Cook đi đâu, làm gì trong hai ngày đến Việt Nam?
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            CEO Apple Tim Cook vừa lên chuyến cơ rời Việt Nam, khép lại hai ngày làm việc ngắn ngủi nhưng đầy đặc sự kiện. Ngày 15/4, Tim Cook bất ngờ đến Việt Nam và tham gia lịch trình...
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Xem thêm
          </a>
        </div>
        {/* Side News */}
        <div className="flex w-1/2 flex-col gap-8 ml-auto">
          <div
            className="flex bg-white px-4 py-6 rounded-lg shadow-md items-center gap-6 side-news"
            style={{ height: "200px" }}
            onMouseEnter={(e) => e.currentTarget.classList.add("animate-slide-right")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("animate-slide-right")}
          >
            <img
              src="/images/banners/Hacker-VNDirect-7042-1712200513.jpg"
              alt="Side News 1"
              className="w-36 h-auto max-h-full object-contain"
            />
            <div>
              <p className="text-sm text-gray-500 mb-2">Ngày 17/04/2024</p>
              <h4 className="text-xl text-gray-600 font-bold mb-2">
                Chatbot AI của Trung Quốc đạt 200 triệu người dùng
              </h4>
              <a href="#" className="text-blue-500 hover:underline">
                Xem thêm
              </a>
            </div>
          </div>
          <div
            className="flex bg-white px-4 py-6 rounded-lg shadow-md items-center gap-6 side-news"
            style={{ height: "200px" }}
            onMouseEnter={(e) => e.currentTarget.classList.add("animate-slide-right")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("animate-slide-right")}
          >
            <img
              src="/images/banners/Hacker-VNDirect-7042-1712200513.jpg"
              alt="Side News 2"
              className="w-36 h-auto max-h-full object-contain"
            />
            <div>
              <p className="text-sm text-gray-500 mb-2">Ngày 17/04/2024</p>
              <h4 className="text-xl text-gray-600 font-bold mb-2">
                Tên lửa siêu thanh nâng tầm sức mạnh 'trong chớp mắt'
              </h4>
              <a href="#" className="text-blue-500 hover:underline">
                Xem thêm
              </a>
            </div>
          </div>
          <div
            className="flex bg-white px-4 py-6 rounded-lg shadow-md items-center gap-6 side-news"
            style={{ height: "200px" }}
            onMouseEnter={(e) => e.currentTarget.classList.add("animate-slide-right")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("animate-slide-right")}
          >
            <img
              src="/images/banners/Hacker-VNDirect-7042-1712200513.jpg"
              alt="Side News 3"
              className="w-36 h-auto max-h-full object-contain"
            />
            <div>
              <p className="text-sm text-gray-500 mb-2">Ngày 05/04/2024</p>
              <h4 className="text-xl text-gray-600 font-bold mb-2">
                Tin tặc gia tăng tấn công hệ thống mạng trọng yếu
              </h4>
              <a href="#" className="text-blue-500 hover:underline">
                Xem thêm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
