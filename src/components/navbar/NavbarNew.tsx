import {
  Box,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
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
      <Box sx={{minWidth: 250,display: {lg: "block", xs: "none"}}}>
        <Logo isTop={false} />
        <List>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <HomeRounded />
              </ListItemDecorator>
              <ListItemContent>Home</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <SearchRounded />
              </ListItemDecorator>
              <ListItemContent>Search</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <VideoCall />
              </ListItemDecorator>
              <ListItemContent>Reels</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <VideoCall />
              </ListItemDecorator>
              <ListItemContent>Explore</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <AddCircleOutline />
              </ListItemDecorator>
              <ListItemContent>Create</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <MessageRounded />
              </ListItemDecorator>
              <ListItemContent>Message</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <NotificationImportant />
              </ListItemDecorator>
              <ListItemContent>Notification</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }}>
              <ListItemDecorator>
                <Face />
              </ListItemDecorator>
              <ListItemContent>Profile</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}

export default NavbarNew;
