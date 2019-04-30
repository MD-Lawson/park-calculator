import React from 'react';
import { Container, Button } from 'semantic-ui-react';


class Navbar extends React.Component {

    render() {
        return (
            <Container>
                <Button.Group widths='4'>
                    <Button color="blue" style={{ 'borderRight': '1px solid' }}>Home</Button>
                    <Button color="blue" style={{ 'borderRight': '1px solid' }}>Parks</Button>
                    <Button color="blue" style={{ 'borderRight': '1px solid' }}>About</Button>
                    <Button color="blue">Travel</Button>
                </Button.Group>
            </Container>
        )
    }

}

export default Navbar;