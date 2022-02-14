import React from "react"
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Fab, IconButton, Tooltip } from "@mui/material";


export default function TooltipExample() {
  return (
    <div>
      <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add" aria-label="add">
        <Fab color="primary" sx={{ margin:2 }}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Add" aria-label="add">
        <Fab color="secondary" sx={{ margin:2 }}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  )
}
