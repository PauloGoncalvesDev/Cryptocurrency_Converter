interface IAppContext {
  coinConversionContext: ICoinBase;
  setCoinConversionContext: React.Dispatch<React.SetStateAction<ICoinBase>>;
  coinBaseContext: ICoinBase;
  setCoinBaseContext: React.Dispatch<React.SetStateAction<ICoinBase>>;
}
