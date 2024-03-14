import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { user } from "../constants/Data";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextFeild from "@mui/material/TextField";
import { CardMedia, Typography } from "@mui/material";
import { ListItemContent, ListItemDecorator } from "@mui/joy";
import { SearchRounded } from "@mui/icons-material";
import { squareImage } from "../constants/constants";

export default function SearchDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation">
      <List>
        <Typography variant="h4" paddingX={1} paddingY={2} color={"inherit"}>
          Search
        </Typography>
        <TextFeild
          sx={{ marginLeft: "25px", width: 300 }}
          placeholder="Search users"
          variant="outlined"
          size="small"
        />
        {/* use search query result instead of hard coded datas */}

        {user.map((user) => (
          <ListItem key={user.id}>
            <ListItemButton
              sx={{
                
                padding: "3",
                alignItems: "flex-start",
              }}
            >
              <CardMedia
                className="rounded-full bg-cover"
                component="img"
                image={squareImage}
                sx={{ width: "50px"}}
              />
              <Box paddingLeft={4}>
                <ListItemText primary={user.name} />
                <Typography
                  variant="caption"
                  sx={{ padding: "0" }}
                  component={List}
                >
                  {user.userName}
                </Typography>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <ListItem>
        <ListItemButton sx={{ gap: 1 }} onClick={toggleDrawer(true)}>
          <ListItemDecorator>
            <SearchRounded />
          </ListItemDecorator>
          <ListItemContent className="hidden lg:block">Search</ListItemContent>
        </ListItemButton>
      </ListItem>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
