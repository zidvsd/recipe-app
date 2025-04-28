import React from "react";

const Blob = () => {
  return (
    <div className="custom-container mx-auto z-[-1] relative h-full">
      <svg
        className="absolute top-0 right-0 translate-x-4 -translate-y-2"
        id="visual"
        viewBox="0 0 960 540"
        width="960"
        height="540"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <rect x="0" y="0" width="960" height="540" fill="#fff" />
        <defs>
          <linearGradient id="grad1_0" x1="43.8%" y1="0%" x2="100%" y2="100%">
            <stop offset="14.44%" stopColor="#fbd5ce" stopOpacity="1" />
            <stop offset="85.55%" stopColor="#fbd5ce" stopOpacity="1" />
          </linearGradient>
        </defs>

        <g transform="translate(960, 0)">
          <path
            d="M0 378C-32.9 359.4 -65.8 340.8 -108.8 334.8C-151.7 328.7 -204.8 335.3 -222.2 305.8C-239.6 276.3 -221.3 210.9 -243.5 176.9C-265.7 142.9 -328.4 140.4 -357.6 116.2C-386.8 91.9 -382.4 46 -378 0L0 0Z"
            fill="url(#grad1_0)"
          />
        </g>
      </svg>
    </div>
  );
};

export default Blob;
