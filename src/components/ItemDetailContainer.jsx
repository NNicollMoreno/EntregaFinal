import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const ItemDetailContainer = ({ greeting }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const objeto = location.state.objeto;

  const [cantidad, setCantidad] = useState(1);

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    console.log(`Agregado al carrito: ${cantidad} x ${objeto.name}`);
  };

  const handleInicio = () => {
    navigate("/");
  };

  return (
    <div className="item-list-cards">
      <h2>{greeting}</h2>
      <div className="container">
        <Card style={{ width: "18rem" }}>
          <Card.Img alt="Imagen de producto" variant="top" src={objeto.img} />
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>{producto.description}</Card.Text>
            <div>{`Stock ${producto.stock}`}</div>
            <div>{`Precio ${producto.price}`}</div>
            <div className="d-flex align-items-center">
              <Button variant="primary" onClick={decrementarCantidad}>
                -
              </Button>
              <span className="mx-2">{cantidad}</span>
              <Button variant="primary" onClick={incrementarCantidad}>
                +
              </Button>
            </div>
            <Button variant="primary" onClick={agregarAlCarrito}>
              Agregar al carrito
            </Button>
            <Button variant="primary" onClick={handleInicio}>
              Volver
            </Button>{" "}
            {}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
