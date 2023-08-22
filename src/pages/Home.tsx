import Menu from "../components/MenuItem/MenuFormItem";
import Form from "../components/Form/Form";
import { AppContext } from "../components/Contexts/AppContext/AppContext";
import { Theme, ThemeProvider, Typography, createTheme } from "@mui/material";
import Languages from "../components/Languages/Languages";
import { LanguageContext } from "../components/Contexts/LanguageContext/LanguageContext";

function Home() {
  const theme: Theme = createTheme();
  theme.typography.h2 = {
    fontSize: "2rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  };

  return (
    <>
      <LanguageContext>
        <Languages />
        <Menu />
        <AppContext>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h2"
              lineHeight="1.1"
              fontWeight="bold"
              marginBottom="1rem"
            >
              Converter Criptomoedas
            </Typography>
          </ThemeProvider>
          <Form />
        </AppContext>
      </LanguageContext>
    </>
  );
}

export default Home;
