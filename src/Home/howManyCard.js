import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function buttonClick(callBack, plus, adultCard) {
    callBack(adultCard, plus);
}

function HowMany(props) {
    var adultCard = true;
    if (props.numChild != null) adultCard = false;
    return (
        <Card style={{
            'marginLeft': 'auto',
            'marginRight': 'auto'
        }}>
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
                    <Button style={{ 'float': 'right' }} circular icon='minus' size='huge' onClick={() => buttonClick(props.handleClick, false, adultCard)} />
                </Col>
                <Col sm={2} style={{ 'padding': '0% 0%' }}><p style={{ 'fontSize': '2.5rem' }}>{adultCard ? props.numAdults : props.numChild}</p></Col>
                <Col sm={5} style={{
                    'paddingLeft': '0%',
                    'marginTop': '1%',
                    'marginBottom': '1%'
                }}><Button style={{ 'float': 'left' }} circular icon='plus' size='huge' onClick={() => buttonClick(props.handleClick, true, adultCard)} />
                </Col>
            </Row>
        </Card>
    );
}

export default HowMany;