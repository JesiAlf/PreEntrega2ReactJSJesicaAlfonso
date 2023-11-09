import { Button, IconButton } from "@mui/material"
import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";
import { orange } from "@mui/material/colors";
import Swal from "sweetalert2";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Cart = () => {

  const {cart,clearCart, deleteProductById, getTotalPrecio}= useContext(CartContext);
   const total=getTotalPrecio();

   const clearCarrito=()=>{
    Swal.fire({
      title: "Estas seguro que quieres limpiar tu carrito?",
      text: "No podrás recuperar tus elecciones!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si, eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire({
          title: "Eliminado!",
          text: "Tu lista de productos se ha eliminado con éxito.",
          icon: "success"
        });
      }
    
    });
   }

  return (
      <div>
          <h1>Tu carrito</h1>
          {
            cart.map((product)=>(
            <div key={product.id} style={{border: "4px solid orange", padding:"2rem"}}>
              <h2>{product.title}</h2>
              <h2>{product.precio}</h2>
              <h2>cantidad:{product.quantity}</h2>
              <IconButton onclick={()=>deleteProductById(product.id)}>
      <DeleteForeverIcon/>
      </IconButton> 
      </div>
              
          ))}
           {cart.length > 0 && (
        <div>
<h3>Total a pagar: {total}</h3>
          <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button></Link>
      <Button variant="contained" onClick={clearCarrito}>Borrar</Button>
     </div>
    )
  }
  </div>
  );
};
  
  export default Cart;