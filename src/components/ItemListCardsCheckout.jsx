import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export const ItemListCardsCheckout = ({ producto: propProducto }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  const actualizarCarrito = (producto, cantidad) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item.id === producto.id
    );

    if (existingProductIndex !== -1) {
      const updatedQuantity = cart[existingProductIndex].quantity + cantidad;
      if (updatedQuantity <= 0) {
        cart.splice(existingProductIndex, 1);
      } else {
        cart[existingProductIndex].quantity = updatedQuantity;
      }
    } else {
      if (cantidad > 0) {
        cart.push({ ...producto, quantity: 1 });
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
  };

  useEffect(() => {
    if (id && !propProducto) {
      const selectedProduct = localStorage.getItem("selectedProduct");
      if (selectedProduct) {
        setProducto(JSON.parse(selectedProduct));
      }
    } else if (propProducto) {
      setProducto(propProducto);
    }
  }, [id, propProducto]);

  const handleClick = () => {
    localStorage.setItem("selectedProduct", JSON.stringify(producto));
  };

  if (!producto) {
    return <div>Loading...</div>;
  }

  return (
    <Card style={{ width: "6rem" }}>
      <Card.Img variant="top" className="w-80%" src={producto.imageId} />
      <Card.Body>
        <Card.Title>
          {producto.title} ({producto.quantity})
        </Card.Title>
        {}
        <Link to={`/item/${producto.id}`} onClick={handleClick}>
          <Button variant="primary">${producto.price}</Button>
          <Button
            variant="primary"
            onClick={() => actualizarCarrito(producto, -1)}
          >
            Eliminar
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ItemListCardsCheckout;
