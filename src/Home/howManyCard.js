import React from 'react';
//import { Button, Card } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function buttonClick(callBack, plus, adultCard) {
    callBack(adultCard, plus);
}

function HowMany(props) {
    var adultCard = true;
    if (props.numChild != null) adultCard = false;
    return (
        <Card bg="light" style={{
            'width': '50%',
            'marginLeft': 'auto',
            'marginRight': 'auto'
        }}>
            <Card.Body>
                <Row>
                    <Col sm={12}>
                        <p>{props.title}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={5} style={{
                        'paddingRight': '0%',
                        'marginTop': '1%',
                        'marginBottom': '1%'
                    }}>
                        <Button variant='secondary' style={{ 'float': 'right' }} onClick={() => buttonClick(props.handleClick, false, adultCard)} ><FontAwesomeIcon icon='plus' /> </Button>
                    </Col>
                    <Col sm={2} style={{ 'padding': '0% 0%' }}><p style={{ 'fontSize': '2.5rem' }}>{adultCard ? props.numAdults : props.numChild}</p></Col>
                    <Col sm={5} style={{
                        'paddingLeft': '0%',
                        'marginTop': '1%',
                        'marginBottom': '1%'
                    }}><Button variant='secondary' style={{ 'float': 'left' }} onClick={() => buttonClick(props.handleClick, true, adultCard)}> <FontAwesomeIcon icon='minus' /> </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default HowMany;