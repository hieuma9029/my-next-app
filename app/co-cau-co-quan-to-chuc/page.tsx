import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex items-center justify-center bg-gray-100 py-10 md:py-24 lg:py-36">
        <div className="relative py-8 sm:py-12 md:py-20 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-6xl">
          <img
            src="/images/banners/Organization.png"
            alt="Person with Headphones"
            className="w-full h-auto max-h-[600px] md:max-h-[800px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
