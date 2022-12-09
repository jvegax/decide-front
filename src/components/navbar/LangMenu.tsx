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
      <option value="es_ES">🇪🇸</option>
      <option value="en_US">🇺🇸</option>
      <option value="de_DE">🇩🇪</option>
      <option value="se_SV">🇸🇪</option>
    </SelectLang>
  );
};

export default memo(LangMenu);
