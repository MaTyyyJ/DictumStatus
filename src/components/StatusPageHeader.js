import React from "react";
import Container from "react-bootstrap/Container";

class StatusPageHeader extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date(),
            curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.state = {
            countDown: 60,
            curTime: curTime
        };

    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    tick() {
        const current = this.state.countDown;
        if (current === 0) {
            this.transition();
        } else {
            this.setState({countDown: current - 1});
        }
    }

    transition() {
        clearInterval(this.timer);
    }


    render() {
        return (
            <div className="statusPageHeader">
                <div className="gradientContainer">
                    <div className="gradient"></div>
                </div>
                <Container fluid="sm" className="header desktop">
                    <div className="header-container d-flex align-items-center justify-content-between">
                        <a href="https://status.dictumsoft.eu/" className="d-flex">
                            <img src={require('../assets/img/logo.png')} className="logo" alt="Dictumsoft Logo"/>
                        </a>
                        <div>
                            <h2 className="uk-h4 uk-margin-remove">Service status</h2>
                            <div className="uk-flex-inline">
                                <div className="font-14 last-update">Last updated <span
                                    className="last-updated">{this.state.curTime}</span> | Next update in <span
                                    className="counter">{String(this.state.countDown).padStart(2, '0')}</span> sec.
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default StatusPageHeader;
