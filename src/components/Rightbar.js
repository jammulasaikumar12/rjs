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
            src=""
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
              src="https://wallpapercave.com/wp/wp6334699.jpg"
              alt="NTR"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://wallpapers.com/images/featured/ram-charan-hd-0hh0jnjrptft9yxc.jpg"
              alt="Ram"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/736x/8b/2f/ba/8b2fbacb9c5c95f95738741249ec3e3b.jpg"
              alt="pavan kalyan"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
        Messages
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="urumula doralu" src="https://steamuserimages-a.akamaihd.net/ugc/777365385627964932/1746488A2C11779E613ED0FBB8293F4DB746B676/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
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
