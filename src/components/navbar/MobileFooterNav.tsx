import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import {
  Home,
  Face,
  SearchRounded,
  AddCircleOutline,
  VideoCall,
} from "@mui/icons-material";

export default function MobileFooterNav() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "inherit",
        // display: { lg: "none", sm: "block" },
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#121212" }}>
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <IconButton size="large" edge="end" color="inherit" aria-label="Menu">
            <Home />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Menu"
          >
            <SearchRounded />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Menu"
          >
            <AddCircleOutline />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Menu"
          >
            <VideoCall />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Menu"
          >
            <Face />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
