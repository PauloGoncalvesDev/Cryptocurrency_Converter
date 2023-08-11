import { FormControl, Grid } from "@mui/material";
import SelectForm from "../SelectForm/SelectForm";
import InputForm from "../InputForm/InputForm";
import customStyles from "../StyleForm";

function ConvertCoin() {
  return (
    <>
      <Grid item xs={20} md={9}>
        <FormControl fullWidth variant="filled">
          <SelectForm
            label="Moeda Conversão"
            classNameTypeField="convertCoin"
            customStyles={customStyles}
          />
          <Grid container columns={20} style={{ margin: "0.2rem 0" }}>
            <InputForm
              label={customStyles.label}
              select={customStyles.select}
              id="container-cotacao-2"
              labelText="Cotação"
              disabled={true}
            />
            <InputForm
              label={customStyles.label}
              select={customStyles.select}
              id="container-quantidade-2"
              labelText="Quantidade"
              style={{ marginLeft: "0.3rem" }}
            />
          </Grid>
        </FormControl>
      </Grid>
    </>
  );
}

export default ConvertCoin;
