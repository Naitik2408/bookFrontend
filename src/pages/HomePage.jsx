// src/pages/HomePage.jsx
import HeroSection from "../components/layout/HeroSection";
import BookCarousel from "../components/books/BookCarousel";
import BookCarousel2 from "../components/books/BookCarousel2";
import PublishingProcess from "../components/features/PublishingProcess";
import Features from "../components/features/Features";
import DistributionNetwork from "../components/features/DistributionNetwork";
import FAQSection from "../components/features/FAQSection";
// import PublishingSection from "../components/features/PublishingSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BookCarousel />
      <BookCarousel2 />
      <PublishingProcess />
      <Features />
      <DistributionNetwork />
      <FAQSection />
       {/* <PublishingSection /> */}
    </div>
  );
};

export default HomePage;