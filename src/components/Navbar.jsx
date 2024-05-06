import { Navbar, Nav, Button, NavLink } from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo from "../../img/Recurso 151l1.png";

function NavigationBar() {
  return (
    <>
      <Navbar className='NavBar' style={{ alignItems: "center", width: "100%" }}>
        <Navbar.Brand href="/" style={{ fontWeight: "bold" }}>
          <img src={logo} alt="logo" style={{ width: "20%", height: "20%", padding: "10px" }} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink href="/">
            <Button variant="outline-secondary" style={{ marginRight: "10px" }}>
              Inicio
            </Button>
          </NavLink>
          <NavLink href="/category/pie/" as={NavLink}>
            <Button variant="outline-secondary" style={{ marginRight: "10px" }}>
              Pie
            </Button>
          </NavLink>
          <NavLink href="/category/torta/" as={NavLink}>
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
