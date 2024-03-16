import {useRef} from "react"
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { dummyImage } from "../../constants/constants";
import dummyVideo from "../../assets/production_id_4434150 (1080p).mp4"
import { CommentRounded } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function FeedsCard() {
  const videoRef = useRef(null)
  return (
    <Box>
      <Card
        sx={{
          maxWidth: 400,
          boxShadow: "5px",
          backgroundColor: "#121212",
          color: "white",
          borderBottom: "1px solid",
          margin:"auto"
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" color="primary">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          ref={videoRef}
          component="video"
          sx={{maxHeight:"100"}}
          image={dummyVideo}
          autoPlay
          muted
          // loop
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color="error" />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <CommentRounded color="secondary" />
          </IconButton>
          <IconButton aria-label="share" color="secondary">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography variant="body2" color="white">
            This impressive paella is a perfect party
          </Typography>
          <Typography variant="caption" color="grey">
            posted 2 min ago
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
