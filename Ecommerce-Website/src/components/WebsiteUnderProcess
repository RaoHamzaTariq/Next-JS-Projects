'use client';

import { useState } from 'react';

const WebsiteUnderProcess: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-3 px-4 flex justify-between items-center z-50">
      <span>This website is under process.</span>
      <button
        className="text-white text-2xl leading-none focus:outline-none hover:text-red-400"
        onClick={handleClose}
      >
        &times;
      </button>
    </div>
  );
};

export default WebsiteUnderProcess;
