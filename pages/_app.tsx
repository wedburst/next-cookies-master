import "../styles/globals.css";
import type { AppProps } from "next/app";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { lightTheme, darkTheme, customTheme } from "../themes";
import Cookies from 'js-cookie';
import { useEffect, useMemo, useState } from "react";

interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps}: Props) {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => {
    return mode === "light" 
      ? lightTheme 
      : (mode === 'dark')
      ? darkTheme
      : customTheme;

    // if (mode === "light") {
    //   return lightTheme;
    // }
    return darkTheme;
  }, [mode]);

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";
    setMode(cookieTheme);
  }, [mode, setMode]);
    
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Component {...pageProps} setMode={setMode}/>
    </ThemeProvider>
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
