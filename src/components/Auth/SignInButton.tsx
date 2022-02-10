import React from "react";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export interface ISignInButton {
    isSubmitting:boolean;
}

const SignInButton: React.FC<ISignInButton> = (props) =>{
    const {isSubmitting} = props;
    const progress = isSubmitting ? <CircularProgress color="secondary" size={24} /> : null;
    const label = isSubmitting ? "Signing in...":"Sign in";

    return <Button sx={{marginTop:"10px"}} type="submit" variant="contained" color="secondary" fullWidth disabled={isSubmitting} startIcon={progress}>{label}</Button>
}

export default SignInButton;