// import { 
//   Facebook, 
//   Instagram, 
//   Twitter, 
//   Youtube, 
//   Phone, 
//   MapPin,
//   ChevronRight,
//   Mail,
//   ArrowUpRight
// } from 'lucide-react';

// const Footer = () => {
//   const footerLinks = {
//     'Publishing': [
//       { name: 'Get Started', href: '#' },
//       { name: 'Pricing Plans', href: '#' },
//       { name: 'Royalty Calculator', href: '#' },
//       { name: 'Distribution', href: '#' }
//     ],
//     'Resources': [
//       { name: 'Author Hub', href: '#' },
//       { name: 'Tutorials', href: '#' },
//       { name: 'Style Guide', href: '#' },
//       { name: 'Help Center', href: '#' }
//     ],
//     'Company': [
//       { name: 'About Us', href: '#' },
//       { name: 'Careers', href: '#' },
//       { name: 'Blog', href: '#' },
//       { name: 'Success Stories', href: '#' }
//     ]
//   };

//   const socialLinks = [
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Instagram, href: '#', label: 'Instagram' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Youtube, href: '#', label: 'Youtube' }
//   ];

//   return (
//     <footer className="bg-gray-900 text-gray-300 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
//           {/* Contact Section - Now spans 2 columns on large screens */}
//           <div className="lg:col-span-2 space-y-6 pr-8">
//             <div className="flex items-start gap-4 mb-6">
//               <div className="bg-orange-500/20 p-3 rounded-lg flex-shrink-0">
//                 <MapPin className="w-8 h-8 text-orange-500" />
//               </div>
//               <div className="space-y-2">
//                 <h3 className="text-white text-xl font-bold">BigNote HQ</h3>
//                 <p className="text-sm leading-relaxed">
//                   Smriti Nagar, Bhilai<br />
//                   Delhi - 110092<br />
//                   <span className="block mt-2 text-orange-400">Open Map</span>
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <a 
//                 href="tel:+918109645082" 
//                 className="flex items-center group text-lg hover:text-orange-400 transition-colors"
//               >
//                 <Phone className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
//                 <span className="truncate">+91-8109645082</span>
//               </a>
//               <a 
//                 href="mailto:contact@orangebooks.com" 
//                 className="flex items-center group text-lg hover:text-orange-400 transition-colors"
//               >
//                 <Mail className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
//                 <span className="truncate">publish@bignotepublications.com</span>
//               </a>
//             </div>
//           </div>

//           {/* Dynamic Links Sections */}
//           {Object.entries(footerLinks).map(([title, links]) => (
//             <div key={title} className="space-y-4 lg:col-span-1">
//               <h3 className="text-white text-lg font-semibold mb-4 border-l-4 border-orange-500 pl-4">
//                 {title}
//               </h3>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link.name}>
//                     <a
//                       href={link.href}
//                       className="flex items-center hover:text-orange-400 transition-colors group"
//                     >
//                       <ChevronRight className="w-4 h-4 mr-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
//                       {link.name}
//                       <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-700 mb-12" />

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start gap-8">
//           {/* Branding & Socials */}
//           <div className="space-y-6 w-full md:max-w-sm">
//             <div className="space-y-2">
//               <h2 className="text-2xl font-bold text-white">
//                 BigNote<span className="text-orange-500"> Publication</span>
//               </h2>
//               <p className="text-sm text-gray-400">
//                 Empowering storytellers worldwide since 2015
//               </p>
//             </div>
            
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition-colors"
//                   aria-label={social.label}
//                 >
//                   <social.icon className="w-6 h-6 text-gray-300 hover:text-white" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Newsletter */}
//           <div className="w-full md:max-w-xl space-y-4">
//             <h3 className="text-white text-lg font-semibold">Stay Updated</h3>
//             <div className="flex gap-3 flex-col sm:flex-row">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//               <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 justify-center">
//                 Subscribe
//                 <ArrowUpRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>

        
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Phone, 
  MapPin,
  ChevronRight,
  Mail,
  ArrowUpRight
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Publishing': [
      { name: 'Get Started', href: '#' },
      { name: 'Pricing Plans', href: '#' },
      { name: 'Royalty Calculator', href: '#' },
      { name: 'Distribution', href: '#' }
    ],
    'Resources': [
      { name: 'Author Hub', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Style Guide', href: '#' },
      { name: 'Help Center', href: '#' }
    ],
    'Company': [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Success Stories', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300 py-16 px-4 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4511E]/5 to-transparent pointer-events-none" />
      
      {/* Blurred background elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#F4511E]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
          {/* Contact Section */}
          <div className="lg:col-span-2 space-y-6 pr-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#F4511E]/20 p-3 rounded-lg flex-shrink-0">
                <MapPin className="w-8 h-8 text-[#F4511E]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-white text-xl font-bold">BigNote HQ</h3>
                <p className="text-sm leading-relaxed">
                  Smriti Nagar, Bhilai<br />
                  Delhi - 110092<br />
                  <span className="block mt-2 text-[#F4511E] hover:text-[#F4511E]/90 transition-colors cursor-pointer">
                    Open Map
                  </span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href="tel:+918109645082" 
                className="flex items-center group text-lg hover:text-[#F4511E] transition-colors"
              >
                <Phone className="w-5 h-5 mr-3 text-[#F4511E] flex-shrink-0" />
                <span className="truncate">+91-8109645082</span>
              </a>
              <a 
                href="mailto:contact@orangebooks.com" 
                className="flex items-center group text-lg hover:text-[#F4511E] transition-colors"
              >
                <Mail className="w-5 h-5 mr-3 text-[#F4511E] flex-shrink-0" />
                <span className="truncate">publish@bignotepublications.com</span>
              </a>
            </div>
          </div>

          {/* Dynamic Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4 lg:col-span-1">
              <h3 className="text-white text-lg font-semibold mb-4 border-l-4 border-[#F4511E] pl-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center hover:text-[#F4511E] transition-colors group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-[#F4511E] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {link.name}
                      <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Branding & Socials */}
          <div className="space-y-6 w-full md:max-w-sm">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">
                BigNote<span className="text-[#F4511E]"> Publications</span>
              </h2>
              <p className="text-sm text-gray-400">
                Empowering storytellers worldwide since 2015
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-gray-800 hover:bg-[#F4511E] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:max-w-xl space-y-4">
            <h3 className="text-white text-lg font-semibold">Stay Updated</h3>
            <div className="flex gap-3 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4511E]"
              />
              <button className="bg-[#F4511E] hover:bg-[#F4511E]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 justify-center">
                Subscribe
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;