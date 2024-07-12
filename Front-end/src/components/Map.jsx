import React from "react";

function Map() {
  return (
    <div>
      <div
        className="mapouter"
        style={{
          position: "relative",
          textAlign: "right",
          height: "700",
          width: "100%",
        }}
      >
        <div
          className="gmap_canvas"
          style={{
            overflow: "hidden",
            background: "none !important",
            height: "100%",
            width: "100%",
          }}
        >
          <iframe
            title="Location Map"
            width="100%"
            height="700"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Moratuwa%20hot%20stone%20pizza&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Map;
