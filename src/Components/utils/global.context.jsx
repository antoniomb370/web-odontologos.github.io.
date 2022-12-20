import { createContext, useContext, useState } from "react";
const initialState = { theme: "light", data: [] };
const EstadosGlobales = createContext();
const EstadosGlobalesProvider = ({ children }) => {
  const [odontologos, setOdontologos] = useState(initialState.data);
  const [theme, setTheme] = useState(initialState.theme);
  const value = {
    odontologos,
    setOdontologos,
    theme,
    setTheme,
  };
  return (
    <EstadosGlobales.Provider value={value}>
      {children}
    </EstadosGlobales.Provider>
  );
};
export default EstadosGlobalesProvider;
export const useEstadosGlobalesContext = () => useContext(EstadosGlobales);
