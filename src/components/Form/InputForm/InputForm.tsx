import { Grid, TextField } from "@mui/material";
import "../SelectForm/selectform.css";

function InputForm({
  label,
  select,
  id,
  labelText,
  style,
  disabled,
}: ICustomStyles) {
  return (
    <>
      <Grid item xs={10}>
        <TextField
          id={id}
          label={labelText}
          type="number"
          variant="filled"
          className="filled-number"
          InputLabelProps={{
            style: label,
          }}
          InputProps={{
            style: select,
          }}
          style={style}
          disabled={disabled}
        />
      </Grid>
    </>
  );
}

export default InputForm;
