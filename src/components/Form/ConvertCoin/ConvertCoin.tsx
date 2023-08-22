import { FormControl, Grid } from "@mui/material";
import SelectForm from "../SelectForm/SelectForm";
import InputForm from "../InputForm/InputForm";
import customStyles from "../StyleForm";
import { useAppContext } from "../../Contexts/AppContext/AppContext";
import { useEffect, useState } from "react";
import { useLanguageContext } from "../../Contexts/LanguageContext/LanguageContext";

function ConvertCoin() {
  const { coinConversionContext, coinBaseContext }: IAppContext =
    useAppContext();
  const [coinConversionValue, setCoinConversionValue] = useState<number>(0);
  const [baseQuantity, setBaseQuantity] = useState<number>(1);
  const { languageContextDefault } = useLanguageContext();

  useEffect(() => {
    if (coinBaseContext.current_price === 0 || baseQuantity === 0) {
      setCoinConversionValue(0);
    } else {
      setCoinConversionValue(
        parseFloat(
          (
            baseQuantity *
            (coinBaseContext.current_price /
              coinConversionContext.current_price)
          ).toFixed(6)
        )
      );
    }
  }, [
    coinBaseContext.current_price,
    coinConversionContext.current_price,
    baseQuantity,
  ]);

  useEffect(() => {
    const baseQuantityElement = document.getElementById(
      "container-quantidade-1"
    ) as HTMLInputElement;

    const handleBaseQuantityChange = () => {
      const newValue = parseFloat(baseQuantityElement.value);

      if (!isNaN(newValue)) {
        setBaseQuantity(newValue);
      } else setBaseQuantity(0);
    };

    baseQuantityElement.addEventListener("input", handleBaseQuantityChange);

    return () => {
      baseQuantityElement.removeEventListener(
        "input",
        handleBaseQuantityChange
      );
    };
  }, []);

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
              labelText={`Cotação (${languageContextDefault})`}
              value={coinConversionContext.current_price}
              style={{ width: "100%", borderRight: "2px solid #242424" }}
            />
            <InputForm
              label={customStyles.label}
              select={customStyles.select}
              id="container-quantidade-2"
              labelText="Quantidade"
              style={{ width: "100%", borderLeft: "2px solid #242424" }}
              value={coinConversionValue}
            />
          </Grid>
        </FormControl>
      </Grid>
    </>
  );
}

export default ConvertCoin;
