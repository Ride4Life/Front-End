import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const PageNavbar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className='navigation'>
      <Nav tabs>
        <NavItem>
          <NavLink href="#" active>HOME</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret color="warning">
            ACCOUNT
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>EDIT</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>DELETE</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <div className="logout"><NavLink href="#">LOGOUT</NavLink></div>
        </NavItem>
      </Nav>
    </div>
  );
}

export default PageNavbar;