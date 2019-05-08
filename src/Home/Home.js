import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HowMany from './howManyCard';
import AddPark from './addPark';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            numAdults: 0,
            numChild: 0,
            modalShow: false,
            dropDownText: "Select Park",
        }
        this.handlePlusorMinusClick = this.handlePlusorMinusClick.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
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

    handleModal(show) {
        this.setState({ modalShow: show })
    }

    handleDropdownSelect(eventKey){
        this.setState({
            dropDownText: eventKey,
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

                <AddPark show={this.state.modalShow} dropDownText={this.state.dropDownText} handleModal={this.handleModal} onDropdown={this.handleDropdownSelect} />
            </Container>
        )
    }
}

export default Home;