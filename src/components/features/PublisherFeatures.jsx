// import PropTypes from 'prop-types';
// import { Book, Star, DollarSign, Handshake, LineChart, Globe } from 'lucide-react';

// const FeatureCard = ({ icon: Icon, title, description }) => (
//   <div className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
//     <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
//     <div className="relative z-10">
//       <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-6">
//         <Icon className="w-7 h-7 text-white" />
//       </div>
//       <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
//       <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
//     </div>
//   </div>
// );

// FeatureCard.propTypes = {
//   icon: PropTypes.elementType.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

// const PublisherFeatures = () => {
//   const features = [
//     {
//       icon: Book,
//       title: "Professional Publishing",
//       description: "From concept to cover design, our expert team crafts your book to perfection with meticulous editing and professional formatting."
//     },
//     {
//       icon: Star,
//       title: "Competitive Pricing",
//       description: "Leverage cutting-edge print technology and optimized production costs to price your book competitively in global markets."
//     },
//     {
//       icon: DollarSign,
//       title: "100% Royalty",
//       description: "Retain full net profits from every sale while we handle distribution and brand growth strategies across multiple platforms."
//     },
//     {
//       icon: Handshake,
//       title: "Dedicated Support",
//       description: "24/7 expert assistance throughout your publishing journey and beyond, with personalized post-launch success strategies."
//     },
//     {
//       icon: LineChart,
//       title: "Real-time Analytics",
//       description: "Access detailed monthly sales reports and market insights through our intuitive author dashboard."
//     },
//     {
//       icon: Globe,
//       title: "Global Reach",
//       description: "Distribute to 150+ countries through our network of 25,000+ retailers and digital platforms worldwide."
//     }
//   ];

//   return (
//     <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             Your Complete Publishing Solution
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             From manuscript to global distribution - everything you need to succeed as an author
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <FeatureCard
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//             />
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <p className="text-gray-600 text-lg">
//             ✨ Trusted by 15,000+ authors worldwide
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PublisherFeatures;
import PropTypes from 'prop-types';
import { Book, Star, DollarSign, Handshake, LineChart, Globe } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-50">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-amber-700 flex items-center justify-center mb-6 shadow-md">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-lg font-sans">{description}</p>
    </div>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const PublisherFeatures = () => {
  const features = [
    {
      icon: Book,
      title: "Professional Publishing",
      description: "From concept to cover design, our expert team crafts your book to perfection with meticulous editing and professional formatting."
    },
    {
      icon: Star,
      title: "Competitive Pricing",
      description: "Leverage cutting-edge print technology and optimized production costs to price your book competitively in global markets."
    },
    {
      icon: DollarSign,
      title: "100% Royalty",
      description: "Retain full net profits from every sale while we handle distribution and brand growth strategies across multiple platforms."
    },
    {
      icon: Handshake,
      title: "Dedicated Support",
      description: "24/7 expert assistance throughout your publishing journey and beyond, with personalized post-launch success strategies."
    },
    {
      icon: LineChart,
      title: "Real-time Analytics",
      description: "Access detailed monthly sales reports and market insights through our intuitive author dashboard."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Distribute to 150+ countries through our network of 25,000+ retailers and digital platforms worldwide."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-amber-50 to-orange-50 py-24 px-4 border-t border-orange-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-2 bg-orange-100 px-5 py-2 rounded-full">
            <Book className="text-orange-600" size={20} />
            <span className="text-orange-600 font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Comprehensive Publishing Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans">
            End-to-end solutions combining traditional expertise with modern innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center bg-white/50 p-8 rounded-2xl border border-orange-100 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-orange-600">15K+</div>
              <div className="text-gray-600 font-sans">Published Authors</div>
            </div>
            <div className="h-12 w-px bg-orange-200" />
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-orange-600">98%</div>
              <div className="text-gray-600 font-sans">Success Rate</div>
            </div>
            <div className="h-12 w-px bg-orange-200" />
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-orange-600">150+</div>
              <div className="text-gray-600 font-sans">Countries Reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublisherFeatures;