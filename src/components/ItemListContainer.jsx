import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { ItemListCards } from "./ItemListCards";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      const querySnapshot = await getDocs(itemsCollection);
      console.log("query", querySnapshot);
      const productosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(productosData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {productos.map((producto) => (
        <ItemListCards key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemListContainer;
