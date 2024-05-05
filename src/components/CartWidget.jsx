import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartWidget() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Link to="/cart">
      <FaShoppingCart
        className="cart-icon"
        onClick={toggleModal}
      ></FaShoppingCart>
      <p className="cart-items flex">5</p>
    </Link>
  );
}

export default CartWidget;
