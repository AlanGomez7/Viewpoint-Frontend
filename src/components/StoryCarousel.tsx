import { Box, IconButton } from "@mui/material";
import StoryCard from "./Cards/StoryCard";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

function StoryCarousel() {
  const scrollHandlerFunction = (isLeft: boolean) => {
    let container = document.getElementById("carousel-container");
    if (isLeft) {
      container!.scrollBy(-400,0);
    } else {
      container!.scrollBy(400,0);
    }
  };
  return (
    <Box className="flex">
      <div onClick={() => scrollHandlerFunction(true)}>
        <ArrowLeft />
      </div>
      <Box
        className="scroll-smooth overflow-x-auto p-3 flex"
        id="carousel-container"
        gap={2}
      >
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </Box>
      <div onClick={() => scrollHandlerFunction(false)}>
        <ArrowRight />
      </div>
    </Box>
  );
}

export default StoryCarousel;
