import { Grid } from "@mui/material";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import BaseCoin from "./BaseCoin/BaseCoin";
import ConvertCoin from "./ConvertCoin/ConvertCoin";

function Form() {
  return (
    <>
      <Grid
        container
        columns={20}
        rowSpacing={2}
        margin={"0 auto"}
        alignItems={"center"}
        style={{ width: "90%" }}
      >
        <BaseCoin />
        <Grid item xs={20} md={2}>
          <CompareArrowsRoundedIcon
            fontSize="large"
            style={{ cursor: "pointer" }}
          />
        </Grid>
        <ConvertCoin />
      </Grid>
    </>
  );
}

export default Form;
