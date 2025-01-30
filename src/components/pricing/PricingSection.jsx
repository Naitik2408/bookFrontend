
import PropTypes from 'prop-types';
import { BookOpen } from 'lucide-react';
const PricingCard = ({ title, price, features, isPopular }) => {
  return (
    <div className={`relative bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${isPopular ? 'border-orange-500' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg rounded-tr-xl">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{title}</h3>
        <div className="text-4xl font-bold text-orange-600 mb-4">
          ₹{price}
          <span className="text-sm text-gray-600 font-normal">/book</span>
        </div>
      </div>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <svg className="flex-shrink-0 w-5 h-5 text-orange-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </div>

      <button className={`w-full mt-8 py-3 px-6 rounded-lg font-medium transition-colors 
        ${isPopular ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
        Choose Plan
      </button>
    </div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isPopular: PropTypes.bool,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const PricingSection = () => {
  const pricingData = [
    {
      title: "Basic Plan",
      price: "9,999",
      features: [
        "Typing & Formatting",
        "Proofreading",
        "Standard Cover Design",
        "ISBN Assignment",
        "Copyright Registration",
        "Basic Marketing",
        "5 Author Copies",
        "eBook Distribution",
        "50% Royalty",
        "Project Manager Support",
      ]
    },
    {
      title: "Standard Plan",
      price: "14,999",
      features: [
        "Artistic Cover Design",
        "ISBN Assignment",
        "10 Author Copies",
        "eBook Creation & Distribution",
        "Copyright Registration",
        "Organic Marketing",
        "50% Royalty",
        "Dedicated Project Manager",
        "Advanced Formatting",
        "Indian Online Distribution"
      ]
    },
    {
      title: "Premium Plan",
      price: "24,999",
      isPopular: true,
      features: [
        "Premium Cover Design",
        "ISBN & Copyright",
        "20 Author Copies",
        "eBook + Print Distribution",
        "Organic & Paid Marketing",
        "Marketing Banners & Posters",
        "50% Royalty",
        "Priority Project Manager",
        "Advanced Proofreading",
        "Pan-India Distribution"
      ]
    },
    {
      title: "Expert Plan",
      price: "49,999",
      features: [
        "Custom Cover Design",
        "ISBN & Copyright",
        "50 Author Copies",
        "Global Distribution",
        "Premium Marketing Package",
        "Professional Promotional Material",
        "50% Royalty",
        "24/7 Project Manager",
        "Complete Typing/Formatting",
        "International Distribution"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-6 inline-flex items-center gap-2 text-orange-600">
            <BookOpen size={32} />
            <span className="text-2xl font-bold">Publishing Solutions</span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Craft Your Literary Legacy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional publishing packages designed for author success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm">
          *All inclusive pricing with GST and quality assurance
        </div>
      </div>
    </section>
  );
};

export default PricingSection;