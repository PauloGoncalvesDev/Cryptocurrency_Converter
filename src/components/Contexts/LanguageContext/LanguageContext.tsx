import { createContext, useContext, useState } from "react";

const LanguageGlobalContext = createContext<ILanguagesContext | undefined>(
  undefined
);

function createInitialContext(): ILanguagesContext {
  const [languageContextDefault, setLanguageContextDefault] =
    useState<string>("brl");

  return { languageContextDefault, setLanguageContextDefault };
}

export function useLanguageContext(): ILanguagesContext {
  const context = useContext(LanguageGlobalContext);
  if (!context) {
    return createInitialContext();
  }
  return context;
}

export const LanguageContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contextValue = createInitialContext();

  return (
    <LanguageGlobalContext.Provider value={contextValue}>
      {children}
    </LanguageGlobalContext.Provider>
  );
};
