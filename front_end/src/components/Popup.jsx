import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup on every page load
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    window.open('https://lulu88.co/?i=lu0a0000102&utm_campaign=lu0a0000102&utm_source=vlxxmoe&utm_medium=popup-600x400', '_blank');
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="relative bg-white rounded-lg shadow-lg animate-fadeIn">
        <button
          className="absolute top-2 right-2 text-3xl text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
          onClick={closePopup}
        >
          ×
        </button>
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-31ab26c7242237bfb98d28665126f5ca"
          alt="Popup Image"
          className="max-w-full h-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Popup;