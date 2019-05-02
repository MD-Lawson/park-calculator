import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import ParkDropdown from './parkDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function handleModal(callback, show) {
    callback(show);
}

function AddPark(props) {
    return (
        <Row>
            <Col sm={3}>
                <Button variant='secondary' style={{
                    'float': 'right', 'borderRadius': '50%', 'width': '4.5em',
                    'height': '4.5em',
                }} onClick={() => handleModal(props.callback, true)}> <FontAwesomeIcon icon='plus' size='3x' />
                </Button>
            </Col>
            <Col>
                <p style={{
                    'float': 'left',
                    'paddingTop': '0.5%',
                    'fontSize': '2.5rem'
                }}>Add New Park</p>
            </Col>

            <Modal show={props.show} onHide={() => handleModal(props.callback, false)} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Please Select A Park</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <ParkDropdown/>
                        </Col>
                        <Col>
                            <p style={{'fontSize':'1.5rem', 'float':'right'}}>Number of days: </p>
                        </Col>
                        <Col>
                            <ButtonGroup style={{'float':'left'}}>
                                <Button variant='secondary'>1</Button>
                                <Button variant='secondary'>2</Button>
                                <Button variant='secondary'>3</Button>
                                <Button variant='secondary'>4</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleModal(props.callback, false)}>
                        Select
                                </Button>
                </Modal.Footer>
            </Modal>
        </Row>
    )
}

export default AddPark;