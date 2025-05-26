import Header from "../components/Header";
import Footer from "../components/Footer";
import { strategicVision1 } from "../constants/Texts";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex items-center justify-center bg-gray-100 pt-36 pb-54 px-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl w-full">
          <h1 className="text-4xl font-bold text-black mb-6 text-center">
            Tầm Nhìn Chiến Lược
          </h1>
          <p className="text-lg text-gray-700 text-justify leading-relaxed">
            {strategicVision1}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
