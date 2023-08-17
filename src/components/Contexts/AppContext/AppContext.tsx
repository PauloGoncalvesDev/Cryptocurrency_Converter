import { createContext, useContext, useState } from "react";

const defaultCoinData: ICoinBase = {
  id: "",
  name: "",
  image: "",
  symbol: "",
  current_price: 0,
};

const GlobalContext = createContext<IAppContext | undefined>(undefined);

export function useAppContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}

function createInitialContext(): IAppContext {
  const [coinConversionContext, setCoinConversionContext] =
    useState<ICoinBase>(defaultCoinData);
  const [coinBaseContext, setCoinBaseContext] =
    useState<ICoinBase>(defaultCoinData);

  return {
    coinConversionContext,
    setCoinConversionContext,
    coinBaseContext,
    setCoinBaseContext,
  };
}

export const AppContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contextValue = createInitialContext();

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
