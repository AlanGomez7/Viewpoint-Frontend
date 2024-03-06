import { Box, CardMedia } from "@mui/material";
import { squareImage } from "../../constants/constants";

export default function StoryCard() {
  return (
    <Box>
      <CardMedia
        className="rounded-full bg-cover"
        component="img"
        image={squareImage}
        sx={{ width: "50px" }}
      />
    </Box>
  );
}
