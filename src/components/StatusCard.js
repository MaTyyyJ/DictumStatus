import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

class StatusCard extends React.Component {
       render() {
        return (
            <Container fluid="sm" className="statusPage">
                <Card className="statusText">
                    <Card.Body className="d-flex align-items-center">
                        <div className="dot is-big"></div>
                        <h2>All systems <span className="statusOk">operational</span></h2>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default StatusCard;
