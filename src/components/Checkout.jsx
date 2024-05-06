import { useState } from "react";
import { Button } from "react-bootstrap";
import ItemListCardsCheckout from "./ItemListCardsCheckout";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
export const Checkout = () => {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(JSON.parse(localStorage.getItem("cart")));

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const buyerObject = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email
    }
    const order = {
      items: items,
      buyer: buyerObject,
      total: calcularTotalCarrito(items)
    };
    console.log("Orden:", JSON.stringify(order));

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const referenciaOrden = await addDoc(orderCollection, order)
    alert("Su orden: " + referenciaOrden.id + "ha sido completada");
  }

  const calcularTotalCarrito = (carrito) => {
    let total = 0;
    carrito.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <>
      <h1>Check Out</h1>
      {items.length > 0 ? (
        items.map((i) => {
          return <ItemListCardsCheckout key={i.id} producto={i} />;
        })
      ) : (
        <div>No hay items en el carrito.</div>
      )}
      <div>Total: ${calcularTotalCarrito(items)}</div>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onSubmit={handleSubmit}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <label style={{ width: "100px", paddingRight: "10px", textAlign: "right" }}>Nombre:</label>
          <input type="text" style={{ width: "200px" }} name="name" onChange={handleChange}></input>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <label style={{ width: "100px", paddingRight: "10px", textAlign: "right" }}>Celular:</label>
          <input type="number" style={{ width: "200px" }} name="phone" onChange={handleChange}></input>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <label style={{ width: "100px", paddingRight: "10px", textAlign: "right" }}>Email:</label>
          <input type="email" style={{ width: "200px" }} name="email" onChange={handleChange}></input>
        </div>
        <Button type="submit">Enviar Orden</Button>
      </form>
    </>
  );
};

export default Checkout;
