import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contacto = () => {
    return (
        <div>
            <Container className="text-center mt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-color">
                        Enviar
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Contacto;
