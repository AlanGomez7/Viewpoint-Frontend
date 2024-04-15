import React from "react";
import NavbarNew from "../components/navbar/NavbarNew";
import { Box } from "@mui/material";
import MobileHeaderNav from "../components/navbar/MobileHeaderNav";
import MobileFooterNav from "../components/navbar/MobileFooterNav";
import UserTiles from "../components/Cards/UserTiles";
import Suggestions from "../components/Suggestions";

type props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: props) {
  return (
    <Box className="flex h-dvh">
      <Box
        className="lg:hidden md:hidden"
        position={"fixed"}
        top={0}
        minWidth={"100dvw"}
        zIndex={1}
      >
        <MobileHeaderNav />
      </Box>

      <NavbarNew />
      <Box className="h-dvh overflow-y-auto grow basis-2/4">{children}</Box>
      <Suggestions/>
      <Box
        className="lg:hidden md:hidden"
        position={"fixed"}
        bottom={0}
        minWidth={"100dvw"}
      >
        <MobileFooterNav />
      </Box>
    </Box>
  );
}
