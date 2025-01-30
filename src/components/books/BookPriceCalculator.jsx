import PropTypes from 'prop-types';
import { useState } from "react";
import { BookOpen, Ruler, Printer, Palette, Layers, Tag, CheckCircle, Edit2, Trash2, Clock } from "lucide-react";

// Card Components
const Card = ({ className = "", children, ...props }) => (
  <div
    className={`rounded-xl border bg-white shadow-sm transition-all hover:shadow-md ${className}`}
    {...props}
  >
    {children}
  </div>
);
Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 pb-2 ${className}`} {...props}>
    {children}
  </div>
);
CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

const CardTitle = ({ className = "", children, ...props }) => (
  <h3
    className={`text-2xl font-serif font-semibold leading-none tracking-tight text-gray-900 ${className}`}
    {...props}
  >
    {children}
  </h3>
);
CardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);
CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

// Button Component
const Button = ({ 
  className = "",
  variant = "default",
  children,
  ...props
}) => {
  const variants = {
    default: "bg-orange-600 text-white hover:bg-orange-700",
    outline: "border border-gray-200 bg-white hover:bg-gray-50 text-gray-700"
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-medium
        transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/50
        disabled:pointer-events-none disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outline"]),
  children: PropTypes.node
};

// Select Component
const Select = ({ label, className = "", children, ...props }) => (
  <div className="space-y-2">
    {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
    <select
      className={`w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white 
        focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50
        hover:border-orange-200 transition-colors ${className}`}
      {...props}
    >
      {children}
    </select>
  </div>
);
Select.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

// Input Component
const Input = ({ className = "", startIcon, ...props }) => (
  <div className="relative">
    {startIcon && (
      <div className="absolute inset-y-0 left-0 flex items-center pl-4">
        {startIcon}
      </div>
    )}
    <input
      className={`flex h-12 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm
        bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50
        disabled:cursor-not-allowed disabled:opacity-50 
        ${startIcon ? 'pl-11' : ''}
        hover:border-orange-200 transition-colors ${className}`}
      {...props}
    />
  </div>
);
Input.propTypes = {
  className: PropTypes.string,
  startIcon: PropTypes.node
};

// Main Component
const BookPriceCalculator = () => {
  const [formData, setFormData] = useState({
    size: "",
    quality: "",
    frontColor: "",
    backColor: "",
    paperType: "",
    coating: "",
    couponCode: "",
    quantity: "100"
  });

  const [calculatedPrice, setCalculatedPrice] = useState({
    subtotal: 100,
    tax: 18,
    total: 118
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add actual price calculation logic here
    const newPrice = {
      subtotal: 100 * parseInt(formData.quantity),
      tax: 18 * parseInt(formData.quantity),
      total: 118 * parseInt(formData.quantity)
    };
    setCalculatedPrice(newPrice);
  };

  return (
    <div className="w-full bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-orange-600 mb-4">
            <BookOpen size={32} strokeWidth={1.5} />
            <span className="text-2xl font-bold">Price Estimator</span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-gray-900">
            Custom Book Pricing Calculator
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Configure your publishing specifications and receive instant cost estimation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Configuration Section */}
          <Card className="border-orange-100 hover:border-orange-200 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Ruler size={24} strokeWidth={1.5} className="text-orange-600" />
                <CardTitle>Book Configuration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-900">
                    <span className="p-1.5 bg-orange-100 rounded-lg">
                      <Printer size={18} strokeWidth={1.5} className="text-orange-600" />
                    </span>
                    <h3 className="font-medium">Print Specifications</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      label="Book Size"
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Size</option>
                      <option value="5x8">5&quot; x 8&quot;</option>
                      <option value="6x9">6&quot; x 9&quot;</option>
                      <option value="8x10">8&quot; x 10&quot;</option>
                    </Select>
                    <Select
                      label="Print Quality"
                      name="quality"
                      value={formData.quality}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Quality</option>
                      <option value="standard">Standard</option>
                      <option value="premium">Premium</option>
                      <option value="deluxe">Deluxe</option>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-900">
                    <span className="p-1.5 bg-orange-100 rounded-lg">
                      <Palette size={18} strokeWidth={1.5} className="text-orange-600" />
                    </span>
                    <h3 className="font-medium">Color Options</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      label="Front Cover"
                      name="frontColor"
                      value={formData.frontColor}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Color</option>
                      <option value="full-color">Full Color</option>
                      <option value="bw">Black &amp; White</option>
                    </Select>
                    <Select
                      label="Back Cover"
                      name="backColor"
                      value={formData.backColor}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Color</option>
                      <option value="full-color">Full Color</option>
                      <option value="bw">Black &amp; White</option>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-900">
                    <span className="p-1.5 bg-orange-100 rounded-lg">
                      <Layers size={18} strokeWidth={1.5} className="text-orange-600" />
                    </span>
                    <h3 className="font-medium">Material Details</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      label="Paper Type"
                      name="paperType"
                      value={formData.paperType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Paper</option>
                      <option value="cream">Cream</option>
                      <option value="white">Bright White</option>
                      <option value="recycled">Recycled</option>
                    </Select>
                    <Select
                      label="Coating"
                      name="coating"
                      value={formData.coating}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Coating</option>
                      <option value="matte">Matte</option>
                      <option value="gloss">Gloss</option>
                      <option value="none">None</option>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-900">
                    <span className="p-1.5 bg-orange-100 rounded-lg">
                      <Tag size={18} strokeWidth={1.5} className="text-orange-600" />
                    </span>
                    <h3 className="font-medium">Discount Code</h3>
                  </div>
                  <Input
                    type="text"
                    name="couponCode"
                    value={formData.couponCode}
                    onChange={handleInputChange}
                    placeholder="Enter coupon code"
                    startIcon={<Tag size={16} strokeWidth={1.5} className="text-gray-400" />}
                  />
                </div>

                <Button className="w-full text-base font-medium">
                  Calculate Total Price
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Order Summary Section */}
          <Card className="border-amber-100 bg-amber-50/50 hover:border-amber-200 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CheckCircle size={24} strokeWidth={1.5} className="text-amber-600" />
                <CardTitle>Order Summary</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium text-gray-700">Selected Configuration</h4>
                      <p className="text-sm text-gray-600">Premium Hardcover</p>
                    </div>
                    <span className="text-3xl font-bold text-amber-600">
                      ₹{calculatedPrice.total}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Quantity</span>
                    <Select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-32"
                    >
                      <option value="100">100</option>
                      <option value="200">200</option>
                      <option value="500">500</option>
                      <option value="1000">1000</option>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Dimensions</span>
                      <span className="font-medium">
                        {formData.size || "Not selected"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Paper Type</span>
                      <span className="font-medium">
                        {formData.paperType || "Not selected"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-amber-100 pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{calculatedPrice.subtotal}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Taxes (18%)</span>
                      <span className="font-medium">₹{calculatedPrice.tax}</span>
                    </div>
                    <div className="flex items-center justify-between text-amber-600">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold text-2xl">₹{calculatedPrice.total}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-100 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock size={20} strokeWidth={1.5} className="text-amber-600" />
                    <div>
                      <p className="font-medium text-amber-700">Price Lock Guarantee</p>
                      <p className="text-sm text-amber-600">
                        Quoted price valid for 48 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <Button variant="outline" className="gap-2 hover:bg-amber-100">
                    <Edit2 size={16} strokeWidth={1.5} /> Edit
                  </Button>
                  <Button variant="outline" className="gap-2 text-red-600 hover:bg-red-50">
                    <Trash2 size={16} strokeWidth={1.5} /> Remove
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookPriceCalculator;