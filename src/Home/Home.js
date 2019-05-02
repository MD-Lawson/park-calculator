import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HowMany from './howManyCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            numAdults: 0,
            numChild: 0,
            modalShow: false,
        }
        this.handlePlusorMinusClick = this.handlePlusorMinusClick.bind(this);
        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handlePlusorMinusClick(adults, plus) {
        var numAdults = this.state.numAdults;
        var numChild = this.state.numChild;
        if (adults) {
            if (plus) this.setState({ numAdults: numAdults + 1 })
            if (!plus && numAdults > 0) this.setState({ numAdults: numAdults - 1 })
        } else {
            if (plus) this.setState({ numChild: numChild + 1 })
            if (!plus && numChild > 0) this.setState({ numChild: numChild - 1 })
        }
    }

    handleModalShow() {
        this.setState({ modalShow: true })
    }
    handleModalClose() {
        this.setState({ modalShow: false })
    }

    render() {
        return (
            <Container>
                <Row style={{ 'marginBottom': '5%' }}>
                    <Col>
                        <HowMany title='Number of Adults' numAdults={this.state.numAdults} handleClick={this.handlePlusorMinusClick} />
                    </Col>
                    <Col>
                        <HowMany title='Number of Children' numChild={this.state.numChild} handleClick={this.handlePlusorMinusClick} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <Button variant='secondary' style={{
                            'float': 'right', 'borderRadius': '50%', 'width': '4.5em',
                            'height': '4.5em',
                        }} onClick={this.handleModalShow}> <FontAwesomeIcon icon='plus' size='3x' />
                        </Button>
                        <Modal show={this.state.modalShow} onHide={this.handleModalClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Please Select A Park</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleModalClose}>
                                    Select
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                    <Col>
                        <p style={{
                            'float': 'left',
                            'paddingTop': '0.5%',
                            'fontSize': '2.5rem'
                        }}>Add New Park</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;