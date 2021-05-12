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
  Container,
  Row,
  Col,
} from 'reactstrap';
import StandardLayout from '../Layouts/StandardLayout';

const Landing = () => {
  return (
    <StandardLayout>
      <div>Hola como estas, este es el landing</div>
    </StandardLayout>
  );
};

export default Landing;
