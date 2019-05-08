import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

function ParkDropdown(props) {
    return (
        <DropdownButton
            title={props.dropDownText}
            variant='secondary'
            style={{'fontSize': '1.5rem'}}
        >
            <Dropdown.Item eventKey="Test Park 1" onSelect={(eventKey) => props.onSelect(eventKey)}> Test Park 1 </Dropdown.Item>
            <Dropdown.Item eventKey="Test Park 2" onSelect={(eventKey) => props.onSelect(eventKey)}> Test Park 2 </Dropdown.Item>
            <Dropdown.Item eventKey="Test Park 3" onSelect={(eventKey) => props.onSelect(eventKey)}> Test Park 3 </Dropdown.Item>
        </DropdownButton>
    )
}

export default ParkDropdown;