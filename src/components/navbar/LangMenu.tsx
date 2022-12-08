import { useTranslation } from "react-i18next";
import { SelectLang } from "./styles";

const LangMenu = () => {
  const { i18n } = useTranslation();
  return (
    <SelectLang onChange={(event) => i18n.changeLanguage(event.target.value)}>
      <option value="en_US" hidden={i18n.language == "en_US"}>
        🇺🇸
      </option>
      <option value="es_ES" hidden={i18n.language == "es_ES"}>
        🇪🇸
      </option>
      <option value="de_DE" hidden={i18n.language == "de_DE"}>
        🇩🇪
      </option>
      <option value="se_SV" hidden={i18n.language == "se_SV"}>
        🇸🇪
      </option>
    </SelectLang>
  );
};

export default LangMenu;
