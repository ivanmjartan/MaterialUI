import React from "react";
import { deepOrange, deepPurple, pink, green } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PageviewIcon from '@mui/icons-material/Pageview';
import { Avatar, AvatarGroup, Box, Theme, useTheme } from "@mui/material";

const deepColor = (theme:Theme, color: any) =>{
  return {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: color[500],
  }
}

const smallSize = (theme:Theme) =>{
  return {
    width: theme.spacing(3),
    height: theme.spacing(3),
  }
}

const largeSize = (theme:Theme) =>{
  return {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
}

const avatarGroup = () => {
  return {
    display: "flex",
    margin: 2,
    "& > *": {
      margin: 1,
    },
  }
}

export default function AvatarExample() {
  const theme = useTheme();

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
    }}>
      <Box sx={avatarGroup()}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
      </Box>
      <Box sx={avatarGroup()}>
        <Avatar>H</Avatar>
        <Avatar sx={deepColor(theme, deepOrange)}>N</Avatar>
        <Avatar sx={deepColor(theme, deepPurple)}>OP</Avatar>
      </Box>
      <Box sx={avatarGroup()}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
          sx={smallSize(theme)}
        />
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
          sx={largeSize(theme)}
        />
      </Box>
      <Box sx={avatarGroup()}>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <Avatar sx={deepColor(theme, pink)}>
          <PageviewIcon />
        </Avatar>
        <Avatar sx={deepColor(theme, green)}>
          <AssignmentIcon />
        </Avatar>
      </Box>
      <Box sx={avatarGroup()}>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </Box>
    </Box>
  )
}
