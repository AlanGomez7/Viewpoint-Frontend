import { Box, Typography } from "@mui/material";
import UserTiles from "./Cards/UserTiles";

function Suggestions() {
  return (
    <Box className="bg-inherit px-11 hidden xl:block grow">
      <UserTiles isSuggestion={true}/>
      <Typography paddingTop={7}>Suggested for you</Typography>
      <UserTiles isSuggestion={false}/>
      <UserTiles isSuggestion={false}/>
    </Box>
  );
}

export default Suggestions;
