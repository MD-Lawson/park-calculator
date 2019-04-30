import React from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';


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
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <p>Number of Adults</p>
                            
                        </Grid.Column>
                        <Grid.Column><Button circular icon='minus' /></Grid.Column>
                        <Grid.Column><p>{this.state.numAdults}</p></Grid.Column>
                        <Grid.Column><Button circular icon='plus' /></Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default Home;