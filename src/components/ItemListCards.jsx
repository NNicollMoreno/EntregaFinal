import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export const ItemListCards = ({ producto: propProducto }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

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
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={producto.imageId} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <Card.Text>{producto.categoryId}</Card.Text>
        {}
        <Link to={`/item/${producto.id}`} onClick={handleClick}>
          <Button variant="primary">Ver a Detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ItemListCards;
