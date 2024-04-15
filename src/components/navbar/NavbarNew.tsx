import { Box, List, ListItem, ListItemButton } from "@mui/material";
import {
  AddCircleOutline,
  Face,
  HomeOutlined,
  MessageOutlined,
  NotificationImportant,
  SearchRounded,
  VideoCall,
} from "@mui/icons-material";
import { ListItemContent, ListItemDecorator } from "@mui/joy";
import Logo from "../atoms/Logo";
import SearchDrawer from "../SearchDrawer";
import MoreNavlink from "../atoms/MoreNavlink";
function NavbarNew() {
  return (
    <>
      <Box className="hidden lg:block md:block">
        <Logo isTop={false} />
        <List>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }} href="/">
              <ListItemDecorator>
                <HomeOutlined />
              </ListItemDecorator>
              <ListItemContent className="hidden lg:block">
                Home
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <SearchDrawer />
          {/* <ListItem>
            <ListItemButton sx={{ gap: 1 }}>
              <ListItemDecorator>
                <SearchRounded />
              </ListItemDecorator>
              <ListItemContent className="hidden lg:block">
              </ListItemContent>
            </ListItemButton>
          </ListItem> */}
          <ListItem>
            <ListItemButton sx={{ gap: 2 }} href="/reels">
              <ListItemDecorator>
                <VideoCall />
              </ListItemDecorator>
              <ListItemContent className="hidden lg:block">
                Reels
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }} href="/explore">
              <ListItemDecorator>
                <VideoCall />
              </ListItemDecorator>
              <ListItemContent className="hidden lg:block">
                Explore
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }} href="/create">
              <ListItemDecorator>
                <AddCircleOutline />
              </ListItemDecorator>
              <ListItemContent className="hidden lg:block">
                Create
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }} href="/message">
              <ListItemDecorator>
                <MessageOutlined />
              </ListItemDecorator>
              <ListItemContent className="hidden lg:block">
                Message
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }} href="/notification">
              <ListItemDecorator>
                <NotificationImportant />
              </ListItemDecorator>
              <ListItemContent className="hidden lg:block">
                Notification
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ gap: 2 }} href="/profile">
              <ListItemDecorator>
                <Face />
              </ListItemDecorator>
              <ListItemContent className="hidden lg:block">
                Profile
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
        
      </Box>
    </>
  );
}

export default NavbarNew;
