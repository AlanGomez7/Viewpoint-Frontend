import { Box } from "@mui/material";
import FeedsCard from "./Cards/FeedsCard";
import StoryCarousel from "./StoryCarousel";

export default function Contents() {
  return (
    <>
      <StoryCarousel />
      <Box className="flex flex-col lg:my-7">
        <FeedsCard />
        <FeedsCard />
        <FeedsCard />
      </Box>
    </>
  );
}
