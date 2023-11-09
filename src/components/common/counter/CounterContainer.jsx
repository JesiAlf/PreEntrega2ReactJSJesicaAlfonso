import { useState } from "react";
import Counter from "./Counter";

const CounterContainer=({stock,onAdd, initial=1})=>{
    const[contador, setContador]=useState(initial);

    const sumar=() => {
        if(contador<stock){
        setContador(contador + 1);
    } else{
        alert("no hay stock suficiente");
    }
};
    const restar=()=>{
        if(contador>1){
        setContador(contador-1);
    }
};

    return <Counter sumar={sumar} restar={restar} contador={contador} onAdd={onAdd}/>

};
export default CounterContainer;
