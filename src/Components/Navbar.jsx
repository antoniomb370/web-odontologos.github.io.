import React from "react";
import { useEstadosGlobalesContext } from "./utils/global.context";
import { Link } from "react-router-dom";
import { links } from "./utils/links";


const Navbar = () => {
  const { theme, setTheme } = useEstadosGlobalesContext();
  const { home, contacto, favs, dentista } = links;

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <nav className={theme}>
     
      <Link to={home.path}>{home.name}</Link>
      <Link to={contacto.path}>{contacto.name}</Link>
      <Link to={favs.path}>{favs.name}</Link>
    
      <button onClick={handleTheme}>⬛⬛</button>
    </nav>
  );
};
export default Navbar;
