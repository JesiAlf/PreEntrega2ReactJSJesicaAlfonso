import { useState } from "react";

const Checkout = () => {
        
        const [infoUsu, setInfoUsu]=useState({
email:"",
constraseña:"",
        });
        const [errors, setErrors]=useState({
          email:null,
          contraseña:null,

        });
        
       
        const verDatos=(e)=>{
            console.log(e.target.name)
            setInfoUsu({...infoUsu, [e.target.name]:e.target.value})
        }

            const enviarFormulario=(e)=>{
            e.preventDefaukt()  ;          
        
        console.log(infoUsu);
            };    
            console.log(errors)
    return (
      <div>
          <h1>Checkout</h1>
          <form onSubmit={enviarFormulario}>
            <input type ="text" name="email" onChange={verDatos} placeholder="email" />
            <span style={{color:"crimson", fontSize:"0.5rem"}}>{errors.email}</span>

            <input type ="text" name="contraseña" onChange={verDatos } placeholder="apellido"/>
            <span style={{color:"crimson", fontSize:"0.5rem"}}>{errors.contraseña}</span>

<button type="submit">Enviar</button>
<button type="button" onClick={()=>console.log("cancelado")}>Cancelar</button>

          </form> 
          </div>
    );
  };
  
  export default Checkout;