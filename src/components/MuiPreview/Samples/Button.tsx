import React from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice"
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Typography, useTheme } from "@mui/material";

const groupButton = (theme) =>{
  return {
    "button": {
      margin: theme.spacing(1),
    },
    marginBottom: theme.spacing(2),
  }
}

export default function ButtonsExample() {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h6" id="contained-buttons">
        Contained Buttons
      </Typography>
      <Box sx={groupButton(theme)}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </Box>

      <Typography variant="h6" id="text-buttons">
        Text Buttons
      </Typography>
      <Box sx={groupButton(theme)}>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button color="primary" href="#text-buttons">
          Link
        </Button>
      </Box>

      <Typography variant="h6" id="outlined-buttons">
        Outlined Buttons
      </Typography>
      <Box sx={groupButton(theme)}>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
      </Box>

      <Typography variant="h6" id="buttons-with-icons">
        Buttons with icons and label
      </Typography>
      <Box sx={groupButton(theme)}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
          startIcon={<KeyboardVoiceIcon />}
        >
          Talk
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Box>
    </Box>
  )
}
