/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import './editUsers.css';
import validate from "./validate";
import {updateUser } from "../../../redux/actions";
import primeraMayuscula from "../../../functions/primeraMayuscula";


   
const EditUser = () => {
    
    const dispatch = useDispatch();
    const {id} = useParams();

    const [errorSubmit,setErrorSubmit] = useState("");
    
    const [input, setInput] = useState({
        name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: '',
        employee: '',
        admin: '',
    })
    
    const [errors, setErrors] = useState({
        name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address:'',
        employee: '',
        admin:'',
    })
    
      useEffect(() => {
        async function getByID() {
            const {data} = await axios.get(`/users/${id}`)
            setInput({id: data.id, name: data.name, last_name: data.last_name, email: data.email, 
                phone_number: data.phone_number, address: data.address, employee: data.employee,
                admin: data.admin})
                if (data) {
                  if(data.employee === true) {
                      document.getElementById('employee').checked = true
                  }
                  if(data.admin === true) {
                      document.getElementById('admin').checked = true
                  }
                }

        }
        getByID()
        
      }, [id, dispatch])

      
    
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

      const mostrarAlertaExitosa = () => {
        Swal.fire({
          icon: 'success',
          title: '',
          text: 'El usuario ha sido actualizado',
        });
      };

      const isAllEmptyStrings = (array) => {
        for (const value of array) {
            if(value.length !== 0) return false;
        }
        return true;
      }

    
      const handleSubmit = async (evento) => {
        evento.preventDefault();
        try {
          
          const long = Object.values(errors);
          console.log(long)
          if (long.length === 0 || isAllEmptyStrings(long)) {
            input.name= primeraMayuscula(input.name)
            input.last_name= primeraMayuscula(input.last_name)
            if(input.employee ==="employee") {input.employee=true}
            else { input.employee= false}
            if(input.admin ==="admin")  {input.admin=true}
            else {input.admin= false}
            console.log(input)   
            await dispatch(updateUser(input))
            mostrarAlertaExitosa();
            // setInput({name:'', last_name: '', email:'', address:'', phone_number: '',
            //           password: '', password1: '', employee: '', admin:'',confirmationToken: ''})
            setErrors({name:'', last_name: '', email:'', address:'', phone: '', 
                       employee: '', admin:''})
            setErrorSubmit("");
            // desmarca todo los checkbox
          // for (let i = 0; i < document.f1.elements.length; i +=1) {
          //   if (document.f1.elements[i].type === 'checkbox') {
          //       document.f1.elements[i].checked = false;
          //   }
          // }
            
          }else {
            setErrorSubmit("Debe llenar los campos sin errores");
           
          }
        }catch (error) {
          setErrorSubmit(error)

        }
        
      }


      return <div className='Formedit-container'>
      <form  onSubmit={handleSubmit} name ="f1">
      <div className='formedittitle'>
      <h3 className="editTitle"> Editar usuario</h3>
      <div className="formedit">
      
        <div>
        <label htmlFor='name'>Nombre:</label>
        <input type="text" name ="name" id="name" value={input.name} onChange ={handleChange}
        className = {errors.name && 'warning'}/>
        {errors.name && <p className ='danger'>{errors.name}</p>}
        </div>

        <div>
        <label htmlFor="last_name">Apellido:</label>
        <input type="text" name ="last_name" id="last_name" value={input.last_name} onChange ={handleChange}
        className = {errors.last_name && 'warning'}/>
        {errors.last_name && <p className ='danger'>{errors.last_name}</p>}
        
        </div>
        
        <div>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id = "email" value={input.email} onChange = {handleChange}
        className = {errors.email && 'warning'}/>
        {errors.email && <p className ='danger'>{errors.email}</p>}
        
        </div>

        <div>
        <label htmlFor="phone_number">Teléfono:</label>
        <input type="text" name="phone_number" id="phone_number" value={input.phone_number} onChange = {handleChange}/>
        {errors.phone && <p className ='danger'>{errors.phone}</p>}
        
        </div>
       
        <div>
        <label htmlFor="address">Dirección:</label>
        <input type="text" name="address" value={input.address} onChange = {handleChange}/>
        {errors.address && <p className ='danger'>{errors.address}</p>}
        
        </div>

        </div>
        </div>
        <div className='editempleadoform'>
          <div className='formeditempleado-group'>
                <input type="checkbox" name="employee" id="employee" value="employee" onChange={handleChange} />
                <label htmlFor="employee">Empleado</label>
            
                <input type="checkbox" name="admin" id="admin" value="admin" onChange={handleChange} />
                <label htmlFor="admin">Administrador</label>
            

          <span className ='danger'>{errorSubmit}</span>
        </div>
  
       
        
        <button className ='userbutton' type="submit" id="submit">Editar Usuario</button>
        </div>
      
        
      </form>
      </div>
    }


export default EditUser




