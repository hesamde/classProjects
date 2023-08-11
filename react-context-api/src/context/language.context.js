import { useState, createContext } from "react";

const LanguageContext = createContext();

function LanguageProviderWrapper(props) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === "en" ? "fr" : "en"));
  };

  const languageContent = {
    en: {
      navigationContent: ["Home", "Projects"],
    },
    fr: {
      navigationContent: ["Maison", "Projets"],
    },
  };


  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, languageContent }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProviderWrapper };

// code update
// 1 .  const toggleLanguage = () => {setLanguage(prevLanguage => (prevLanguage === "en" ? "fr" : "en"));};
// 2 . return (<LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, languageContent }}>{props.children}</LanguageContext.Provider>);}
