import { useContext, useState } from "react";

import { CartContext } from "../contexts/CartContext";
import { Button, Container } from "react-bootstrap";
import {
  getFirestore,
  doc,
  updateDoc,
  collection,
  addDoc,
} from "firebase/firestore";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);
  const { items } = useContext(CartContext);

  const total = () => {
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    const handleChange = (ev) => {
      setValues((prev) => {
        return {
          ...prev,
          [ev.target.name]: ev.target.value,
        };
      });
    };

    const handleSubmit = () => {
      const order = {
        buyer: values,
        items: items,
        total: total(),
      };

      const db = getFirestore();
      const orderCollection = collection(db, "orders");

      addDoc(orderCollection, order).then(([id]) => {
        if (id) {
          alert("Su orden: " + id + "ha sido completada");
        }
      });

      return (
        <Container className="mt-4">
          <h1>Productos</h1>
          {items.map((i) => {
            return (
              <ul>
                <li>Producto: {i.name}</li>
                <li>Cantidad: {i.quantity}</li>
                <li>$ {i.price}</li>
              </ul>
            );
          })}
          <div>Total: {total()}</div>
          <form>
            <label>Nombre</label>
            <input
              type="text"
              value={values.name}
              onChange={handleChange}
            ></input>
            <label>Celular</label>
            <input
              type="text"
              value={values.phone}
              onChange={handleChange}
            ></input>
            <label>Email</label>
            <input
              type="email"
              value={values.email}
              onChange={handleChange}
            ></input>
          </form>
          <Button onClick={handleSubmit}>Enviar Orden</Button>
        </Container>
      );
    };
  };
};
