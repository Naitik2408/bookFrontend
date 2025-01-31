import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/authSlice'; // Import the logout action

const colors = {
  text: { 
    primary: 'text-[#FF6100]', 
    hover: 'hover:text-white',
    cream: 'text-[#FFE7C8]',
    dark: 'text-[#434343]'
  },
  bg: { 
    primary: 'bg-[#FF6100]', 
    hover: 'hover:bg-[#FF6100]',
    cream: 'bg-[#FFE7C8]'
  },
};

const ContactInfo = ({ icon, label, value }) => {
  const getIcon = (iconType) => {
    if (iconType === 'phone') {
      return (
        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      );
    }
    return (
      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  };

  return (
    <div className="flex items-center">
      {getIcon(icon)}
      <div>
        <p className="text-sm">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
  icon: PropTypes.oneOf(['phone', 'email']).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

const NavigationLinks = ({ userAuth }) => (
  <div className="hidden md:flex space-x-2">
    {[
      ['Home', '/'],
      ['Book price calculator', '/Book_price_cal'],
      ['Pricing', '/pricing'],
      ['Services', '/services'],
      ['Contact', '/contact'],
    ].map(([label, path], i) => (
      <Link
        key={path}
        to={path}
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
          i === 0 
            ? `${colors.text.primary} font-medium hover:text-[#FEA758]` 
            : `${colors.text.dark} hover:bg-[#FF6100] hover:text-white`
        }`}
      >
        {label}
      </Link>
    ))}
    {userAuth.isLoggedIn && (
      <Link to="/dashboard" className={`px-4 py-2 rounded-lg transition-all duration-300 ${colors.text.dark} hover:bg-[#FF6100] hover:text-white`}>
        Dashboard
      </Link>
    )}
    {userAuth.isLoggedIn && userAuth.user?.user?.role === 'admin' && (
      <Link to="/admin" className={`px-4 py-2 rounded-lg transition-all duration-300 ${colors.text.dark} hover:bg-[#FF6100] hover:text-white`}>
        Admin
      </Link>
    )}
    {!userAuth.isLoggedIn && (
      <Link to="/login" className={`px-4 py-2 rounded-lg transition-all duration-300 ${colors.text.dark} hover:bg-[#FF6100] hover:text-white`}>
        Login
      </Link>
    )}
  </div>
);

const SearchAndLogin = ({ userAuth, handleLogout }) => (
  <div className="hidden md:flex items-center space-x-4">
    <button className={`p-2 rounded-full hover:bg-[#FF6100]/20 transition-all duration-300 ${colors.text.dark}`}>
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    {!userAuth.isLoggedIn ? (
      <Link 
        to="/login" 
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${colors.text.dark} hover:bg-[#FF6100] hover:text-white transition-all duration-300`}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span>Log in</span>
      </Link>
    ) : (
      <button
        onClick={handleLogout}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${colors.text.dark} hover:bg-[#FF6100] hover:text-white transition-all duration-300`}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5m0 10v1m0-10V5" />
        </svg>
        <span>Logout</span>
      </button>
    )}
  </div>
);

const MobileMenu = ({ menuItems, userAuth, handleLogout }) => (
  <div className="md:hidden bg-[#FFF9ED] border-t border-[#FEA758]">
    <div className="container mx-auto px-4 py-2">
      {menuItems.map(([label, path]) => (
        <Link
          key={path}
          to={path}
          className={`block py-3 px-4 my-1 rounded-lg transition-all duration-300 ${
            path === '/' 
              ? `${colors.text.primary} font-medium` 
              : `${colors.text.dark} hover:bg-[#FF6100] hover:text-white`
          }`}
        >
          {label}
        </Link>
      ))}
      {userAuth.isLoggedIn && (
        <Link to="/dashboard" className="block py-2 text-gray-600">
          Dashboard
        </Link>
      )}
      {userAuth.isLoggedIn && userAuth.user?.role === 'admin' && (
        <Link to="/admin" className="block py-2 text-gray-600">
          Admin
        </Link>
      )}
      {!userAuth.isLoggedIn ? (
        <Link to="/login" className="block py-2 text-gray-600">
          Login
        </Link>
      ) : (
        <button
          onClick={handleLogout}
          className="block py-2 text-gray-600 w-full text-left"
        >
          Logout
        </button>
      )}
    </div>
  </div>
);

MobileMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  userAuth: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

const Navbar = () => {
  const userAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/logoutUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies for authentication
      });

      if (response.ok) {
        localStorage.removeItem('token'); 
        dispatch(logout());
        navigate('/login');
      } else {
        console.error('Failed to logout');
      }
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  const menuItems = [
    ['Home', '/'],
    ['Calculator', '/Book_price_cal'],
    ['Pricing', '/pricing'],
    ['Services', '/services'],
    ['Contact', '/contact'],
  ];

  return (
    <nav className="fixed w-full top-0 z-50 shadow-sm">
      <div className={`${colors.bg.primary} ${colors.text.cream} py-4`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/src/assets/orangebookslogo.png" 
              alt="OrangeBooks Logo" 
              className="h-12 transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <ContactInfo icon="email" label="Email Us:" value="publish@orangebooks.in" />
            <div className="h-8 w-px bg-[#FF6100]/50 mx-2"></div>
            <ContactInfo icon="phone" label="Call Us:" value="+91-8109645082" />
          </div>
        </div>
      </div>

      <div className="bg-[#FFF9ED] shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <NavigationLinks userAuth={userAuth} />
            <SearchAndLogin userAuth={userAuth} handleLogout={handleLogout} />
            <button 
              className="md:hidden p-2 text-[#434343] transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && <MobileMenu menuItems={menuItems} userAuth={userAuth} handleLogout={handleLogout} />}
    </nav>
  );
};

export default Navbar;