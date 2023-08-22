import iconBrl from "../imgs/brl.png";
import iconUsd from "../imgs/usd.png";

function getLanguage(): ILanguages[] {
  const languages: ILanguages[] = [
    { icon: iconBrl, name: "brl" },
    { icon: iconUsd, name: "usd" },
  ];

  return languages;
}

export default getLanguage;
