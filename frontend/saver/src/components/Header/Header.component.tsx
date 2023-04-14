import React from "react";
import { Box, Container } from "@mui/material";
import './header.css';

const HeaderComponent: React.FC<any> = () => {
  return (
    <>
        <Box className="header-box">
          <h1>Data Saver</h1>
        </Box>
    </>
  );
};

export default HeaderComponent;
