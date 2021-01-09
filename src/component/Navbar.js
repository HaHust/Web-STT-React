import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Form, FormGroup, Input, Label
} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">TechCare</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Tuỳ chọn
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Nhiệt độ
                                </DropdownItem>
                                <DropdownItem>
                                    Bình truyền dịch
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Thông tin
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarBrand>
                        <Form>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Tìm kiếm bệnh nhân" />
                        </Form></NavbarBrand>
                    <NavbarText>BK307</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;