import { BookOpen } from 'lucide-react';

const distributors = [
  {
    name: 'Amazon',
    logo: '/logo/amazon.png',
    alt: 'Amazon logo'
  },
  {
    name: 'Flipkart',
    logo: '/logo/Flipkart.png',
    alt: 'Flipkart logo'
  },
  {
    name: 'Google',
    logo: '/logo/google.png',
    alt: 'Google logo'
  },
  {
    name: 'eBay',
    logo: '/logo/ebay.png',
    alt: 'eBay logo'
  },
  {
    name: 'Instagram',
    logo: 'src/assets/distributors/Instagram.svg',
    alt: 'Instagram logo'
  }
];

const DistributionNetwork = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#F4511E]/10 rounded-full text-[#F4511E] text-sm mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Global Reach Assurance</span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 relative pl-12">
            <span className="absolute left-0 top-3 w-8 h-1 bg-[#F4511E] rounded-full"></span>
            Worldwide Distribution
            <span className="block text-[#F4511E]">Network Access</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            When you publish with Big Note Publications, your book becomes available through the world&apos;s largest distribution
            networks, reaching readers in over 150 countries through both physical and digital channels.
          </p>
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* Decorative background elements */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#F4511E]/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -right-12 w-48 h-48 bg-amber-200/20 rounded-full blur-2xl"></div>

          {distributors.map((distributor, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F4511E]/10 rounded-xl transition-colors duration-300"></div>
              <div className="flex items-center justify-center h-20">
                <img
                  src={distributor.logo}
                  alt={distributor.alt}
                  className="max-h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
               
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            Plus 45+ specialized book distributors and library networks worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default DistributionNetwork;