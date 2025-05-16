import Header from "../components/Header";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex items-center justify-center bg-gray-100 py-36">
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  );
}
