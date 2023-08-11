import { InputLabel, MenuItem, SelectChangeEvent } from "@mui/material";
import { Select } from "@mui/material";
import { useEffect, useState } from "react";
import { getCoingeckoCoinList } from "../../../services/coingecko";
import "./selectform.css";
import { useAppContext } from "../../Contexts/AppContext/AppContext";

function SelectForm({ label, customStyles, classNameTypeField }: ISelectProp) {
  const [coin, setCoin] = useState<string>("");
  const [coinList, setCoinList] = useState<ICoinBase[]>([]);
  const { setCoinBaseContext, setCoinConversionContext } = useAppContext();

  const handleChange = (event: SelectChangeEvent) => {
    setCoin(event.target.value as string);
    getCoinsByClassName(event.target.value as string);
  };

  useEffect(() => {
    async function fetchCoins() {
      const coinList = await getCoingeckoCoinList();
      setCoinList(coinList.sort((a, b) => (a.name < b.name ? -1 : 1)));
    }

    fetchCoins();
  }, []);

  const getCoinsByClassName = (className: string) => {
    const coinElemento: HTMLCollectionOf<Element> =
      document.getElementsByClassName(className);

    for (let i = 0; i < coinElemento.length; i++) {
      const element = coinElemento[i];

      if (element.classList.contains("baseCoin"))
        setCoinBaseContext(
          coinList.find((x) => x.id === className) as ICoinBase
        );
      else if (element.classList.contains("convertCoin"))
        setCoinConversionContext(
          coinList.find((x) => x.id === className) as ICoinBase
        );
    }
  };

  return (
    <>
      <InputLabel
        id="demo-simple-select-filled-label"
        style={customStyles.label}
      >
        {label}
      </InputLabel>
      <Select
        style={customStyles.select}
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={coin}
        label={label}
        onChange={handleChange}
      >
        {coinList.map((coin: ICoinBase) => {
          return (
            <MenuItem
              key={coin.id}
              value={coin.id}
              style={{ alignItems: "center" }}
            >
              <img
                src={coin.image}
                alt={coin.name}
                style={{ width: "20px", marginRight: "15px" }}
              ></img>
              <span className={`${classNameTypeField} ${coin.id}`}>
                {coin.name}
              </span>
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}

export default SelectForm;
