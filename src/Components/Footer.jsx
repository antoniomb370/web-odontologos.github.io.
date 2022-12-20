import React from "react";
import { useEstadosGlobalesContext } from "./utils/global.context";

const Footer = () => {
  const { theme } = useEstadosGlobalesContext();
  return (

    <footer className={theme}>
      <img className="logoFooter" src="../images/DH.png" alt="DH-logo" />
      <img className="logos" src="../images/ico-facebook.png" alt="facebook" />
      <img className="logos" src="../images/ico-instagram.png" alt="instagram" />
      <img className="logos" src="../images/ico-tiktok.png" alt="tiktok" />
      <img className="logos" src="../images/ico-whatsapp.png" alt="whatsapp" />
    </footer>

  );
};

export default Footer;

