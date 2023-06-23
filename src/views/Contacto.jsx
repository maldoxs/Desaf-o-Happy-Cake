import { Container } from "react-bootstrap";
import Contacto from "../Components/Contacto";

export default () => {
    return (
        <Container className="text-center mt-5">
            <h1 className="mb-3">Cuentanos, ¿en que te podemos ayudar?</h1>
            <Contacto />
        </Container>
    );
};
