import { Box } from "@mui/material";
import React from "react";
import bgImage from "../assets/bgSignin.jpg"

type AuthLayoutProp = {
  children: React.ReactNode;
};
function AuthLayout({ children }: AuthLayoutProp) {
  return (
    <Box
    className=""
      height={"100dvh"}
      display={"flex"}
      sx={{ placeItems: "center", justifyContent: "center"}}
    >
      {children}
    </Box>
  );
}

export default AuthLayout;
