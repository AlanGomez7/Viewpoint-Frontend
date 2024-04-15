import { Box } from "@mui/material";
import FeedsCard from "./Cards/FeedsCard";
import StoryCarousel from "./StoryCarousel";

export default function Contents() {
  return (
    <>
      <Box className="scroll-smooth overflow-x-auto max-h-dvh">
        <StoryCarousel/>
        <FeedsCard />
        <FeedsCard />
        <FeedsCard />
      </Box>
    </>
  );
}
