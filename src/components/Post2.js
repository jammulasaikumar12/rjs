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
        title="One Piece"
        subheader="Oct 12, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://c4.wallpaperflare.com/wallpaper/373/211/802/roronoa-zoro-one-piece-sword-amanomoon-wallpaper-preview.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Pirate Hunter Zoro 
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
          Roronoa Zoro first appears in the manga chapter "Enter Pirate Hunter Zoro" 
          ("海賊狩りのゾロ"登場, Kaizoku-gari no Zoro Tōjō), first published in Japan's
           Weekly Shōnen Jump magazine on August 18, 1997, and first appeared in 1st 
           Episode of anime.[9] He first appears as a captured criminal awaiting his 
           execution at the hands of the Marines.[9] Before the beginning of the series' 
           narrative, Zoro loses his childhood friend Kuina and vows to become the strongest
            swordsman in the world.[10] For years, Zoro hunts pirates as a bounty hunter only
             to get money for food in the company of his friends Johnny and Yosaku. Zoro initially 
             did this because he got lost seeking to face the best swordsman in the world, Dracule
              Mihawk. When Luffy offers Zoro the opportunity to join his crew, Zoro initially refuses.
             But after Luffy saves him from execution, Zoro pledges loyalty to him. Zoro is later easily
                defeated at Mihawk's hands at the Baratie restaurant and pledges to Luffy that he would never lose again.[11]
          </Typography>
         
          
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post2;
