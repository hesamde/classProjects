import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import { ThemeContext } from "./context/theme.context";
import { useContext } from "react";
//import { ThemeContext } from "./context/theme.context";
//import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);
//  const { theme } = useContext(ThemeContext);
  return (
//Add the <div className={`App ${theme}`}>
    <div className={`App ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;

// changes in GREEN