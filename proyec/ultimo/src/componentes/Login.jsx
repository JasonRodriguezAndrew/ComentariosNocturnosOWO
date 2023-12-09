import React, { useState } from "react";
import Cuestionario from "./cuestionario";

function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [credencialesCorrectas, setCredencialesCorrectas] = useState(false);

  const handleLogin = () => {
    const username = "admin";
    const password = "admin";

    if (usernameInput === username && passwordInput === password) {
      setCredencialesCorrectas(true);
    } else {
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  if (credencialesCorrectas) {
    return <Cuestionario />;
  }

  return (
    <div>
      <label htmlFor="#">Usuario: </label>
      <input
        type="text"
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
      />

      <label htmlFor="#">Contraseña: </label>
      <input
        type="password"
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      />

      <center>
        <button onClick={handleLogin}>Ingresar</button>
      </center>
    </div>
  );
}

export default Login;
