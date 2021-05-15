import { Nav, Navbar} from "react-bootstrap";

export default function Header(){
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">ABC Choching Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/pdf">Pdf's</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}