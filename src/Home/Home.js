import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HowMany from './howManyCard';
import AddPark from './addPark';
import ParkCard from './parkCard';
import axios from 'axios';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            parks: {},
            numAdults: 0,
            numChild: 0,
            modalShow: false,
            dropDownText: "Select Park",
            numDays: 1,
            addedParks: [{
                title: 'Existence Park',
                numDays: 20,
                adultCost: 50,
                childCost: 20,
            }],
            fullCost: 0,
            parkTotals: {},
        }
        this.handlePlusorMinusClick = this.handlePlusorMinusClick.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
        this.handleDayRadio = this.handleDayRadio.bind(this);
        this.handleAddPark = this.handleAddPark.bind(this);
    }

    componentDidMount(){
        var parks = axios.get('https://15wv2yzw4k.execute-api.eu-west-1.amazonaws.com/test/Parks?TableName=Parks')
            .then(function (res){
                this.setState({
                    parks: res.data.Items
                })
            });
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

    handleModal(show, isAdd) {
        if(isAdd) this.handleAddPark()
        this.setState({ 
            modalShow: show,
            dropDownText: "Select Park",
         })
    }

    handleAddPark() {
        var parkTitle = this.state.dropDownText;
        var numDays = this.state.numDays;
        var newPark = {
            title: parkTitle,
            numDays:  numDays,
            childCost: 100,
            adultCost: 115,
        }

        console.log(`Park title is ${parkTitle} and number of days is ${numDays}`)
        this.setState({
            addedParks: [...this.state.addedParks, newPark],
            numDays: 1,
        })
    }

    handleDropdownSelect(eventKey){
        this.setState({
            dropDownText: eventKey,
        })
    }

    handleDayRadio(value){
        this.setState({
            numDays: value,
        })
    }

    updateTotalCost(key, value){
        var updatedPark = {key: value} 
        this.setState({
            parkTotals: {...this.state.parkTotals, updatedPark}
        })
    }

    render() {
        console.log('Rendered');
        return (
            <Container>
                <Row style={{ 'marginBottom': '3%' }}>
                    <Col>
                        <HowMany title='Number of Adults' numAdults={this.state.numAdults} handleClick={this.handlePlusorMinusClick} />
                    </Col>
                    <Col>
                        <HowMany title='Number of Children' numChild={this.state.numChild} handleClick={this.handlePlusorMinusClick} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 style={{'paddingBottom': '2em'}}> Full cost is £{this.state.fullCost}.00</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        { 
                            this.state.addedParks.map((park) => {
                                return (
                                    <ParkCard 
                                        title={park.title}
                                        key={park.title}
                                        numAdults={this.state.numAdults}
                                        numChild={this.state.numChild}
                                        childCost={park.childCost}
                                        adultCost={park.adultCost}
                                        numDays={park.numDays}
                                    />
                                )
                            })
                        }
                    </Col>
                </Row>
                <AddPark show={this.state.modalShow} dropDownText={this.state.dropDownText} handleModal={this.handleModal} onDropdown={this.handleDropdownSelect} handleDayRadio={this.handleDayRadio} />
            </Container>
        )
    }
}

export default Home;