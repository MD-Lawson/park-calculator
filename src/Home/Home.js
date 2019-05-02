import React from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Modal, Icon } from 'semantic-ui-react';
import HowMany from './howManyCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            numAdults: 0,
            numChild: 0,
            modalOpen: false,
        }
        this.handlePlusorMinusClick = this.handlePlusorMinusClick.bind(this);
        this.handleModal = this.handleModal.bind(this);
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

    handleModal() {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
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
                        <Modal
                            trigger={<Button circular icon='plus' size='massive' style={{ 'float': 'right' }} onClick={this.handleModal} />}
                            open={this.state.modalOpen}
                            size='small'>
                             <Modal.Header >Select a park </Modal.Header>
                            <Modal.Description>
                                <h3>Test</h3>
                            </Modal.Description>
                            <Modal.Actions>
                                <Button color='green' onClick={this.handleModal}>
                                    <Icon name='checkmark' /> Confirm
                        </Button>
                            </Modal.Actions>
                        </Modal>
                    </Col>
                    <Col>
                        <p style={{
                            'float': 'left',
                            'padding': '10px 0',
                            'fontSize': '2rem'
                        }}>Add New Park</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;