import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class Navbar extends React.Component {

    render() {
        return (
            <Container>
                <Button variant="info" style={{
                    'borderRight': '1px solid',
                    'width': '25%',
                    'fontSize':'1.5rem'
                }}>Home</Button>
                <Button variant="info" style={{
                    'borderRight': '1px solid',
                    'width': '25%',
                    'fontSize':'1.5rem'
                }}>Parks</Button>
                <Button variant="info" style={{
                    'borderRight': '1px solid',
                    'width': '25%',
                    'fontSize':'1.5rem'
                }}>About</Button>
                <Button variant="info" style={{
                    'width': '25%',
                    'fontSize':'1.5rem'
                }}>Travel</Button>
            </Container>
        )
    }
}

export default Navbar;