import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { SelectLang } from "./styles";

const LangMenu = () => {
  const { i18n } = useTranslation();
  const handleLangChange = useCallback(
    (event: any) => {
      i18n.changeLanguage(event.target.value);
    },
    [i18n]
  );
  return (
    <SelectLang onChange={handleLangChange}>
      <option value="es_ES">πͺπΈ</option>
      <option value="en_US">πΊπΈ</option>
      <option value="de_DE">π©πͺ</option>
      <option value="se_SV">πΈπͺ</option>
    </SelectLang>
  );
};

export default memo(LangMenu);
