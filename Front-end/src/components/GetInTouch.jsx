import React from "react";
import { styled } from "@mui/material/styles";
import CardTitle from "./CardTitle.jsx";

const contact = [
  { title: "Address", content: "1234 Main Street, Anytown, USA" },
  { title: "phone", content: "0916417183" },
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

const Spacing = styled("div")({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  whiteSpace: "nowrap",
  margin: "0 10px",
});

const Time = styled("div")({
  flexShrink: 0,
});

const GetInTouch = () => {
  return (
    <div>
      <CardTitle title="Get In Touch" />
      <div className="text-gray-50">
      {contact.map((entry, index) => (
        <Rows key={index}>
          <Day>{entry.title}</Day>
          <Spacing />
          <Time>{entry.content}</Time>
        </Rows>
      ))}
      </div>
    </div>
  );
};

export default GetInTouch;
