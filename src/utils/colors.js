// src/config/colors.js

export const colors = {
    primary: {
      main: 'orange-500',
      light: 'orange-400',
      dark: 'orange-600',
      text: 'orange-500',
      hover: 'orange-600',
      background: 'orange-50'
    },
    secondary: {
      main: 'gray-600',
      light: 'gray-400',
      dark: 'gray-800',
      text: 'gray-600'
    },
    neutral: {
      main: 'neutral-800',
      light: 'neutral-600',
      lighter: 'neutral-400',
      dark: 'neutral-900',
      background: 'neutral-100'
    },
    success: {
      main: 'green-500',
      light: 'green-400',
      dark: 'green-600',
      text: 'green-500'
    },
    error: {
      main: 'red-500',
      light: 'red-400',
      dark: 'red-600',
      text: 'red-500'
    },
    warning: {
      main: 'yellow-500',
      light: 'yellow-400', 
      dark: 'yellow-600',
      text: 'yellow-500'
    },
    background: {
      default: 'white',
      paper: 'gray-50',
      dark: 'gray-900'
    },
    text: {
      primary: 'gray-900',
      secondary: 'gray-600',
      disabled: 'gray-400'
    },
    common: {
      white: 'white',
      black: 'black'
    }
  };
  
  // Utility function to get full Tailwind class with prefix
  export const getColorClass = (color, prefix = 'bg') => {
    return `${prefix}-${color}`;
  };
  
  // Text color utility
  export const getTextColor = (color) => getColorClass(color, 'text');
  
  // Background color utility  
  export const getBgColor = (color) => getColorClass(color, 'bg');
  
  // Border color utility
  export const getBorderColor = (color) => getColorClass(color, 'border');
  
  export default colors;