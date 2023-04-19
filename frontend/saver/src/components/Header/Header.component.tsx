import React from "react";
import { Box, Typography } from "@mui/material";
import { HeaderBox, TitleStyle } from "./Header.styles";

const HeaderComponent: React.FC<any> = () => {
  return (
    <>
      <Box sx={HeaderBox}>
        <Typography sx={TitleStyle} component={"h1"} color={"ThreeDDarkShadow"}>
            
        </Typography>
      </Box>
    </>
  );
};

export default HeaderComponent;
