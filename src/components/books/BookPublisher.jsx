'use client';
import { BookOpen, PenTool, Globe, Award, Edit3, BarChart } from 'lucide-react';

const BookPublisher = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 font-sans">
      <div className="container mx-auto px-4 py-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="max-w-2xl">
            <div className="mb-8 flex items-center gap-3 bg-orange-100 w-fit px-4 py-2 rounded-full">
              <BookOpen className="text-orange-600" size={20} />
              <span className="text-orange-600 font-medium">OrangeBooks Publishing</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              From Manuscript to<br />
              <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                Global Bestseller
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Empower your storytelling with our end-to-end publishing ecosystem.<br /> 
              Trusted by 5,000+ authors across 24 countries.
            </p>

            {/* Interactive Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {[
                { icon: Globe, title: 'Global Reach', value: '24 Countries' },
                { icon: Award, title: 'Awards Won', value: '150+' },
                { icon: Edit3, title: 'Editors', value: '50 Experts' },
                { icon: BarChart, title: 'Success Rate', value: '95%' },
              ].map(({ icon: Icon, title, value }) => (
                <div 
                  key={title}
                  className="p-4 bg-white rounded-xl border border-orange-50 hover:border-orange-100 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-600 transition-colors">
                      <Icon className="text-orange-600 group-hover:text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{title}</p>
                      <p className="text-lg font-semibold text-orange-600">{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Carousel */}
            <div className="mb-8 relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-3xl text-orange-200">
                “
              </div>
              <div className="pl-8">
                <p className="text-gray-700 italic mb-3">
                  “Working with OrangeBooks was transformative. Their team turned my draft into 
                  a Wall Street Journal bestseller within months!”
                </p>
                <p className="text-orange-600 font-medium">
                  – Emily Rodriguez, Bestselling Author
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-orange-700 transition-all">
                <PenTool size={20} />
                Start Your Journey
              </button>
              <button className="flex items-center gap-3 px-8 py-4 text-orange-600 border border-orange-200 rounded-xl hover:bg-orange-50 transition-all">
                <BookOpen size={20} />
                View Success Stories
              </button>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="relative h-[600px] bg-gradient-to-br from-orange-100 to-amber-50 rounded-3xl overflow-hidden shadow-xl border-2 border-white">
            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#f59e0b22_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b22_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            {/* Book Showcase */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu group perspective-1000">
              <div className="relative w-64 h-96 transition-transform duration-700 group-hover:rotate-y-12">
                {/* Book Cover */}
                <div className="absolute w-full h-full bg-gradient-to-br from-orange-600 to-amber-700 rounded-lg shadow-2xl transform transition-all group-hover:scale-105">
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="text-white/90">
                      <h3 className="text-xl font-serif font-bold mb-1 [text-shadow:1px_1px_2px_rgba(0,0,0,0.2)]">
                        The Orange Chronicles
                      </h3>
                      <p className="text-sm opacity-80">Emily Rodriguez</p>
                    </div>
                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm" />
                  </div>
                  {/* Spine */}
                  <div className="absolute left-0 top-0 w-3 h-full bg-gradient-to-b from-orange-700 to-amber-800 rounded-l-lg" />
                </div>
                
                {/* Pages Stack */}
                <div className="absolute -left-4 top-4 w-full h-full">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-full bg-white/90 rounded-lg shadow-md"
                      style={{
                        transform: `translateX(${i * 8}px) translateY(${i * 8}px)`,
                        zIndex: -i
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Award Ribbon */}
            <div className="absolute top-8 left-8 animate-float">
              <div className="relative bg-amber-600 text-white px-6 py-3 rounded-lg shadow-lg before:absolute before:-top-2 before:left-0 before:w-0 before:h-0 before:border-8 before:border-transparent before:border-b-amber-600">
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-amber-200" />
                  <span className="font-medium">Bestseller Edition</span>
                </div>
              </div>
            </div>

            {/* Distribution Globe */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg w-64">
              <div className="text-gray-800 mb-3 font-medium flex items-center gap-2">
                <Globe size={18} className="text-orange-600" />
                Worldwide Reach
              </div>
              <div className="relative w-full h-40">
                <div className="absolute inset-0 bg-[url('/world-map.svg')] bg-contain bg-no-repeat bg-center opacity-50" />
                <div className="absolute top-[45%] left-[30%] animate-pulse">
                  <div className="w-3 h-3 bg-orange-500 rounded-full ring-4 ring-orange-200" />
                </div>
                <div className="absolute top-[35%] left-[50%] animate-pulse delay-150">
                  <div className="w-3 h-3 bg-amber-500 rounded-full ring-4 ring-amber-200" />
                </div>
              </div>
            </div>

            {/* Author Spotlight */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg w-64">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">EJ</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Featured Author</p>
                  <p className="text-sm text-gray-600">Weekly Spotlight</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-px bg-gray-100" />
                <p className="text-sm text-gray-600 italic">
                  "The editorial team's precision transformed my manuscript into a masterpiece."
                </p>
              </div>
            </div>

            {/* Publishing Timeline */}
            <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg w-64">
              <div className="text-gray-800 mb-4 font-medium flex items-center gap-2">
                <PenTool size={18} className="text-orange-600" />
                Creation Journey
              </div>
              <div className="relative pl-2 space-y-4">
                {[
                  { step: 'Concept', icon: '💡', line: true },
                  { step: 'Draft', icon: '📝', line: true },
                  { step: 'Edit', icon: '✒️', line: true },
                  { step: 'Publish', icon: '🎉', line: false }
                ].map((item, index) => (
                  <div key={item.step} className="relative">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm text-gray-700">{item.step}</span>
                    </div>
                    {item.line && (
                      <div className="absolute left-[14px] top-6 bottom-0 w-px bg-gray-100" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </div>
  );
};

export default BookPublisher;