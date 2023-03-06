import React, {useRef, useState} from "react";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import Container from "react-bootstrap/Container";
import APIHelper from "../modules/APIHelper";
import {Overlay, OverlayTrigger, Popover, Row} from "react-bootstrap";

class Statuses extends React.PureComponent {
    isLoaded;

    constructor() {
        super();
        this.state = {
            isLoaded: false,
            apiData: {}
        };
    }

    componentDidMount() {
        APIHelper.fetchFood('Dairy').then((data) => {
            this.setState({isLoaded: true, apiData: data});
        });
    }


    render() {
        console.log("wtf");
        return (
            <Container fluid="sm" className="monitoring">
                <h2>Uptime <Badge bg="secondary">Last {this.state.isLoaded ? this.state.apiData.length : 0} days</Badge>
                </h2>
                <Card>
                    {this.state.isLoaded ? (
                        <Card.Body className="px-0 d-flex align-items-center justify-content-between">
                            <Row>
                                <div className="d-flex justify-content-between flex-wrap">
                                    <div className="text-muted d-flex mr-auto">
                                        <a title="Mail Server" className="monitor-name" href="#"> Mail Server</a>
                                        <div>
                                            <span className="me-2 ms-2 d-visible@s">|</span>
                                            <span className="statusOk">100.00%</span>
                                        </div>
                                    </div>
                                    <div className="statusOk" title="Operational">
                                        <span className="dot" aria-hidden="true"></span>
                                        <span className="d-visible@s m-l-10">Operational</span>
                                    </div>
                                </div>
                                <div className="d-flex monitor-charts justify-content-between">
                                    {[...Array(this.state.apiData.length)].map((x, i) => {
                                        const classNamex = 'rect desktop ' + i;
                                        return (
                                            <>
                                                <OverlayTrigger
                                                    trigger="click"
                                                    key={i}
                                                    placement="bottom"
                                                    overlay={
                                                        <Popover id={`popover-positioned-${i}`}>
                                                            <Popover.Header as="h3">{`Popover ${i}`}</Popover.Header>
                                                            <Popover.Body>
                                                                <strong>w.i.p</strong>
                                                            </Popover.Body>
                                                        </Popover>
                                                    }
                                                >
                                                    <div key={i} className={classNamex}></div>
                                                </OverlayTrigger>
                                            </>
                                        );
                                    })}
                                </div>
                            </Row>
                        </Card.Body>
                    ) : (
                        <h2>Trwa ładowanie</h2>
                    )}

                </Card>
            </Container>
        )
    };
}

export default Statuses;
