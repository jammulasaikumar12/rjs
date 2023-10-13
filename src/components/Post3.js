import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  Collapse,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

const Post2 = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }}>S</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Lufy"
        subheader="Oct 12, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://c4.wallpaperflare.com/wallpaper/965/607/746/one-piece-shanks-monkey-d-luffy-anime-wallpaper-preview.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Straw Hat Luffy
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>ABOUT:</Typography>
          <Typography paragraph>
          Monkey D. Luffy 
           also known as "Straw Hat" Luffy[n 2], is a fictional character and the protagonist of the One Piece
            manga series, created by Eiichiro Oda. Luffy made his debut as a young boy who acquires the properties
             of rubber after accidentally eating one of the Devil Fruits that belonged to "Red Hair" Shanks.
            Monkey D. Luffy is the captain of the Straw Hat Pirates,
           and dreamt of being a pirate since childhood from the influence of his idol and mentor Red-Haired Shanks. 
          At the age of 17, Luffy sets sail from the East Blue Sea to the Grand Line in search of the legendary treasure,
          One Piece, to succeed Gol D. Roger as "King of the Pirates".
          </Typography>
         
          
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post2;
