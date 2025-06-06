import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main
        className="flex flex-col md:flex-row items-center justify-between p-4 md:p-12 lg:p-24 relative bg-cover bg-center flex-1"
        style={{
          backgroundImage: "url('/images/banners/the-manh-su-khac-biet.png')",
          backgroundSize: "70% auto",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-90"></div>
        <div className="text-left flex flex-col w-full md:w-1/2 relative z-10 py-8 md:py-0">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-black text-left">
            Thế mạnh và sự khác biệt
          </h1>
          <p className="text-base md:text-xl text-gray-600 mb-4 md:mb-6 text-left leading-relaxed">
            Nơi hội tụ của các chuyên gia dày dạn trong lĩnh vực công nghệ thông
            tin, quản trị doanh nghiệp, ERP, kế toán,… sẽ đem lại sản phẩm:
          </p>
          <ul className="list-inside list-[➤] space-y-2 pl-4 text-base md:text-lg text-gray-700">
            <li>Công nghệ hiện đại</li>
            <li>Tính bảo mật cao</li>
            <li>Tối ưu hiệu năng</li>
            <li>Tối ưu nghiệp vụ</li>
            <li>Thân thiện</li>
            <li>Giá cả phải chăng</li>
          </ul>
        </div>
        <div className="relative w-full md:w-1/2 rounded-bl-clip mt-6 md:mt-0">
          <Image
            src="/images/banners/the-manh-su-khac-biet.png"
            alt="Thế mạnh và sự khác biệt"
            width={600}
            height={400}
            className="w-full h-auto object-cover shadow-lg"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
