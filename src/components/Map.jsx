import React, { useEffect, useRef } from "react";

function GoogleMap({ data }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    
    const { lat, lng } = data.address.coordinates|| {};
    console.log(lat);
    if (lat !== undefined && lng !== undefined) {
      const iframe = iframeRef.current;
      iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`;
    }
  }, [data]);

  return (
    <div>
        
      <iframe
        ref={iframeRef}
        title="Google Map"
        height="300"
        width="100%"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
