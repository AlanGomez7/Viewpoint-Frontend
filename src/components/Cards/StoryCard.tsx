import { Box, CardMedia, Typography } from "@mui/material";
import { squareImage } from "../../constants/constants";

export default function StoryCard() {
  return (
    <Box className="flex flex-col items-center shrink-0">
      <CardMedia
        className="rounded-full bg-cover"
        component="img"
        image={squareImage}
        sx={{ width: "60px" }}
      />
      <Typography variant="caption" fontSize={11}>
        Alan._. gomez
      </Typography>
    </Box>
  );
}
