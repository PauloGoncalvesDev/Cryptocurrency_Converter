import { InputLabel, MenuItem, SelectChangeEvent } from "@mui/material";
import { Select } from "@mui/material";
import { useState } from "react";
import "./selectform.css";

function SelectForm({ label, customStyles }: ISelectProp) {
  const [coin, setCoin] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setCoin(event.target.value as string);
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
        <MenuItem value={1}>Bitcoin</MenuItem>
        <MenuItem value={2}>BNB</MenuItem>
        <MenuItem value={3}>DogeCoin</MenuItem>
      </Select>
    </>
  );
}

export default SelectForm;
