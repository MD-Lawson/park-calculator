import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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

            <Modal show={props.show} onHide={() => handleModal(props.callback, false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please Select A Park</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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