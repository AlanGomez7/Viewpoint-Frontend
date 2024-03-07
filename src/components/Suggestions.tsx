import { Box } from "@mui/material";
import React from "react";
import UserTiles from "./Cards/UserTiles";

function Suggestions() {
  return (
    <Box className="bg-inherit px-11 hidden xl:block grow">
      <UserTiles />
      <UserTiles />
      <UserTiles />
    </Box>
  );
}

export default Suggestions;
