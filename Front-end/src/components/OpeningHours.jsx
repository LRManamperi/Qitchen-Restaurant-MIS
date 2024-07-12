import React from "react";
import { styled } from "@mui/material/styles";
import CardTitle from "./CardTitle.jsx";

const days = [
  { day: "Monday", time: "9.00 - 17.00" },
  { day: "Tuesday", time: "9.00 - 17.00" },
  { day: "Wednesday", time: "9.00 - 17.00" },
  { day: "Thursday", time: "9.00 - 17.00" },
  { day: "Friday", time: "9.00 - 17.00" },
  { day: "Saturday", time: "9.00 - 17.00" },
  { day: "Sunday", time: "9.00 - 17.00" },
];

const Rows = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "5px 0", // Added some padding for better spacing
});

const Day = styled("div")({
  flexShrink: 0,
  paddingRight: "10px",
});

const DottedLine = styled("div")({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  whiteSpace: "nowrap",
  margin: "0 10px",
  "&::after": {
    content:
      '"........................................................................................................................................................................................................................"',
    flexGrow: 1,
    fontSize: "12px", // Adjust the font size as needed
    lineHeight: "1",
    letterSpacing: "0",
  },
});

const Time = styled("div")({
  flexShrink: 0,
});

const OpeningHours = () => {
  return (
    <div className="text-sky-100">
      <CardTitle title="Opening Hours" />
      {days.map((entry, index) => (
        <Rows key={index}>
          <Day>{entry.day}</Day>
          <DottedLine />
          <Time>{entry.time}</Time>
        </Rows>
      ))}
    </div>
  );
};

export default OpeningHours;
