import { MessageRounded } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Input } from "@mui/material";
import Logo from "../atoms/Logo";

export default function MobileHeaderNav() {
  return (
    <Box
      position={"fixed"}
      top={0}
      minWidth={"100dvw"}
      zIndex={1}
    >
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "auto",
          backgroundColor: "black",
          // display: { lg: "none", sm: "Block" },
        }}
      >
        <AppBar position="static" sx={{ backgroundColor: "#121212" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Logo isTop={true} />
            <Input
              placeholder="search"
              sx={{
                backgroundColor: "salmon",
                paddingLeft: "10px",
                borderRadius: "7px",
              }}
            />

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="Menu"
            >
              <MessageRounded />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}
