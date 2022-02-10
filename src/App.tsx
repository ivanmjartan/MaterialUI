import React from "react";
import { BackendProvider } from "@gooddata/sdk-ui";

import AppRouter from "./routes/AppRouter";
import { useAuth } from "./contexts/Auth";
import { WorkspaceListProvider } from "./contexts/WorkspaceList";
import CssBaseline from '@mui/material/CssBaseline';
import {CustomTheme} from "./components/Theme/CustomTheme";

const App: React.FC = () => {
    const { backend } = useAuth();

    return (
        <>
            <CssBaseline />
            <BackendProvider backend={backend}>
                <WorkspaceListProvider>
                    <CustomTheme>
                        <AppRouter />
                    </CustomTheme>
                </WorkspaceListProvider>
            </BackendProvider>
        </>
    );
}

export default App;
