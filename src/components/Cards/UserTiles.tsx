import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { squareImage } from "../../constants/constants";
import { Button, Typography } from "@mui/material";

type userTilesProp = {
  isSuggestion: boolean;
};

export default function UserTiles({ isSuggestion }: userTilesProp) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center" }}
      gap={4}
      paddingTop={3}
      width={"auto"}
    >
      <CardMedia
        className="rounded-full bg-cover"
        component="img"
        image={squareImage}
        sx={{ width: "50px" }}
      />
      <Box>
        <Typography paddingTop={1}>Alan gomez</Typography>
        {isSuggestion ? (
          <Button sx={{ textTransform: "none" }}>Switch</Button>
        ) : (
          <Button sx={{ textTransform: "none" }}>follow</Button>
        )}
      </Box>
    </Box>
  );
}
