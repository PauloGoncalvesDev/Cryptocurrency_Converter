import { FormControl, Grid } from "@mui/material";
import SelectForm from "../SelectForm/SelectForm";
import InputForm from "../InputForm/InputForm";
import customStyles from "../StyleForm";
import { useAppContext } from "../../Contexts/AppContext/AppContext";
import { useEffect, useState } from "react";

function ConvertCoin() {
  const { coinConversionContext, coinBaseContext } = useAppContext();
  const [coinConversionValue, setCoinConversionValue] = useState<number>(0);

  useEffect(() => {
    if (coinBaseContext.current_price === 0) {
      setCoinConversionValue(0);
    } else {
      setCoinConversionValue(
        parseFloat(
          (
            coinBaseContext.current_price / coinConversionContext.current_price
          ).toFixed(6)
        )
      );
    }
  }, [coinBaseContext.current_price, coinConversionContext.current_price]);

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
              labelText="Cotação (BRL)"
              value={coinConversionContext.current_price}
            />
            <InputForm
              label={customStyles.label}
              select={customStyles.select}
              id="container-quantidade-2"
              labelText="Quantidade"
              style={{ marginLeft: "0.3rem" }}
              value={coinConversionValue}
            />
          </Grid>
        </FormControl>
      </Grid>
    </>
  );
}

export default ConvertCoin;
