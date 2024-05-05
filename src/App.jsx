import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/Navbar";
import ItemListCards from "./components/ItemListCards";
import ItemListContainer from "./components/ItemListContainer";
import { Cart } from "./components/Cart";

function App() {
  return (
    <Router>
      {" "}
      {/* AsegÃºrate de envolver tu componente con BrowserRouter */}
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemListCards />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
