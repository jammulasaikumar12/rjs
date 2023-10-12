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

const Post = () => {
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
        image="https://c4.wallpaperflare.com/wallpaper/747/637/281/go-to-new-world-one-piece-4k-wallpaper-preview.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          One Piece is a Japanese manga series written and illustrated by
          Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine
          Weekly Shōnen Jump since July 1997, with its individual chapters
          compiled into 106 tankōbon volumes as of July 2023.
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
            Main article: List of One Piece manga volumes
            Written and illustrated by Eiichiro Oda, One Piece has been serialized by Shueisha in the 
            shōnen manga anthology Weekly Shōnen Jump since July 22, 1997.[27][28] Shueisha has collected
             its chapters into individual tankōbon volumes. The first volume was released on December 24, 1997.
             [29] By July 4, 2023, a total of 106 volumes have been released.[30]

          </Typography>
          <Typography paragraph>
          The first English translation of One Piece was released by Viz Media in November 2002,
           who published its chapters in the manga anthology Shonen Jump, and later collected in volumes since June 30, 2003.
           [31][32][33] In 2009, Viz announced the release of five volumes per month during the first half of 2010 to catch up 
           with the serialization in Japan.[34] Following the discontinuation of the print Shonen Jump, 
           Viz began releasing One Piece chapterwise in its digital successor Weekly Shonen Jump on January 30, 2012.
           [35] Following the digital Weekly Shonen Jump's cancelation in December 2018, Viz Media started simultaneously
            publishing One Piece through its Shonen Jump service, and by Shueisha through Manga Plus, in January 2019.[36][37]
           In the United Kingdom, the volumes were published by Gollancz Manga, starting in March 2006,
           [38] until Viz Media took it over after the fourteenth volume.[39][40] In Australia and New Zealand,
            the English volumes have been distributed by Madman Entertainment since November 10, 2008.[41] 
            In Poland, Japonica Polonica Fantastica is publishing the manga,[42] Glénat in France,[43] 
            Panini Comics in Mexico,[44] LARP Editores and later by Ivrea in Argentina,[45][46] 
            Planeta de Libros in Spain,[47] Edizioni Star Comics in Italy,[48] and Sangatsu Manga in Finland.[49].
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
