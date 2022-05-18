import { useContext, useEffect, useMemo, useState } from "react";
import type { AppContext, AppProps } from "next/app";

import { CssBaseline, Theme, ThemeProvider } from "@mui/material";

import { lightTheme, darkTheme, customTheme } from "../themes";
import Cookies from "js-cookie";
import { UIContext, UIProvider } from "../context";

import "../styles/globals.css";
import axios from "axios";

interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme = "dark" }: Props) {
  const { themeColor } = useContext(UIContext);

  // const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const themeChange = useMemo(() => lightTheme, [themeColor]);
  
  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";
      console.log("no se actualiza ", cookieTheme);
      const currentTheme: Theme =
        cookieTheme === "light"
          ? lightTheme
          : cookieTheme === "dark"
          ? darkTheme
          : customTheme;
  
      // setCurrentTheme(currentTheme);
    
  },[]);


  // const theme = React.useMemo(() => currentTheme), [currentTheme]);
  return (
    <UIProvider>
      <ThemeProvider theme={themeChange}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const {theme} = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' };
//   const validThemes = ["light", "dark", "custom"];

//   return {
//     theme: validThemes.includes(theme) ? theme : "light"
//    };
// }

export default MyApp;
