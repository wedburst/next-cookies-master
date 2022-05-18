import { useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
    themeColor: string;
}

const UI_INITIAL_STATE: UIState = {
    themeColor: "light",
};


export const UIProvider= ({ children }: any) => {
    const [state, dispath] = useReducer(uiReducer, UI_INITIAL_STATE);
    
    const changeTheme = (currentTheme: string) => dispath({type: "UI - CustomeColor", payload: currentTheme })
    return (
        <UIContext.Provider
          value={{
            // sidemenuOpen: state.sidemenuOpen,
            ...state,
            // Method
            changeTheme
            
          }}
        >
          {children}
        </UIContext.Provider>
    )
}