import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Navgation() {
    let navigate = useNavigate();
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => navigate("/")}>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/Detail")}>Detail</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default Navgation;
