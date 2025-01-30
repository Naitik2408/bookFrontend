import PropTypes from 'prop-types';
import { Users, FileText, Settings, UserCheck } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon }) => (
  <div className="flex gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg">
        <Icon className="w-6 h-6 text-orange-600" strokeWidth={1.5} />
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-base max-w-md">{description}</p>
    </div>
  </div>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired
};

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Dedicated Teams",
      description: "Benefit from our committed teams who ensure your success is personal. Count on expert guidance and exceptional results throughout your project journey."
    },
    {
      icon: FileText,
      title: "Comprehensive Documentation",
      description: "Integrate with ease using ScrewFast's exhaustive guides and libraries. Achieve seamless product adoption with our full suite of documentation designed for your success."
    },
    {
      icon: Settings,
      title: "Simplicity and Affordability",
      description: "Find easy-to-use, affordable solutions with ScrewFast's line of tools and equipment. Our products make procurement simple and keep projects within budget."
    },
    {
      icon: UserCheck,
      title: "User-Centric Design",
      description: "Experience the difference with ScrewFast's user-focused design — where functionality meets practicality for an enhanced work experience."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Text */}
          <div className="lg:w-5/12 space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Meeting Author Needs
              <span className="block mt-2 text-orange-600">With Precision & Care</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At ScrewFast, we tackle the unique challenges encountered in the hardware and construction sectors. 
              From cutting-edge tools to expert services, we re dedicated to helping you overcome obstacles and 
              achieve your goals.
            </p>
          </div>

          {/* Right Column - Features */}
          <div className="lg:w-8/12">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;