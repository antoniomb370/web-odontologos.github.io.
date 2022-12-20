import React from "react";
import Form from "../Components/Form";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

const Contact = () => {
  const { theme } = useEstadosGlobalesContext();
  return (
    <div className={theme}>
      <div className="formulario" > 
      <h2>  Quieres mas información?</h2>
      <p>Deja tus datos y nos comunicaremos contigo</p>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
