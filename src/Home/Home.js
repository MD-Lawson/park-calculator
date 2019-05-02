import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            numAdults: 0,
        }
    }

    render() {
        return (
            <Container>
                <Card>
                    <Row>
                        <Col sm={12}>
                            <p>Number of Adults</p>
                        </Col>
                        {
                            //<Col sm={9}></Col>
                        }
                    </Row>
                    <Row style={{'paddingTop': '5px'}}>
                        <Col><Button circular icon='minus' size='huge' /></Col>
                        <Col><p style={{'fontSize': '2.5rem'}}>{this.state.numAdults}</p></Col>
                        <Col><Button circular icon='plus' size='huge' /></Col>
                    </Row>
                </Card>
            </Container>
        )
    }
}

export default Home;