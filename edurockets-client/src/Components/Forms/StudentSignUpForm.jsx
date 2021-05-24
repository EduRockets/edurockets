import React, { useState } from 'react';

import {
  Button,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
} from 'reactstrap';

import './Styles/SignUpForm.css';
const StudentSignForm = () => {
  const [step, setStep] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [degree, setDegree] = useState('');

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const changeValue = (event) => {
    switch (event.name) {
      case 'degree':
        setDegree(event.value);
        break;
      default:
    }
  };
  // States para fomrs

  const nextStep = () => setStep((oldStep) => (oldStep < 1 ? oldStep + 1 : oldStep));
  const prevStep = () => setStep((oldStep) => (oldStep > 0 ? oldStep - 1 : oldStep));

  const renderByStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <Row>
              <Col>
                <Label className="SignUpInputLabel">Nombres</Label>
                <Input className="SignUpInput" placeholder="Raúl" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="SignUpInputLabel">Apellidos</Label>
                <Input className="SignUpInput" placeholder="López" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="SignUpInputLabel">País</Label>
                <Input className="SignUpInput" placeholder="País" />
              </Col>
              <Col>
                <Label className="SignUpInputLabel">Ciudad</Label>
                <Input className="SignUpInput" placeholder="Ciudad" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="SignUpInputLabel">Fecha de nacimiento</Label>
                <Input className="SignUpInput" placeholder="dd/mm/yy" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="SignUpInputLabel">Escuela donde estudias</Label>
                <Input className="SignUpInput" placeholder="Instituto" />
              </Col>
            </Row>
          </div>
        );
      case 1:
        return (
          <div>
            <Row>
              <Col>
                <Label className="SignUpInputLabel">Grado que estás cursando</Label>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} title={` Drop ${degree} `}>
                  <DropdownToggle
                    name="degree"
                    onChange={(event) => changeValue(event.currentTarget)}
                    className="SignUpInput"
                    caret
                  >
                    Escoge un grado
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Titulo o egresado de colegio</DropdownItem>
                    <DropdownItem>Tecnico especializado</DropdownItem>
                    <DropdownItem>Licenciatura o ingeniería</DropdownItem>
                    <DropdownItem>Maestría/Postgrado</DropdownItem>
                    <DropdownItem>Doctorado</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="SignUpInputLabel">
                  Selecciona los países de tu interés para estudiar un programa universitario
                </Label>
              </Col>
            </Row>

            <Row>
              <Col>
                <Label className="SignUpInputLabel">
                  Selecciona las áreas de estudio que te interesen
                </Label>
                <Row>
                  <Col>
                    <div>
                      <Input type="checkbox" />
                      <Label>Artes, Diseño y Arquitectura</Label>
                    </div>
                    <div>
                      <Input type="checkbox" />
                      <Label>Ciencias Sociales</Label>
                    </div>
                    <div>
                      <Input type="checkbox" />
                      <Label>Negocios, Administración y Economía</Label>
                    </div>
                    <div>
                      <Input type="checkbox" />
                      <Label>Salud y Medicina</Label>
                    </div>
                    <div>
                      <Input type="checkbox" />
                      <Label>Ingeniería y Tecnología</Label>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <Input type="checkbox" />
                      <Label>Ciencias Naturales y Matemáticas</Label>
                    </div>
                    <div>
                      <Input type="checkbox" />
                      <Label>Ciencias Computacionales</Label>
                    </div>
                    <div>
                      <Input type="checkbox" />
                      <Label>Derechos y Diplomacia</Label>
                    </div>
                    <div>
                      <Input type="checkbox" />
                      <Label>Agricultura y Alimentos</Label>
                    </div>
                    <div>
                      <Input type="checkbox" />
                      <Label>Turismo y Experiencias</Label>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div className="SignUpForm">
      {renderByStep()}
      <div className="SignUpButtonContainer">
        <Button className="SignUpButton" onClick={prevStep}>
          Antes
        </Button>
        <div className="SignUpButtonSpacer" />
        <Button className="SignUpButton" onClick={nextStep}>
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default StudentSignForm;
