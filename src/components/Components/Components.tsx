import React from "react";
import { Input as UIKit } from "@gooddata/sdk-ui-kit";
import InputAdornment from '@mui/material/InputAdornment';
import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { alpha, styled } from '@mui/material/styles';
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import AccountCircle from "@mui/icons-material/AccountCircle";
import Input from '@mui/material/Input';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import GroupedSelect from "./Play";
import { Typography } from "@mui/material";
interface IItemLayout {
  label: string;
  mui: any;
  uiKit: any;
}

const ItemLayout: React.FC<IItemLayout> = (props) => {
  const { label, mui, uiKit } = props;
  return <Box maxWidth="800px" sx={{ display: "flex", margin: "30px", justifyContent: "space-between" }}>
    <Box sx={{ display: "flex", alignItems: "center", width: "200px" }}>
      {label}
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", width: "200px" }}>
      {mui}
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", width: "200px" }}>
      {uiKit}
    </Box>
  </Box>;
}

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 14,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Components: React.FC = () => {
  return <>
    <Typography variant="h5" component="div" gutterBottom>
      Mui text field vs UI-Kit input
    </Typography>
    <ItemLayout label={"Text box"} mui={<TextField defaultValue="Hello" />} uiKit={<UIKit value="Hello!" />} />
    <ItemLayout label={"Text box small"} mui={<TextField defaultValue="Hello" size="small" />} uiKit={<UIKit value="Hello!" isSmall />} />
    <ItemLayout label={"Text box clear"} mui={<TextField defaultValue="Hello" type="search" />} uiKit={<UIKit value="Hello!" clearOnEsc />} />
    <ItemLayout label={"Text box with label"} mui={<TextField defaultValue="Hello" label="Label" />} uiKit={<UIKit value="Hello!" label="label" labelPositionTop />} />
    <ItemLayout label={"Text box with label small"} mui={<TextField defaultValue="Hello" size="small" label="Label" />} uiKit={<UIKit value="Hello!" label="label" labelPositionTop isSmall />} />
    <ItemLayout label={"Text box error"} mui={<TextField error defaultValue="Hello" label="Label" />} uiKit={<UIKit value="Hello!" hasError label="label" labelPositionTop />} />
    <ItemLayout label={"Text box error message"} mui={<TextField error helperText="Error message" defaultValue="Hello" label="Label" />} uiKit={<UIKit value="Hello!" hasError label="label" labelPositionTop />} />
    <Typography variant="h5" component="div" gutterBottom>
      Other customization and test
    </Typography>
    <TextField
      label="With normal TextField"
      id="outlined-start-adornment"
      sx={{ m: 1, width: '25ch' }}
      InputProps={{
        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
      }}
    />

    <br />
    <br />
    <GroupedSelect />
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={"20"}
        label="Age"
        variant="standard"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

    <FormControl variant="standard">
      <InputLabel htmlFor="input-with-icon-adornment">
        With a start adornment
      </InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
    </FormControl>
    <br />
    <br />
    <TextField
      defaultValue="Hello"
      variant="standard"
      error
      label={"aaa"}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
    />

    <br />
    <br />

    <Button variant="dashed" > Bla bla </Button>
    <br />
    <br />
    <FormControl variant="standard" >
      <InputLabel shrink htmlFor="bootstrap-input">
        Bootstrap
      </InputLabel>
      <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" startAdornment={<InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>} />
    </FormControl>
    <br />
    <br />
    <TextField
      defaultValue="Hello"
      label="Label"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
    <br />
    <br />
    <RedditTextField defaultValue="Hello" label="Label" size="small" variant="filled" />
    <br />
    <br />
    <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
  </>;
}

export default Components;