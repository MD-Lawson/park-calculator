import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function buttonClick(callBack, plus) {
    console.log(plus);
    callBack(true, plus);
}

function HowMany(props) {
    return (
        <Card>
        <Row>
            <Col sm={12}>
                <p>{props.title}</p>
            </Col>
            {
                //<Col sm={9}></Col>
            }
        </Row>
        <Row>
            <Col sm={5} style={{'paddingRight': '0%'}}>
                <Button style={{'float': 'right'}} circular icon='minus' size='huge' onClick={() => buttonClick(props.handleClick, false)}/>
            </Col>
            <Col sm={2}style={{'padding': '0% 0%'}}><p style={{ 'fontSize': '2.5rem' }}>{props.numAdults}</p></Col>
            <Col sm={5} style={{'paddingLeft': '0%'}}><Button style={{'float': 'left'}} circular icon='plus' size='huge' onClick={() => buttonClick(props.handleClick, true)}/>
            </Col>
        </Row>
    </Card>
    );
  }
  
  export default HowMany;