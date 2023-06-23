import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
    return (
        <div>
            <Container>
                <div className="text-center">
                    <img src="../../src/img/error.avif" alt="404" width="900" />
                </div>
            </Container>
        </div>
    );
};

export default NotFound;
