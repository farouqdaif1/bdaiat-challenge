import { useTranslation } from "react-i18next";

const SwitchLang = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = i18n.dir(lng);

  };
  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ar")}>Arabic</button>
    </div>
  );
};

export default SwitchLang;
