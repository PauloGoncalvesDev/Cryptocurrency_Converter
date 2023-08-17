import { Grid } from "@mui/material";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import BaseCoin from "./BaseCoin/BaseCoin";
import ConvertCoin from "./ConvertCoin/ConvertCoin";
import { useAppContext } from "../Contexts/AppContext/AppContext";

function Form() {
  const {
    coinConversionContext,
    coinBaseContext,
    setCoinBaseContext,
    setCoinConversionContext,
  }: IAppContext = useAppContext();

  const handleClick = () => {
    let temporaryCoinConversionContext: ICoinBase = coinBaseContext;

    if (coinConversionContext.name && temporaryCoinConversionContext.name) {
      setCoinBaseContext(coinConversionContext);
      setCoinConversionContext(temporaryCoinConversionContext);
      getCoinsByClassName();
    }
  };

  const getCoinsByClassName = () => {
    const coinElementBaseCoin: HTMLCollectionOf<Element> =
      document.getElementsByClassName("baseCoin");
    const coinElementConversionCoin: HTMLCollectionOf<Element> =
      document.getElementsByClassName("convertCoin");

    if (coinElementConversionCoin.length && coinElementBaseCoin.length) {
      for (let i = 0; i < coinElementBaseCoin.length; i++) {
        let elementBase: Element = coinElementBaseCoin[i];
        let elementConversion: Element = coinElementConversionCoin[i];

        let temporaryElementBase: string = elementBase.innerHTML;
        elementBase.innerHTML = elementConversion.innerHTML;
        elementConversion.innerHTML = temporaryElementBase;

        let previousElementImageConversionCoin: HTMLImageElement =
          elementBase.previousElementSibling as HTMLImageElement;
        let previousElementImageBaseCoin: HTMLImageElement =
          elementConversion.previousElementSibling as HTMLImageElement;

        if (
          previousElementImageBaseCoin &&
          previousElementImageConversionCoin
        ) {
          previousElementImageBaseCoin.src = coinBaseContext.image;
          previousElementImageConversionCoin.src = coinConversionContext.image;
        }
      }
    }
  };

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
            onClick={handleClick}
          />
        </Grid>
        <ConvertCoin />
      </Grid>
    </>
  );
}

export default Form;
