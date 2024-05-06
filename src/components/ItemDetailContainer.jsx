import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export const ItemDetailContainer = ({ producto: propProducto }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart);
  let cartItem = {};
  if (cart && producto) {
    cartItem = cart.find((item) => item.id === producto.id);
  }

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

  const handleInicio = () => {
    navigate("/");
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

  if (!producto) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-list-cards">
      <div className="container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            alt="Imagen de producto"
            variant="top"
            src={producto.imageId}
          />
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>{producto.description}</Card.Text>
            <div>{`Stock ${producto.stock}`}</div>
            <div>{`Precio ${producto.price}`}</div>

            <div className="d-flex align-items-center mb-3">
              {" "}
              {}
              {cartItem && (
                <Button
                  variant="primary"
                  className="mr-2"
                  onClick={() => actualizarCarrito(producto, -1)}
                >
                  -
                </Button>
              )}
              {console.log(cartItem)}
              <Button
                variant="primary"
                onClick={() => actualizarCarrito(producto, 1)}
              >
                Agregar al carrito ({cartItem ? cartItem.quantity : "0"})
              </Button>
              <Button
                variant="primary"
                className="mr-2"
                onClick={() => actualizarCarrito(producto, 1)}
              >
                +
              </Button>
            </div>
            <Button variant="primary" onClick={handleInicio}>
              Volver
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
