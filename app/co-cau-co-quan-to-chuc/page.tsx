import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex items-center justify-center bg-gray-100 py-36">
        <div className="relative py-20">
          <img
            src="/images/banners/Organization.png"
            alt="Person with Headphones"
            className="w-full h-200 object-cover"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
