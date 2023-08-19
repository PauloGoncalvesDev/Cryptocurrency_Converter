import Menu from "../components/MenuItem/MenuFormItem";
import Form from "../components/Form/Form";
import { AppContext } from "../components/Contexts/AppContext/AppContext";
import { Theme, ThemeProvider, Typography, createTheme } from "@mui/material";

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
      <Menu />
      <AppContext>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" lineHeight="1.1" fontWeight="bold">
            Converter Criptomoedas
          </Typography>
        </ThemeProvider>
        <Form />
      </AppContext>
    </>
  );
}

export default Home;
