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
     <ins className="adsbygoogle"
     style={{display:'block'}}
     data-ad-client="ca-pub-5317982228910759"
     data-ad-slot="7910152987"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
    </div>
  );
};

export default Ads;
