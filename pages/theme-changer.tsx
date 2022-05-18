import { GetServerSideProps } from "next";
import { useContext, useState } from "react";

import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Layout } from "../components/layouts";
import Cookies from "js-cookie";
import axios from "axios";
import { UIContext } from "../context";

interface Props {
    theme: string;
}

const ThemeChangerPage = ({theme}: Props) => {
  const {changeTheme, themeColor} = useContext(UIContext)

//   console.log(props);
  const [currentTheme, setCurrentTheme] = useState(theme);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;

    console.log(selectedTheme);

    setCurrentTheme(selectedTheme);

    localStorage.setItem("theme", selectedTheme);
    Cookies.set("theme", selectedTheme);

    changeTheme(event.target.value);
  };
  
  const handleThemeSet = async() => {
      const {data} = await axios.get('/api/hello');
        console.log({data});
  }

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>
              <RadioGroup value={currentTheme} onChange={handleThemeChange}>
                <FormControlLabel
                  value="light"
                  control={<Radio />}
                  label="Light"
                />
                <FormControlLabel
                  value="dark"
                  control={<Radio />}
                  label="Dark"
                />
                <FormControlLabel
                  value="custom"
                  control={<Radio />}
                  label="Custom"
                />
              </RadioGroup>
            </FormLabel>
          </FormControl>
          <Button onClick={handleThemeSet}>Solicitud</Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = "light" } = req.cookies;

  const validThemes = ["light", "dark", "custom"];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : "light",
    },
  };
};

export default ThemeChangerPage;
