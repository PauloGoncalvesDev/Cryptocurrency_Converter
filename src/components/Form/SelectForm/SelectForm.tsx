import { InputLabel, MenuItem, SelectChangeEvent } from "@mui/material";
import { Select } from "@mui/material";
import { useEffect, useState } from "react";
import { getCoingeckoCoinList } from "../../../services/coingecko";
import "./selectform.css";

function SelectForm({ label, customStyles }: ISelectProp) {
  const [coin, setCoin] = useState<string>("");
  const [coinList, setCoinList] = useState<ICoinBase[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setCoin(event.target.value as string);
  };

  useEffect(() => {
    async function fetchCoins() {
      const coinList = await getCoingeckoCoinList();
      setCoinList(coinList.sort((a, b) => (a.name < b.name ? -1 : 1)));
    }

    fetchCoins();
  }, []);

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
              {coin.name}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}

export default SelectForm;
