import { createContext } from "react";

interface ContextProps {
    themeColor: string;

    changeTheme: (currentTheme: string) => void;
}

export const UIContext = createContext({} as ContextProps);
