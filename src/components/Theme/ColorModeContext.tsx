import * as React from 'react';

export interface IColorMode {
    toggleColorMode: () => void;
}

export const ColorModeContext = React.createContext<IColorMode>({ toggleColorMode: () => {} });

export const useColorModeContext = (): IColorMode => React.useContext(ColorModeContext);