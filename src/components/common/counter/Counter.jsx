
const Counter = ({sumar, restar, contador,onAdd}) => {
  return (
<div>
            <button onClick={sumar}>sumar</button>
            <h4>{contador}</h4>

            <button onClick={restar}>restar</button>
            <button onClick={()=>onAdd(contador)}>Comprar</button>

        </div> 
         );
};

export default Counter;