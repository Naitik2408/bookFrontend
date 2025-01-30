import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Phone, Mail } from 'lucide-react';

export const Header = ({ contactInfo }) => (
  <header className="bg-gradient-to-r from-[#FF6100] to-[#FEA758] text-[#FFE7C8] py-3 shadow-sm">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <Link to="/" className="flex items-center gap-3 group">
        <img 
          src="/src/assets/bignote-logo.png" 
          alt="Bignote Logo" 
          className="h-12 transition-transform group-hover:scale-105"
        />
        <span className="text-2xl font-serif font-bold">Bignote</span>
      </Link>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Phone size={18} />
          <span className="text-sm">{contactInfo.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={18} />
          <span className="text-sm">{contactInfo.email}</span>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  contactInfo: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};