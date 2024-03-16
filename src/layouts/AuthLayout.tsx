import { Box } from "@mui/material";
import React from "react";
import bgImage from "../assets/bgSignin.jpg"

type AuthLayoutProp = {
  children: React.ReactNode;
};
function AuthLayout({ children }: AuthLayoutProp) {
  return (
    <Box
    className="bg-contain bg-no-repeat bg-center"
      height={"100dvh"}
      display={"flex"}
      justifyContent={"center"}
      sx={{ placeItems: "center", backgroundImage: `url(${bgImage})`}}
      
    >
      {children}
    </Box>
  );
}

export default AuthLayout;
