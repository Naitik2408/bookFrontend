
import { BookOpen, Globe, Trophy, Users, Clock, Star,PenTool } from 'lucide-react';
import PropTypes from 'prop-types';

const StatCard = ({ icon: Icon, value, suffix, label }) => (
  <div className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border-2 border-orange-50 hover:border-orange-100 transition-all">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-amber-700 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-serif font-bold text-gray-800">{value}</span>
          {suffix && <span className="text-2xl text-gray-600">{suffix}</span>}
        </div>
      </div>
      <p className="text-lg text-gray-600 font-sans">{label}</p>
    </div>
  </div>
);

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  value: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  label: PropTypes.string.isRequired
};

const PublishingSuccess = () => {
  const stats = [
    {
      icon: BookOpen,
      value: "40K",
      suffix: "+",
      label: "Books Published Across Genres"
    },
    {
      icon: Globe,
      value: "150",
      suffix: "+",
      label: "Countries Reached Worldwide"
    },
    {
      icon: Star,
      value: "98%",
      label: "Author Satisfaction Rate"
    },
    {
      icon: Users,
      value: "1.2M",
      label: "Engaged Community Members"
    },
    {
      icon: Clock,
      value: "24",
      suffix: "h",
      label: "Average Launch Time"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-amber-50 to-orange-50 py-28 px-4 border-t border-orange-100 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-40 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-6 inline-flex items-center gap-2 bg-orange-100 px-6 py-2.5 rounded-full">
            <Trophy className="text-orange-600" size={24} />
            <span className="text-orange-600 font-medium text-lg">Proven Success</span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-5 leading-tight">
            Accelerate Your <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
              Publishing Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            At OrangeBooks, we streamline the entire publishing process through decades of expertise and cutting-edge technology
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Testimonial */}
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg border-2 border-orange-50">
            <blockquote className="text-2xl italic text-gray-700 mb-8 leading-relaxed">
              "The team at OrangeBooks redefined publishing efficiency. Their seamless process helped my novel reach #1 in 
              3 countries within weeks of release. Truly exceptional service!"
            </blockquote>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-600 to-amber-700 p-1">
                <img 
                  src="/author-portrait.jpg" 
                  alt="Author" 
                  className="w-full h-full rounded-full object-cover border-2 border-white"
                />
              </div>
              <div>
                <p className="text-xl font-serif font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-gray-600 font-sans">Bestselling Author & Industry Thought Leader</p>
              </div>
            </div>
          </div>

          {/* Featured Stat */}
          <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-10 rounded-2xl shadow-2xl">
            <div className="text-white text-center">
              <div className="text-5xl font-serif font-bold mb-4">10+</div>
              <h3 className="text-2xl font-semibold mb-4">Years Publishing Excellence</h3>
              <p className="text-orange-100 font-sans">
                Trusted by authors worldwide since 2013
              </p>
              <div className="mt-8 flex justify-center gap-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-300 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border-2 border-orange-50 hover:border-orange-100 transition-all">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-amber-700 flex items-center justify-center">
              <PenTool className="w-5 h-5 text-white" />
            </div>
            <p className="text-lg font-medium text-gray-800">
              Ready to begin your publishing journey?{' '}
              <span className="text-orange-600 cursor-pointer hover:underline">
                Start Now →
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishingSuccess;