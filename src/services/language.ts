import iconBrl from "../imgs/brl.png";
import iconUsd from "../imgs/usd.png";
import iconEur from "../imgs/euro.png";

function getLanguage(): ILanguages[] {
  const languages: ILanguages[] = [
    { icon: iconBrl, name: "brl" },
    { icon: iconUsd, name: "usd" },
    { icon: iconEur, name: "eur" },
  ];

  return languages;
}

export default getLanguage;
