import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MoreNavlink from "../atoms/MoreNavlink";
import {
  VideoCall,
  TravelExplore,
  AddCircleOutline,
  Face,
  MessageRounded,
  NotificationImportant,
  SearchRounded,
} from "@mui/icons-material";
import Logo from "../atoms/Logo";
import { Box } from "@mui/material";

export default function Navbar() {
  return (
    <Box className="basis-1/6 flex flex-col border-r-2 h-dvh">
      <Logo isTop={false} />
      <div className="mx-5 my-3">
        <div className="text-xl flex hover:bg-bgHover rounded-lg px-3 py-2 m-2">
          <HomeRoundedIcon />{" "}
          <Link to="/" className="mx-3">
            Home
          </Link>
        </div>
        <div className="text-xl flex hover:bg-bgHover rounded-lg px-3 py-2 m-2">
          <SearchRounded />
          <Link to="/create" className="mx-3">
            Search
          </Link>
        </div>
        <div className="text-xl flex hover:bg-bgHover rounded-lg px-3 py-2 m-2">
          <VideoCall />
          <Link to="/reels" className="mx-3">
            Reels
          </Link>
        </div>
        <div className="text-xl flex hover:bg-bgHover rounded-lg px-3 py-2 m-2">
          <TravelExplore />{" "}
          <Link to="/explore" className="mx-3">
            Explore
          </Link>
        </div>
        <div className="text-xl flex hover:bg-bgHover rounded-lg px-3 py-2 m-2">
          <AddCircleOutline />
          <Link to="/create" className="mx-3">
            Create
          </Link>
        </div>
        <div className="text-xl flex hover:bg-bgHover rounded-lg px-3 py-2 m-2">
          <MessageRounded />
          <Link to="/profile" className="mx-3">
            Message
          </Link>
        </div>
        <div className="text-xl flex hover:bg-bgHover rounded-lg px-3 py-2 m-2">
          <NotificationImportant />
          <Link to="/create" className="mx-3">
            Notification
          </Link>
        </div>
        <div className="text-xl flex hover:bg-bgHover rounded-lg px-3 py-2 m-2">
          <Face />
          <Link to="/create" className="mx-3">
            Profile
          </Link>
        </div>
      </div>
      <div className="text-xl py-1.5 px-3 mt-auto ml-6">
        <MoreNavlink />
      </div>
    </Box>
  );
}
