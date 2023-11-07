/* eslint-disable prefer-const */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable perfectionist/sort-imports */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { createEmpresa } from "../../../redux/actions";
import validate from "./validate"
import primeraMayuscula from "../../../functions/primeraMayuscula";
import './formCreateEmpresa.css'


   
const CreateEmpresa = () => {
    
    const dispatch = useDispatch();
    
    const [errorSubmit,setErrorSubmit] = useState("");
    
    const [input, setInput] = useState({
        name: '',
        type_of_person: 'default',
        email: '',
        phone: ''
        
    })
    
    const [errors, setErrors] = useState({
        name: '',
        type_of_person: '',
        email: '',
        phone: ''
       
    })
    
      useEffect(() => {
       // dispatch(getAllTeams())
      }, [dispatch])
    
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
          let long = Object.values(errors);
          if (long.length === 0) {
            input.name= primeraMayuscula(input.name)
         // await dispatch(createEmpresa(input))
            setErrorSubmit(`La Empresa ha sido creada`)
            setInput({name:'', type_of_person: 'default', email:'', phone: ''})
            setErrors({name:'', type_of_person: '', email:'', phone: ''})
          
          }else {
            setErrorSubmit("Debe llenar todos los campos sin errores");
           
          }
        }catch (error) {
          setErrorSubmit(error)

        }
        
      }

      return <div>
      <form className="form" onSubmit={handleSubmit} name ='form'>
      <h3 className="empresaTitle"> Datos de la Empresa</h3>
        

        <div>
        <label>Nombre de la empresa:</label>
        <input type="text" name ="name" id="name" value={input.name} onChange ={handleChange}
        className = {errors.name && 'warning'}></input>
        {errors.name && <p className ='danger'>{errors.name}</p>}
        </div>

        <div>
        <label>Persona:</label>
        <select onChange = {handleChange} name ="type_of_person" value={input.type_of_person}>
        <option value="default">Seleccione Genero</option>
            <option value="Natural" >Natural</option>
            <option value="Legal" >Legal</option>
        </select>
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id = "email" value={input.email} onChange = {handleChange}
        className = {errors.birthDay && 'warning'}/>
        {errors.email && <p className ='danger'>{errors.email}</p>}
        </div>
        <div>
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" value={input.phone} onChange = {handleChange}/>
        {errors.phone && <p className ='danger'>{errors.phone}</p>}
        </div>
       
        <span>{errorSubmit}</span>
       
        
        <button id="submit">Actualizar Empresa</button>
        
      
        
      </form>
      </div>
    }


export default CreateEmpresa