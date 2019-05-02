import React from 'react';
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
            'width': '60%',
            'marginLeft': 'auto',
            'marginRight': 'auto'
        }}>
            <Card.Body>
                <Row>
                    <Col sm={12}>
                        <p style={{'fontSize':'1.5rem', 'fontWeight': '600'}}>{props.title}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={5} style={{
                        'paddingRight': '0%',
                        'marginTop': '1%',
                        'marginBottom': '1%'
                    }}>
                        {
                            //<div style={{'width':'100%', 'paddingBottom': '100%', 'position': 'relative'}}>
                        }
                            <Button variant='secondary' style={{
                                'width': '3.5em',
                                'height': '3.5em',
                                'float': 'right',
                                'borderRadius': '50%',
                            }} onClick={() => buttonClick(props.handleClick, false, adultCard)} ><FontAwesomeIcon icon='minus' size='2x' /> </Button>
                        {
                            //</Col></div>
                        }
                    </Col>
                    <Col sm={2} style={{ 'padding': '0% 0%' }}><p style={{ 'fontSize': '2.5rem' }}>{adultCard ? props.numAdults : props.numChild}</p></Col>
                    <Col sm={5} style={{
                        'paddingLeft': '0%',
                        'marginTop': '1%',
                        'marginBottom': '1%'
                    }}><Button variant='secondary' style={{ 'float': 'left', 'borderRadius': '50%', 'width': '3.5em',
                    'height': '3.5em',}} onClick={() => buttonClick(props.handleClick, true, adultCard)}> <FontAwesomeIcon icon='plus' size='2x' /> </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default HowMany;