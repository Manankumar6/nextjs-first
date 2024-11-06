'use client'

import React, { useEffect } from 'react';

const Ads = () => {
  useEffect(() => {
    // If you're using Google Adsense, you need to run this to initialize the ads
    if (window) {
      window.adsbygoogle = window.adsbygoogle || [];
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        console.error("Google Ads error", e);
      }
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "250px" }}
        data-ad-client="YOUR-AD-CLIENT-ID" // Replace with your AdSense client ID
        data-ad-slot="YOUR-AD-SLOT-ID" // Replace with your specific ad slot ID
        data-ad-format="auto"
      ></ins>
    </div>
  );
};

export default Ads;
