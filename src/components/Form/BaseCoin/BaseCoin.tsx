import { FormControl, Grid } from "@mui/material";
import SelectForm from "../SelectForm/SelectForm";
import InputForm from "../InputForm/InputForm";
import customStyles from "../StyleForm";
import { useAppContext } from "../../Contexts/AppContext/AppContext";

function BaseCoin() {
  const { coinBaseContext } = useAppContext();

  return (
    <>
      <Grid item xs={20} md={9}>
        <FormControl fullWidth variant="filled">
          <SelectForm
            label="Moeda Base"
            classNameTypeField="baseCoin"
            customStyles={customStyles}
          />
          <Grid container columns={20} style={{ margin: "0.2rem 0" }}>
            <InputForm
              label={customStyles.label}
              select={customStyles.select}
              id="container-cotacao-1"
              labelText="Cotação (BRL)"
              value={coinBaseContext.current_price}
              style={{ width: "100%", borderRight: "2px solid #242424" }}
            />
            <InputForm
              label={customStyles.label}
              select={customStyles.select}
              id="container-quantidade-1"
              labelText="Quantidade"
              style={{ width: "100%", borderLeft: "2px solid #242424" }}
            />
          </Grid>
        </FormControl>
      </Grid>
    </>
  );
}

export default BaseCoin;
