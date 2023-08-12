import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import { LanguageContext } from "../context/language.context";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, languageContent, toggleLanguage } = useContext(LanguageContext);
  const { navigationContent } = languageContent[language];

  const changeTheme = () => {
    theme === "light" ? toggleTheme("dark") : toggleTheme("light");
    };

  return (
    <nav className={`Navbar ${theme}`}>
      <div>

        {navigationContent.map((navButtonContent, index) => (
          <NavLink
                  key={index}
                  to="/">{navButtonContent}
          </NavLink>
        ))}
        {languageContent.theme}

        <button
            onClick={toggleTheme }>{theme === "light" ? "🌞" : "🌙"} {theme}
        </button>

        <button
          className="btn-design"
          onClick={toggleLanguage}>{language === "Language" ? "🏴󠁧󠁢󠁥󠁮󠁧󠁿" : "🇫🇷"} {language}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
