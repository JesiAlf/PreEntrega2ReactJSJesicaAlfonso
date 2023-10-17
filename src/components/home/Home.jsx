import styles from "./components/home/Home.module.css"
import {usestate} from "react"
export const Home=()=>{
    const[counter, setCounter] = usestate(0)
    const sumar=()=>{
        setCounter(counter+1)
}
    

return(
    <div >
        <h2 className={styles.title }>Este es el titulo</h2>
        <h4>{counter}</h4>
        <button onClick={carrito}>carrito</button>
    </div>
);
};
