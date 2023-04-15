import { grey, purple } from "@mui/material/colors";

export const TitleStyle = {
  fontSize: "2rem",
  fontFamily: "unset",
  background: `-webkit-linear-gradient(${grey["50"]}, ${purple["800"]})`,
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
} as const;

export const HeaderBox = {
  padding: "9px",
  margin: "0 15px",
  borderBottom: `2px dotted ${grey["400"]}`,
} as const;
