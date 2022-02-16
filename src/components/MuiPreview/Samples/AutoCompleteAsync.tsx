
import { Box } from '@mui/material';
import * as React from 'react';
import AutoComplete from "../components/AutoComplete";

export default function AutoCompleteAsync() {

    return (
        <Box sx={{
            width: "100%",
            maxWidth: 800,
        }}>
            <AutoComplete />
        </Box>);
}