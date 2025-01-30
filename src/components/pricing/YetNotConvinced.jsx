// const YetNotConvinced = () => {
//     return (
//       <div className="bg-gradient-to-b from-orange-50 to-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             {/* Left Column - Benefits */}
//             <div className="space-y-6">
//               {/* 100% Author Royalty */}
//               <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
//                 <div className="flex-shrink-0 p-2 bg-orange-100 rounded-md">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">100% Author Royalty</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">Retain full earnings from every book sold through our global distributor network.</p>
//                 </div>
//               </div>
  
//               {/* Monthly Sales & Payout */}
//               <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
//                 <div className="flex-shrink-0 p-2 bg-orange-100 rounded-md">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">Monthly Reporting</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">Real-time sales tracking and monthly payments with transparent reporting.</p>
//                 </div>
//               </div>
  
//               {/* Worldwide Distribution */}
//               <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
//                 <div className="flex-shrink-0 p-2 bg-orange-100 rounded-md">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">Global Reach</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">Distribute to 150+ countries in both paperback and digital formats.</p>
//                 </div>
//               </div>
//             </div>
  
//             {/* Right Column - Call to Action */}
//             <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-xl shadow-lg">
//               <h2 className="text-3xl font-bold text-white mb-4">Need More Info?</h2>
//               <p className="text-orange-50 text-sm mb-6 leading-relaxed">
//                 Get personalized publishing guidance or explore our comprehensive FAQs.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
//                   Free Consultation
//                 </button>
//                 <button className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
//                   View FAQs
//                 </button>
//               </div>
//               <div className="mt-6 flex items-center space-x-2 text-orange-100 text-sm">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>Mon-Fri: 9AM - 7PM IST</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default YetNotConvinced;
import { BookOpen, Globe, BarChart, MessageCircleQuestion, Clock } from "lucide-react";

const YetNotConvinced = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Benefits */}
          <div className="space-y-6">
            {/* Benefit Items */}
            <div className="group flex items-start space-x-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-orange-100 hover:bg-orange-50 transition-all duration-300">
              <div className="flex-shrink-0 p-2.5 bg-orange-100 rounded-lg text-orange-600">
                <BookOpen size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                  100% Author Royalty
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Retain full earnings from every book sold through our global distributor network.
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-orange-100 hover:bg-orange-50 transition-all duration-300">
              <div className="flex-shrink-0 p-2.5 bg-orange-100 rounded-lg text-orange-600">
                <BarChart size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                  Transparent Reporting
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Real-time sales dashboard with monthly royalty payouts and analytics.
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-orange-100 hover:bg-orange-50 transition-all duration-300">
              <div className="flex-shrink-0 p-2.5 bg-orange-100 rounded-lg text-orange-600">
                <Globe size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                  Global Distribution
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reach readers in 150+ countries through print and digital channels.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 p-8 rounded-2xl shadow-lg overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/10 rounded-full mix-blend-screen blur-xl"></div>
            <div className="absolute bottom-20 -left-20 w-32 h-32 bg-white/5 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-2 text-amber-100">
                <MessageCircleQuestion size={28} strokeWidth={1.5} />
                <h2 className="text-3xl font-serif font-bold text-white">
                  Personalized Guidance
                </h2>
              </div>
              
              <p className="text-orange-50 text-sm mb-6 leading-relaxed">
                Connect with our publishing experts for tailored advice or explore our comprehensive author resources.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center justify-center gap-2 bg-white text-orange-600 px-6 py-3.5 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
                  <BookOpen size={20} />
                  Free Consultation
                </button>
                <button className="border-2 border-white/30 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-white/10 transition-all duration-300">
                  Explore Resources
                </button>
              </div>

              <div className="mt-6 flex items-center space-x-2 text-orange-100 text-sm">
                <Clock size={16} strokeWidth={1.5} />
                <span>Mon-Fri: 9AM - 7PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YetNotConvinced;