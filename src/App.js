import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Home from "./Home/Home";
import './App.css';


function App() {
  return (
    <div className="App">
      <Title />
      <Grid>
        <Grid.Row><Navbar /></Grid.Row>
        <Grid.Row><Home /></Grid.Row>  
      </Grid>
    </div>
  );
}

export default App;
