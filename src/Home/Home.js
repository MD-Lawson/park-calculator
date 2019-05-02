import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import Container from 'react-bootstrap/Container';
import HowMany from './howManyCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            numAdults: 0,
            numChild: 0,
        }
        this.handlePlusorMinusClick = this.handlePlusorMinusClick.bind(this);
    }

    handlePlusorMinusClick(adults, plus) {
        var numAdults = this.state.numAdults;
        if (adults) {
            if (plus) this.setState({ numAdults: numAdults + 1 })
            if (!plus && numAdults > 0) this.setState({ numAdults: numAdults - 1 })
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <HowMany title='Number of Adults' numAdults={this.state.numAdults} handleClick={this.handlePlusorMinusClick} />
                    </Col>
                    <Col>
                    <HowMany title='Number of Children' numAdults={this.state.numAdults} handleClick={this.handlePlusorMinusClick} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;