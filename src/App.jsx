import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <div className="bg-slate-200 w-160%">
      <Router>
        {" "}
        {}
        <NavigationBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkOut/" element={<Checkout />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
