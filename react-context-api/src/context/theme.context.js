import { useState, createContext } from "react";

    const ThemeContext = createContext();


    // CREATE A WRAPPER COMPONENT
    function ThemeProviderWrapper(props) {
        const [theme, setTheme] = useState("light"); // <== ADD

        const toggleTheme = () => {    // <== ADD
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
        };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
    }

export  { ThemeContext, ThemeProviderWrapper };   // <== UPDATE