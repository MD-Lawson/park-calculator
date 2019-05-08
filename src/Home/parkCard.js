import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

var reducePadding = {
    'padding': '3px'
}

class ParkCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            costAdult: this.props.adultCost,
            costChild: this.props.childCost,
            adultTotal: 0,
            childTotal: 0,
        }
    }

    render() {
        var adultTotal = this.props.numAdults * this.state.costAdult;
        var childTotal = this.props.numChild * this.state.costChild;
        var totalCost= adultTotal + childTotal;
        console.log('ParkCard Rendered')
        return (
            <Container style={{ 'marginBottom': '20px' }}>
                <Row>
                    <Col sm='auto'>
                        <img src='https://via.placeholder.com/150' />
                    </Col>
                    <Col sm={9}>
                        <h2>{this.props.title} for {this.props.numDays} days</h2>
                        <Row>
                            <Col sm='auto' style={{'alignSelf': 'flex-end'}}>
                                {
                                //<div style={{ 'height': '70%' }}></div>
                                }
                                <p>Total</p>
                            </Col>
                            <Col sm='auto' style={{'alignContent': 'space-between'}}>
                                <Row>
                                    <Col>
                                        <p>Cost of 1 Adult</p>
                                    </Col>
                                </Row>
                                <Row style={{'marginTop': '16.555%'}}>
                                    <Col><p>{this.state.costAdult}</p></Col>
                                </Row>
                                <Row style={{'marginTop': '16.555%'}}>
                                    <Col><p>{adultTotal}</p></Col>
                                </Row>
                            </Col>
                            <Col sm='auto'>
                                <Row>
                                    <Col>
                                        <p>Cost of 1 Child</p>
                                    </Col>
                                </Row>
                                <Row style={{'marginTop': '16.555%'}}>
                                    <Col><p>{this.state.costChild}</p></Col>
                                </Row>
                                <Row style={{'marginTop': '16.555%'}}>
                                    <Col><p>{childTotal}</p></Col>
                                </Row>
                            </Col>
                            <Col sm='auto'>
                                <Row>
                                    <Col><p>Discounts</p></Col>
                                </Row>
                                <Form>
                                    <Form.Row style={{'paddingBottom': '0.15em'}}>
                                        <Form.Label column>Veterans</Form.Label>
                                        <Col><Form.Control 
                                            as='textarea'
                                            rows='1'
                                            cols='2'
                                            maxLength='2'
                                            style={{'resize': 'none',
                                                    'width': '2.8em'}}
                                            /></Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Label column>Seniors</Form.Label>
                                        <Col ><Form.Control 
                                            as='textarea'
                                            rows='1'
                                            cols='2'
                                            maxLength='2'
                                            style={{'resize': 'none',
                                                    'width': '2.8em',
                                                    'float': 'right'}}
                                            /></Col>
                                    </Form.Row>
                                </Form>
                            </Col>
                            <Col sm='auto'>
                                <Row><Col>Final Cost</Col></Row>
                                <Row style={{'marginTop': '66.666%'}}><Col>{totalCost}</Col></Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ParkCard;