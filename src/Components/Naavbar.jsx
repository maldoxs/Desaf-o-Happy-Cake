import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { FcHome, FcContacts, FcFullTrash } from "react-icons/fc";

const fontStyles = { fontSize: "21px", marginBottom: "7px" };

const Naavbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="colores">
                <Container className="justify-content-start">
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        <FcHome style={fontStyles} /> Home
                    </Link>
                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                        <FcContacts style={fontStyles} /> Contacto
                    </Link>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <h6>
                                Happy Cake <FcFullTrash style={fontStyles} />
                            </h6>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Naavbar;
