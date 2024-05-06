import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartWidget() {
  const [showModal, setShowModal] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = 0;

    cart.forEach((item) => {
      totalItems += item.quantity;
    });

    setCartItemCount(totalItems);
  }, [localStorage.getItem("cart")]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Link to="/checkOut/">
      <FaShoppingCart
        className="cart-icon"
        onClick={toggleModal}
      ></FaShoppingCart>
      <span className="badge badge-warning" id="lblCartCount">
        {cartItemCount}
      </span>
    </Link>
  );
}

export default CartWidget;
