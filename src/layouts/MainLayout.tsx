import React from "react";
import Navbar from "../components/navbar/Navbar";
import NavbarNew from "../components/navbar/NavbarNew";
import { Box } from "@mui/material";
import MobileHeaderNav from "../components/navbar/MobileHeaderNav";
import MobileFooterNav from "../components/navbar/MobileFooterNav";

type props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: props) {
  // return (
  //   <div className="flex h-dvh w-dvw flex-col lg:flex-row">
  //     <div className="hidden lg:block">
  //       <NavbarNew />
  //     </div>
  //     <div className="lg:hidden">
  //       <MobileTopNav />
  //     </div>
  //     {children}
  //     <div className="lg:hidden">
  //       <MobileNavBar />
  //     </div>
  //   </div>
  // );

  return (
    <Box sx={{ display: { lg: "flex", sm: "block" } }}>
      <NavbarNew />
      <MobileHeaderNav />
      {children}
      <MobileFooterNav />
    </Box>
  );
}

{
  /* <Box sx={{ display: { lg: "none", sm: "block" } }}>
</Box>
<Box>{children}</Box>
<Box sx={{ display: { lg: "none", sm: "block" } }}>
</Box> */
}
