import React from "react";
import NavbarNew from "../components/navbar/NavbarNew";
import { Box } from "@mui/material";
import MobileHeaderNav from "../components/navbar/MobileHeaderNav";
import MobileFooterNav from "../components/navbar/MobileFooterNav";
import UserTiles from "../components/Cards/UserTiles";

type props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: props) {
  return (
    <Box className="lg: flex h-dvh">
      <NavbarNew />
      <Box
        position={"fixed"}
        top={0}
        minWidth={"100dvw"}
        zIndex={1}
        sx={{ display: { sm: "block", md: "none", lg: "none" } }}
      >
        <MobileHeaderNav />
      </Box>
      
      {children}
      <Box
        position={"fixed"}
        bottom={0}
        minWidth={"100dvw"}
        // zIndex={1}
        sx={{ display: { sm: "block", md: "none", lg: "none" } }}
      >
        <MobileFooterNav />
      </Box>
    </Box>
  );
}
