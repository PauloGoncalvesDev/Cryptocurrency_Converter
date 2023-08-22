import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import getLanguage from "../../services/language";
import "../Languages/languages.css";

function Languages() {
  const [language, setLanguage] = useState<string>("");
  const [languageList, setLanguageList] = useState<ILanguages[]>([]);
  const [isActiveSelect, setIsActiveSelect] = useState<boolean>(false);

  useEffect(() => {
    const languageList: ILanguages[] = getLanguage();
    setLanguageList(languageList);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    setIsActiveSelect(true);
  };

  return (
    <FormControl id="text-language" sx={{ m: 1, minWidth: 10 }}>
      <Select
        value={language}
        onChange={handleChange}
        defaultValue="brl"
        className={isActiveSelect ? "" : "select-default"}
      >
        {languageList.map((language: ILanguages) => {
          return (
            <MenuItem value={language.name} key={language.name}>
              <img id="image-icon" src={language.icon} alt={language.name} />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default Languages;
