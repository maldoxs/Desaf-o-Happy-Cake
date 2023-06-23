import { Container } from "react-bootstrap";

export default () => {
    return (
        <Container className="text-center">
            <h1 className="pt-5">
                Bienvenido a <span className="fw-bold">Happy Cake</span>
            </h1>
            <h6> El lugar de los pasteles felices </h6>
            <div className="">
                <img src="../../src/img/torta.jpg" alt="torta" className="rounded" width="200" />
            </div>
        </Container>
    );
};
