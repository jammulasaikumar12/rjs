import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

 export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
        Friends Request
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="karthik"
          />
          <Avatar
            alt="jaya"
        
          />
          <Avatar
            alt="pujith"
            
          />
          <Avatar alt="Agnes Walker" />
          <Avatar
            alt="Tomy"
            
          />
          <Avatar
            alt="SAM"
            
          />
          <Avatar
            alt="PREM"
            
          />
          <Avatar
            alt="NITHIN"
            
          />
          
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src=""
              alt="karthik"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src=""
              alt="sam"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src=""
              alt="pujith"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
        Messages
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="jaya" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="urumula doralu"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               chaduvu kondi firstuu
              </Typography>
             
            </React.Fragment>
          }
        />
      </ListItem>
      
     
    </List>
      </Box>
    </Box>
  );
};
