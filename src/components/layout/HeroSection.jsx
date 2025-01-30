import { useState } from 'react';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    publishingBudget: '',
    manuscriptStatus: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative bg-orange-500 py-16 pb-32">
      {/* Wave-like bottom shape */}
      <div className="absolute bottom-0 w-full">
        <svg className="w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white md:pr-8">
            <div className="inline-block bg-white px-4 py-2 rounded-lg">
              <p className="text-orange-600 text-sm font-medium">Welcome to OrangeBooks</p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">
              Transform Your Story Into a{' '}
              <span className="text-white">Published Book</span>
            </h1>

            <p className="text-lg opacity-90" >
              Join thousands of authors who have successfully published their books. Get started with
              our professional publishing services today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 ">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors ">
                Start Publishing
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <img
                  src="/placeholder/32/32"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="/placeholder/32/32"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="/placeholder/32/32"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <p className="text-sm opacity-90">
                Join <span className="font-medium">2,000+</span> published authors
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative lg:pl-8">
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  Get Your Free Publishing Guide
                </h3>

                <div className="space-y-3">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your Full Name"
                      className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Your Phone Number"
                      className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <select
                    name="publishingBudget"
                    className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                    value={formData.publishingBudget}
                    onChange={handleChange}
                  >
                    <option value="">Your Publishing Budget</option>
                    <option value="0-25000">₹0 - ₹25,000</option>
                    <option value="25000-50000">₹25,000 - ₹50,000</option>
                    <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                    <option value="100000+">₹1,00,000+</option>
                  </select>

                  <select
                    name="manuscriptStatus"
                    className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                    value={formData.manuscriptStatus}
                    onChange={handleChange}
                  >
                    <option value="">Your Manuscript Status</option>
                    <option value="completed">Completed</option>
                    <option value="in-progress">In Progress</option>
                    <option value="not-started">Not Started</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors text-base font-semibold"
                  >
                    Get Free Consultation
                  </button>
                </div>

                <p className="text-xs text-gray-600 mt-2 text-center">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="#" className="text-orange-600 hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-orange-600 hover:underline">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;