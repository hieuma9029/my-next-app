import Header from "../components/Header";
import Footer from "../components/Footer";
import { strategicVision1 } from "../constants/Texts";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main
        className="flex items-center justify-between px-24 relative bg-cover bg-center flex-1"
        style={{
          backgroundImage: "url('/images/banners/strategic-vision-bg.png')",
          backgroundSize: "70% auto",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-90"></div>
        <div className="text-left flex flex-col w-1/2 relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-black text-left">
            Tầm Nhìn Chiến Lược
          </h1>
          <p className="text-xl text-gray-600 mb-6 text-left leading-relaxed">
            {strategicVision1}
          </p>
        </div>
        <div className="relative w-1/2 rounded-bl-clip">
          <Image
            src="/images/banners/strategic-vision-bg.png"
            alt="Tầm Nhìn Chiến Lược"
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
