import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { squareImage } from "../../constants/constants";
import { Button, Typography } from "@mui/material";

export default function UserTiles() {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center"}}
      gap={4}
      paddingTop={4}   
    >
      <CardMedia
        className="rounded-full bg-cover"
        component="img"
        image={squareImage}
        sx={{ width: "50px" }}
      />
      <Box>
        <Typography paddingTop={1}>Alan gomez</Typography>
        <Button sx={{ textTransform: "none" }}>Switch</Button>
      </Box>
    </Box>
  );
}
