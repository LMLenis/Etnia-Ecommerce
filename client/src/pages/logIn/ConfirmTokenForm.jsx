/* eslint-disable spaced-comment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/order */
/* eslint-disable no-shadow */
/* eslint-disable perfectionist/sort-imports */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { confirmToken } from "../../redux/actions";

import LogoEtniablanco from "../../assets/png/LogoEtniablanco.png";

import { Link, useNavigate } from "react-router-dom";

import styles from "./LogIn.module.css";

function ConfirmTokenForm() {
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Utiliza useEffect para obtener el token de la URL cuando el componente se carga
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get("token");

    if (tokenParam) {
      setToken(tokenParam);
    }
  }, []);

  const handleConfirmToken = (event) => {
    event.preventDefault();

    if (!token) {
      setError("El campo de token no puede estar vacío.");
      return;
    }

    // Luego, confirma el token utilizando tu acción `confirmToken`
    dispatch(confirmToken(token))
      .then((response) => {
        console.log("formulario dispatch");
        console.log(response.success);
        if (response.success) {
          navigate("/");
          // Aquí puedes continuar con el código después de confirmar el token con éxito
        }
      })
      .catch((error) => {
        console.log(error);
        //setError("Error al confirmar el token");
        // Determina el código de estado según el tipo de error
      });
  };

  return (
    <div className={styles["login-container"]}>
      <h2>Confirmar Token</h2>
      <img src={LogoEtniablanco} alt="Etnia Logo" />
      <form className={styles["login-form"]} onSubmit={handleConfirmToken}>
        <div className={styles["form-group"]}>
          <label>Token de Confirmación</label>
          <input
            type="text"
            placeholder="Ingresa el token de confirmación"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <button type="submit">Confirmar Token</button>
      </form>
      {error && <div className={styles["error-message"]}>{error}</div>}
    </div>
  );
}

export default ConfirmTokenForm;
