import Header from "./components/Header";
import Footer from "./components/Footer";
import FirstStart from "./components/FirstStart";
import AboutUsSection from "./components/AboutUsSection";
import FeaturedProductsSection from "./components/FeaturedProductsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import LatestNews from "./components/LatestNews";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="container-fluid flex flex-col bg-gray-100 overflow-hidden">
        <FirstStart />
        <AboutUsSection />
        <FeaturedProductsSection />
        <WhyChooseUsSection />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}
