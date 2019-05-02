import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

function handleSelect(eventKey, event){
    dropdownText = eventKey;
}
var dropdownText = 'Select Park'
function ParkDropdown() {
    return (
        <DropdownButton
            title={dropdownText}
            variant='secondary'
            style={{'fontSize': '1.5rem'}}
        >
            <Dropdown.Item eventKey="Test Park 1" onSelect={handleSelect}> Test Park 1 </Dropdown.Item>
            <Dropdown.Item eventKey="Test Park 3" onSelect={handleSelect}> Test Park 2 </Dropdown.Item>
            <Dropdown.Item eventKey="Test Park 3" onSelect={handleSelect}> Test Park 3 </Dropdown.Item>
        </DropdownButton>
    )
}

export default ParkDropdown;