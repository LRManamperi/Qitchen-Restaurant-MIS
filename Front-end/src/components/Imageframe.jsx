import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const RoundedImage = styled(Box)(({ theme }) => ({
  display: "block",
  width: "100%",
  height: "auto",
  borderRadius: "7px",
}));

const ImageFrame = () => {
  return (
    <div>
      <RoundedImage>
        <img
          src="/images/Image4.png"
          alt="placeholder"
          style={{ width: "100%", height: "auto", borderRadius: "inherit" }}
        />
      </RoundedImage>
    </div>
  );
};

export default ImageFrame;
