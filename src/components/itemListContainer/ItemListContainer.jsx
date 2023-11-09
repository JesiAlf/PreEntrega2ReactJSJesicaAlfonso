import { useEffect, useState } from "react";
import { products } from "../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 1000);
    });
    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <>
      {items.length === 0 ? (
        <RingLoader
          size={30}
          color="orange"
          cssOverride={{
            display: "block",
            margin: "0 auto",
            borderColor: "orange",
          }}
        />
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};
export default ItemListContainer;
