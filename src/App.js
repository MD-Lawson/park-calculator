import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Home from "./Home/Home";
import './App.css';

library.add(faPlus)
library.add(faMinus)
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
