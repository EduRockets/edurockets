import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
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

import CheckBox from '../../Components/CheckBox';

import './Styles/SignUpForm.css';
import 'react-datepicker/dist/react-datepicker.css';

const StudentSignForm = (props) => {
  const { paso, setPaso } = props;

  const [step, setStep] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Campos
  const [birthday, setBirthday] = useState(null);
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

  const nextStep = () => {
    setStep((oldStep) => (oldStep < 1 ? oldStep + 1 : oldStep));
    setPaso(step + 1);

    console.log('Formholder: ', paso, 'Form: ', step);
  };
  const prevStep = () => {
    setStep((oldStep) => (oldStep > 0 ? oldStep - 1 : oldStep));
    setPaso(step - 1);

    console.log('Formholder: ', paso, 'Form: ', step);
  };

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
                <div>
                  <DatePicker
                    className="SignUpDatePicker"
                    selected={birthday}
                    onChange={(date) => setBirthday(date)}
                  />
                </div>
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
                    className="SignUpDropdown"
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
                <Row>
                  <Col>
                    <Input className="SignUpInput" />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Label className="SignUpInputLabel">
                  Selecciona las áreas de estudio que te interesen
                </Label>
                <Row>
                  <Col>
                    <CheckBox label="Artes, Diseño y Arquitectura" />
                    <CheckBox label="Ciencias Sociales" />
                    <CheckBox label="Negocios, Administración y Economía" />
                    <CheckBox label="Salud y Medicina" />
                    <CheckBox label="Ingeniería y Tecnología" />
                  </Col>
                  <Col>
                    <CheckBox label="Ciencias Naturales y Matemáticas" />
                    <CheckBox label="Ciencias Computacionales" />
                    <CheckBox label="Derechos y Diplomacia" />
                    <CheckBox label="Agricultura y Alimentos" />
                    <CheckBox label="Turismo y Experiencias" />
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
