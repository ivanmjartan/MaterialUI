import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";


const LoggingOut: React.FC = () => {
    return <Box sx={{width:"100%", height:"100%",display: "flex", flexDirection: "column", alignItems: "center"}}>
        <CircularProgress color="secondary" sx={{marginBottom:"10px"}} />
        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
            Logging you out...
        </Typography>
    </Box>
}

export interface ILogoutFormProps extends RouteComponentProps {
    logout: () => Promise<void>;
}

const LogoutForm: React.FC<ILogoutFormProps> = ({ history, logout }) => {
    useEffect(
        () => {
            logout().then(() => history.push("/login"));
        },
        // only call the logout on initial mount -> the empty array is correct here
        [], // eslint-disable-line react-hooks/exhaustive-deps
    );

    return <LoggingOut />;
};

export default withRouter(LogoutForm);
