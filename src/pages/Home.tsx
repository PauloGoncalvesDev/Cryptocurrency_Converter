import Menu from "../components/MenuItem/MenuFormItem";
import Form from "../components/Form/Form";
import { AppContext } from "../components/Contexts/AppContext/AppContext";

function Home() {
  return (
    <>
      <Menu />
      <AppContext>
        <h1>Converter Criptomoedas</h1>
        <Form />
      </AppContext>
    </>
  );
}

export default Home;
