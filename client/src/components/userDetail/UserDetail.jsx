/* eslint-disable perfectionist/sort-imports */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/actions'; // Asegúrate de importar la acción correcta


export default function UserDetail(props) {
  const { id } = useParams();
  console.log('Parámetros de la ruta:', useParams()); // Imprime los parámetros de la ruta
  const [user,] = useState(null);
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log('ID del usuario:', id); // Imprime el valor de id
        const response = await axios.get(`/users/${id}`);
        dispatch(updateUser(response.data)); // Envía la acción al store de Redux
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUser();
  }, [id, dispatch]);

  return (
    <div>
      {user ? (
        <div>
          <p>{user.email}</p>
          <p>{user.name}</p>
        </div>
      ) : (
        <div>Inicie sesion </div>
      )}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Nueva contraseña"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Nueva dirección de envío"
      />
      <button type="button" onClick={updateUser}>Actualizar</button>
    </div>
  );
}