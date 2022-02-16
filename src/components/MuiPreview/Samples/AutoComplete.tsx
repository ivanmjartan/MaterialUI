
import { Box } from '@mui/material';
import * as React from 'react';
import { ComboBox } from "../components/AutoComplete";

export default function AutoComplete() {

    return (
        <Box sx={{
            width: "100%",
            maxWidth: 800,
        }}>
            <ComboBox />
        </Box>);
}