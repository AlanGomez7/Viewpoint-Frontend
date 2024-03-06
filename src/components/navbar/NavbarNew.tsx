import { Box, List, ListItem, ListItemButton } from "@mui/material";
import {
  AddCircleOutline,
  Face,
  HomeRounded,
  MessageRounded,
  NotificationImportant,
  SearchRounded,
  VideoCall,
} from "@mui/icons-material";
import { ListItemContent, ListItemDecorator } from "@mui/joy";
import Logo from "../atoms/Logo";
function NavbarNew() {
  return (
    <>
      <Box sx={{ width: "auto", display: { md: "block",lg: "block", xs: "none" } }}>
        <Logo isTop={false} />
        <List>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <HomeRounded />
              </ListItemDecorator>
              <ListItemContent sx={{display:{md: "none", lg: "block"}}}>Home</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <SearchRounded />
              </ListItemDecorator>
              <ListItemContent  sx={{display:{md: "none", lg: "block"}}}>Search</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <VideoCall />
              </ListItemDecorator>
              <ListItemContent sx={{display:{md: "none", lg: "block"}}}>Reels</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <VideoCall />
              </ListItemDecorator>
              <ListItemContent sx={{display:{md: "none", lg: "block"}}}>Explore</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <AddCircleOutline />
              </ListItemDecorator>
              <ListItemContent  sx={{display:{md: "none", lg: "block"}}}>Create</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <MessageRounded />
              </ListItemDecorator>
              <ListItemContent  sx={{display:{md: "none", lg: "block"}}}>Message</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <NotificationImportant />
              </ListItemDecorator>
              <ListItemContent  sx={{display:{md: "none", lg: "block"}}}>Notification</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <Face />
              </ListItemDecorator>
              <ListItemContent  sx={{display:{md: "none", lg: "block"}}}>Profile</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}

export default NavbarNew;
