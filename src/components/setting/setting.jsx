import SwitchLang from "../NavBar/SwitchLang/SwitchLang";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const Setting = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className="setting">
      <h1>{t("setting")}</h1>
      <div className="lang">
        <h2>{t("language")}</h2>
        <SwitchLang />
      </div>
      <div className="theme">
        <h2>{t("Theme")}</h2>
        <div className="switch">
          <label>
            {theme === "light" ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </div>
  );
};

export default Setting;
