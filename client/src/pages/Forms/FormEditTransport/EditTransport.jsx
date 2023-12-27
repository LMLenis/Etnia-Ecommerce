/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios'
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import './formedittransport.css'
import validate from "./validate";
import { updateLogistica} from '../../../redux/actions';
import primeraMayuscula from "../../../functions/primeraMayuscula";


   
const EditTransport = () => {
    
    const dispatch = useDispatch();
    const {id} = useParams();

    const [errorSubmit,setErrorSubmit] = useState("");
    
    const [input, setInput] = useState({
        name: '',
        location: 'default',
        email: '',
        phone: '',
        shippingPrice: 0
        
    })
    
    const [errors, setErrors] = useState({
        name: '',
        location: 'default',
        email: '',
        phone: '',
        shippingPrice: 0
       
    })
    
      useEffect(() => {
        async function getByID() {
            const { data } = await axios.get(`/tables/logistica/${id}`);
            setInput(data)
        }
        getByID()
      }, [id,dispatch])

      const mostrarAlertaExitosa = () => {
        Swal.fire({
          icon: 'success',
          title: '',
          text: 'La transportadora ha sido actualizada',
        });
      };
    
      const isAllEmptyStrings = (array) => {
        for (let i; i <array.lenth-1; i++) {
            if(array[i].length !== 0) return false;
        }
        return true;
      }
      
      const handleChange = (evento) => {
        setInput({
          ...input,
          [evento.target.name]: evento.target.value
        })
        setErrors(
          validate({
            ...input,
            [evento.target.name]: evento.target.value
          })
        )
        setErrorSubmit("");
      }
    
      const handleSubmit = async (evento) => {
        evento.preventDefault();
        try {
          console.log(input)
          console.log(errors)
          const long = Object.values(errors);
          if (long.length === 0 || isAllEmptyStrings(long)) {
          input.name = primeraMayuscula(input.name)
          await dispatch(updateLogistica(input))
          mostrarAlertaExitosa ()
          // setInput({name:'', location: 'default', email:'', phone: '', shippingPrice: 0})
          setErrors({name:'', location: '', email:'', phone: '', shippingPrice: 0})
          setErrorSubmit('')
          }else {
            setErrorSubmit("Debe llenar todos los campos sin errores");
           
          }
        }catch (error) {
          setErrorSubmit(error)

        }
        
      }
    
      return <div className="Formtransport-container">
      <form  onSubmit={handleSubmit} name ='form'>
      <h3 className="transportTitle"> Editar Transportadora</h3>
        <div className="formtransport">
           
        
            <div>
                <label>Nombre de la empresa:</label>
                <input type="text" name ="name" id="name" value={input.name} onChange ={handleChange}
                className = {errors.name && 'warning'} />
                {errors.name && <p className ='danger'>{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id = "email" value={input.email} onChange = {handleChange}
                className = {errors.birthDay && 'warning'}/>
                {errors.email && <p className ='danger'>{errors.email}</p>}
            </div>

            <div>
                <label >Teléfono:</label>
                <input type="text" name="phone" value={input.phone} onChange = {handleChange}/>
                {errors.phone && <p className ='danger'>{errors.phone}</p>}
            </div>
            <div>
                <label>Locación:</label>
                <select onChange = {handleChange} name ="location" value={input.location}>
                    <option value="default">Seleccione una opción</option>
                    <option value="local" >Local</option>
                    <option value="nacional" >Nacional</option>
                </select>
            </div>
            <div >
                <label >Tarifa:</label>
                <input  type="number" min="0" name="shippingPrice" value={input.shippingPrice} onChange = {handleChange}/>
                <p className ='danger'>{errorSubmit}</p>
            </div>
       
            
            
        </div>
        <button className ='button' id="submit">Editar Transportadora</button>
              
      </form>
      </div>
    }


export default EditTransport