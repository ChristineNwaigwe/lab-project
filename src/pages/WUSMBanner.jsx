// src/pages/WUSMBanner.jsx
import React from 'react';
import './WUSMBanner.css';

const WUSMBanner = () => {
  return (
    <div className="wusm-simple-banner">
      <a href="https://medicine.wustl.edu" target="_blank" rel="noopener noreferrer">
        <img
          id="screen-logo"
          src="https://medicine.wustl.edu/app/themes/medicine/_/img/washu-medicine-1l-reverse.svg"
          alt="WashU Medicine"
        />
      </a>
    </div>
  );
};

export default WUSMBanner;
