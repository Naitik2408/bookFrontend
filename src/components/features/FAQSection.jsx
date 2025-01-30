import   { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, BookOpen, MessageCircle, Award } from 'lucide-react';

const faqs = [
  {
    question: "What is the publishing process with Big Note Publications?",
    answer: "Publishing with Big Note Publications is simple and seamless. Register with us, choose a publishing plan that suits your needs, and submit your manuscript. Our team will handle everything, from formatting and cover design to distribution, ensuring your book reaches readers in the best possible way."
  },
  {
    question: "How much royalty will I earn?",
    answer: "We offer a competitive royalty of 20% on the MRP for every print order and eBook sale. Your royalties are tracked transparently through your Author Dashboard, and payments can be scheduled as per your convenience."
  },
  {
    question: "Will I get an ISBN for my book?",
    answer: "Yes, absolutely! An ISBN (International Standard Book Number) is essential for selling and cataloging your book globally. We assign a separate ISBN for each version of your book—Paperback, Hardcover, and eBook—to ensure it's uniquely identifiable in the market."
  },
  {
    question: "Who retains the rights to the book?",
    answer: "The author retains 100% rights to the book. We are here to assist you with publishing, but all the creative and ownership rights stay with you. Your work remains yours, always."
  },
  {
    question: "Can my book be distributed internationally?",
    answer: "Yes! With Big Note Publications, your book will be distributed both in India and internationally. Through our partnerships with major global book distribution networks, your work will be available in 150+ countries in both Paperback and eBook formats, helping you reach readers worldwide."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-l-4 ${isOpen ? 'border-[#F4511E]' : 'border-transparent'} bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 mb-3`}>
      <button
        className="w-full flex justify-between items-center text-left p-4 focus:outline-none"
        onClick={onClick}
      >
        <div className="flex items-start gap-3">
          <div className={`mt-1 p-1.5 rounded-full ${isOpen ? 'bg-[#F4511E]/10' : 'bg-gray-100'}`}>
            <ChevronDown 
              className={`w-4 h-4 transform transition-all duration-300 ${
                isOpen ? 'text-[#F4511E] rotate-180' : 'text-gray-600'
              }`}
            />
          </div>
          <span className="text-base font-semibold text-gray-900 pr-4">{question}</span>
        </div>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden px-4 ${
          isOpen ? 'max-h-64 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed pl-10 border-l-2 border-[#F4511E] ml-2">
          {answer}
        </p>
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

const RegisterCard = () => {
  return (
    <div className="bg-gradient-to-br from-[#F4511E] to-orange-400 text-white rounded-2xl p-5 shadow-xl relative overflow-hidden max-w-xs w-full">
      <div className="absolute top-0 right-0 opacity-10">
        <BookOpen className="w-32 h-32" />
      </div>
      <div className="relative z-10">
        <div className="bg-white/10 rounded-full w-max p-3 mb-4">
          <MessageCircle className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-3 leading-tight">
          Personalized Guidance
          <span className="block text-orange-100 text-base font-normal mt-1">
            Free 30-min consultation
          </span>
        </h3>
        <ul className="space-y-2 mb-4">
          <li className="flex items-center gap-2 text-sm">
            <Award className="w-4 h-4 text-orange-200" />
            <span>Expert strategy session</span>
          </li>
          <li className="flex items-center gap-2 text-sm">
            <Award className="w-4 h-4 text-orange-200" />
            <span>Custom publishing plan</span>
          </li>
          <li className="flex items-center gap-2 text-sm">
            <Award className="w-4 h-4 text-orange-200" />
            <span>Market insights & tips</span>
          </li>
        </ul>
        <button className="w-full bg-white text-[#F4511E] px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm">
          Schedule Free Session
        </button>
      </div>
    </div>
  );
};
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 relative pl-12">
              <span className="absolute left-0 top-3 w-8 h-1 bg-[#F4511E] rounded-full"></span>
              Your Publishing Journey<br />
              <span className="text-[#F4511E]">Made Simple</span>
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:sticky lg:top-16 h-max flex justify-center">
            <RegisterCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;