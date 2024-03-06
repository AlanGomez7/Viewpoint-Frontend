import { Box } from "@mui/material";
import FeedsCard from "./Cards/FeedsCard";
import StoryCard from "./Cards/StoryCard";
import UserTiles from "./Cards/UserTiles";

export default function Contents() {
  return (
    <>
      <Box className="overflow-y-auto flex flex-col items-center ">
        <Box className="bg-gray-50 w-dvw min-h-28 mb-11">
          <StoryCard />
        </Box>
        <FeedsCard />
        <FeedsCard />
        <FeedsCard />
      </Box>
    </>
  );
}
