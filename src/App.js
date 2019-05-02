import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Home from "./Home/Home";
import './App.css';


function App() {
  return (
    <Container className="App">
      <Title /> 
        <Row style={{'marginBottom': '1%'}}><Navbar /></Row>
        <Row><Home /></Row>  
    </Container>
  );
}

export default App;
