import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { ItemListCards } from "./ItemListCards";
import { useParams } from "react-router-dom";
export const ItemListContainer = () => {
  const { category } = useParams();
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

  let filteredProducts = productos.filter((product) =>
  (product.categoryId.toLowerCase().includes(category) ||
    product.title.toLowerCase().includes(category))
  );

  if (!category) {
    filteredProducts = productos;
  }

  return (
    <div>
      {filteredProducts.map((producto) => (
        <ItemListCards key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemListContainer;
