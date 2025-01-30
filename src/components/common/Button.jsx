// src/components/common/Button.jsx
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { getBgColor, getTextColor } from '../../config/colors';
import colors from '../../config/colors';

const Button = forwardRef(({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  disabled = false,
  ...props
}, ref) => {
  const variants = {
    primary: `${getBgColor(colors.primary.main)} ${getTextColor('white')} hover:${getBgColor(colors.primary.hover)}`,
    secondary: `${getBgColor(colors.secondary.main)} ${getTextColor('white')} hover:${getBgColor(colors.secondary.dark)}`,
    outline: `border border-gray-200 ${getTextColor(colors.text.primary)} hover:${getBgColor('gray-100')}`,
    ghost: `${getTextColor(colors.primary.main)} hover:${getBgColor(colors.primary.background)}`
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      ref={ref}
      className={`
        inline-flex items-center justify-center rounded-md font-medium
        transition-colors focus:outline-none focus:ring-2 focus:ring-${colors.primary.main}/50
        disabled:pointer-events-none disabled:opacity-50
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool
};

export default Button;