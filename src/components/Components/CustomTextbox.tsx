import React from "react";
import { TextField } from "@mui/material";

export const styles = theme => ({
    inputRoot: {
      padding: 0,
      'label + &': {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 2
      }
    },
    input: {
      borderRadius: 3,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #CCCCCC',
      fontSize: 12,
      padding: '6px 8px',
      '&:focus': {
        borderColor: '#80bdff'
      }
    },
    inputLabelRoot: {
      color: '#555555',
      fontWeight: 'bold',
      '&$formLabelFocused': {
        color: '#555555'
      }
    },
    formLabelFocused: {}
  })


const CustomTextbox:React.FC = () =>{

    return <TextField
    placeholder="Title"
    label="Title"
    id="title-input"
    fullWidth
  />;
}

export default CustomTextbox