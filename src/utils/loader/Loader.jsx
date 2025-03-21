import React from 'react';

const Loader = ({ size }) => {
  return (
    <div className={`${ size ? `w-${size} h-${size}` : "w-6 h-6" } border-2 border-t-transparent border-white rounded-full animate-spin`} />
  );
}

export default Loader;