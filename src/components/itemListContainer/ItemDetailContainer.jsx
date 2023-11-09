import { useEffect, useState } from "react";
import { products } from "../productsMock";
import { ItemDetail } from "./ItemDetail";
import{useParams} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from  "sweetalert2"

const ItemDetailContainer=()=>{
    const [productSelected,setProductSelected]=useState({});
    const {id}=useParams()

    const {addToCart, getQuantityById}=useContext(CartContext)
let totalQuantity=getQuantityById(id)
    

useEffect(()=>{
        let producto=products.find((product)=>product.id=== +id);
        const getProduct = new Promise((resolve)=>{
            resolve(producto );
        });
        getProduct
        .then((res)=>setProductSelected(res))
        .catch((err)=>console.log(err));
    },[id]);
    const onAdd =(cantidad)=> {
        let artes={
            ...productSelected,
            quantity:cantidad,
        };
        addToCart(artes)  

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Agregaste al carrito",
            showConfirmButton: false,
            timer: 1500
          });
        
        
    };

    return <ItemDetail productSelected={productSelected} onAdd={onAdd} initial={totalQuantity}/>;
    

};
export default ItemDetailContainer;