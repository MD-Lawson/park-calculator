import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import ParkDropdown from './parkDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddPark(props) {
    return (
        <Row>
            <Col sm={3}>
                <Button variant='secondary' style={{
                    'float': 'right', 'borderRadius': '50%', 'width': '4.5em',
                    'height': '4.5em',
                }} onClick={() => props.handleModal(true)}> <FontAwesomeIcon icon='plus' size='3x' />
                </Button>
            </Col>
            <Col>
                <p style={{
                    'float': 'left',
                    'paddingTop': '0.5%',
                    'fontSize': '2.5rem'
                }}>Add New Park</p>
            </Col>

            <Modal show={props.show} onHide={() => props.handleModal(false)} size='lg'>
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
                            <ButtonGroup style={{'float':'left'}}>
                                <Button variant='secondary' type='radio' >1</Button>
                                <Button variant='secondary' type='radio' >2</Button>
                                <Button variant='secondary' type='radio' >3</Button>
                                <Button variant='secondary' type='radio' >4</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.handleModal(false)}>
                        Select
                                </Button>
                </Modal.Footer>
            </Modal>
        </Row>
    )
}

export default AddPark;