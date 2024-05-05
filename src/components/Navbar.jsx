import { Navbar, Nav, Button, NavLink } from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo from "../../img/Recurso 151l1.png";

function NavigationBar() {
  return (
    <>
      <Navbar style={{ alignItems: "center", width: "100%" }}>
        <Navbar.Brand href="/" style={{ fontWeight: "bold" }}>
          <img src={logo} alt="logo" style={{ width: "10%", height: "10%", padding: "10px" }} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink href="/">
            <Button variant="outline-secondary" style={{ marginRight: "10px" }}>
              Inicio
            </Button>
          </NavLink>
          <NavLink to="category/pie" as={NavLink}>
            <Button variant="outline-secondary" style={{ marginRight: "10px" }}>
              Pie
            </Button>
          </NavLink>
          <NavLink to="category/Torta" as={NavLink}>
            <Button variant="outline-secondary" style={{ marginRight: "10px" }}>
              Torta
            </Button>
          </NavLink>
          <CartWidget />
        </Nav>

      </Navbar>
    </>
  );
}

export default NavigationBar;
