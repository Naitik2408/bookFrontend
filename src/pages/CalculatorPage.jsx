// src/pages/CalculatorPage.jsx

import BookPriceCalculator from "../components/books/BookPriceCalculator";
import FAQSection from "../components/features/FAQSection";
// import PublishingSection from "../components/features/PublishingSection";

const CalculatorPage = () => {
  return (
    <div className="min-h-screen">
      <BookPriceCalculator />
      <FAQSection />
      {/* <PublishingSection /> */}
    </div>
  );
};

export default CalculatorPage;