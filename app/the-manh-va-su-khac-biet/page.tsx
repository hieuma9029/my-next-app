import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main
        className="flex items-center text-black justify-center bg-gray-100 pt-36 pb-54 px-100 relative"
        style={{
          backgroundImage: "url('/images/banners/the-manh-su-khac-biet.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md max-w-3xl z-10">
          <h1 className="text-2xl font-bold mb-4">Thế mạnh và sự khác biệt</h1>
          <p className="mb-4 text-justify">
            Nơi hội tụ của các chuyên gia dày dạn trong lĩnh vực công nghệ thông
            tin, quản trị doanh nghiệp, ERP, kế toán,… sẽ đem lại sản phẩm:
          </p>
          <ul className="list-inside list-[➤] space-y-2 pl-4">
            <li>Công nghệ hiện đại</li>
            <li>Tính bảo mật cao</li>
            <li>Tối ưu hiệu năng</li>
            <li>Tối ưu nghiệp vụ</li>
            <li>Thân thiện</li>
            <li>Giá cả phải chăng</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
