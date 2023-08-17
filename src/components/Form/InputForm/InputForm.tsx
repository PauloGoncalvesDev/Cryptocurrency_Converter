import { Grid, TextField } from "@mui/material";
import "../SelectForm/selectform.css";

function InputForm({
  label,
  select,
  id,
  labelText,
  style,
  value,
}: ICustomStyles) {
  return (
    <>
      <Grid item xs={10}>
        <TextField
          id={id}
          label={labelText}
          type="number"
          variant="filled"
          value={value}
          className="filled-number"
          InputLabelProps={{
            style: label,
          }}
          InputProps={{
            style: select,
          }}
          style={style}
        />
      </Grid>
    </>
  );
}

export default InputForm;
