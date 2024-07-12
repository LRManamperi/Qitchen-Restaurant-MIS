import React from "react";
import Imageframe from "../components/Imageframe.jsx";
import Map from "../components/Map.jsx";
import OpeningHours from "../components/OpeningHours.jsx";
import GetInTouch from "../components/GetInTouch.jsx";

function Contact() {
  return (
    <div className="p-3">
      <div className="flex">
        <div className="w-1/2">
          <Imageframe />
        </div>
        <div className="w-1/2 ml-3 flex flex-col">
          <div className="flex flex-1 mb-3">
            <div className="w-1/2 border-2 border-sky-100 rounded-lg mr-3">
              <OpeningHours />
            </div>

            <div className="w-1/2 grid grid-cols-2 gap-2">
              <Imageframe />
              <Imageframe />
              <Imageframe />
              <Imageframe />
            </div>
          </div>
          <div className="flex flex-1">
            <div className="w-1/2 border-2 border-sky-100 rounded-lg">
              <Map />
            </div>
            <div className="w-1/2 border-2 border-sky-100 rounded-lg ml-3">
              <GetInTouch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
