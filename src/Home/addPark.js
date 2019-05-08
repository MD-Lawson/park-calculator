import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Modal from 'react-bootstrap/Modal';
import ParkDropdown from './parkDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var radioStyle = {
    'width': '2.2rem',
}

function AddPark(props) {
    return (
        <Row>
            <Col sm={3}>
                <Button variant='secondary' style={{
                    'float': 'right', 'borderRadius': '50%', 'width': '4.5em',
                    'height': '4.5em',
                }} onClick={() => props.handleModal(true, false)}> <FontAwesomeIcon icon='plus' size='3x' />
                </Button>
            </Col>
            <Col>
                <p style={{
                    'float': 'left',
                    'paddingTop': '0.5%',
                    'fontSize': '2.5rem'
                }}>Add New Park</p>
            </Col>

            <Modal show={props.show} onHide={() => props.handleModal(false, false)} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Please Select A Park</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <ParkDropdown onSelect={props.onDropdown} dropDownText={props.dropDownText} />
                        </Col>
                        <Col>
                            <p style={{'fontSize':'1.5rem', 'float':'right'}}>Number of days: </p>
                        </Col>
                        <Col>
                            <ToggleButtonGroup type='radio' name='numDays' style={{'float':'left'}} defaultValue={1} onChange={props.handleDayRadio} >
                                <ToggleButton variant='secondary' value={1} style={radioStyle}>1</ToggleButton>
                                <ToggleButton variant='secondary' value={2} style={radioStyle}>2</ToggleButton>
                                <ToggleButton variant='secondary' value={3} style={radioStyle}>3</ToggleButton>
                                <ToggleButton variant='secondary' value={4} style={radioStyle}>4</ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.handleModal(false, true)}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </Row>
    )
}

export default AddPark;