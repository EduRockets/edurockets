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

import 'react-datepicker/dist/react-datepicker.css';
import './Styles/SignUpForm.css';

const ProfessionalSignUpForm = (props) => {
  const { paso, setPaso } = props;

  const [step, setStep] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropDownLevel, setDropDownLevel] = useState(false);
  // Form States
  const [birthday, setBirthday] = useState(null);
  const [modality, setModality] = useState(null);
  const [degree, setDegree] = useState(null);
  const [educationLevel, setEducationLevel] = useState(null);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleLevel = () => setDropDownLevel((prevState) => !prevState);

  const nextStep = () => {
    setStep((oldStep) => (oldStep < 2 ? oldStep + 1 : oldStep));
    setPaso((oldStep) => (oldStep < 2 ? oldStep + 1 : oldStep));

    console.log('Formholder: ', paso, 'Form: ', step);
  };
  const prevStep = () => {
    setStep((oldStep) => (oldStep > 0 ? oldStep - 1 : oldStep));
    setPaso((oldStep) => (oldStep > 0 ? oldStep - 1 : oldStep));

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
                <Input className="SignUpInput" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="SignUpInputLabel">Apellidos</Label>
                <Input className="SignUpInput" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="SignUpInputLabel">País</Label>
                <Input className="SignUpInput" />
              </Col>
              <Col>
                <Label className="SignUpInputLabel">Ciudad</Label>
                <Input className="SignUpInput" />
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
          </div>
        );
      case 1:
        return (
          <div>
            <Row>
              <Col>
                <Label className="SignUpInputLabel">
                  Último grado académico obtenido o en curso
                </Label>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle className="SignUpDropdown" caret>
                    {degree ? degree : 'Selecciona un grado académico'}
                  </DropdownToggle>
                  <DropdownMenu className="SignUpDropdownText">
                    <DropdownItem onClick={() => setDegree('Titulo o egresado de colegio')}>
                      Titulo o egresado de colegio
                    </DropdownItem>
                    <DropdownItem onClick={() => setDegree('Tecnico especializado')}>
                      Tecnico especializado
                    </DropdownItem>
                    <DropdownItem onClick={() => setDegree('Licenciatura o ingeniería')}>
                      Licenciatura o ingeniería
                    </DropdownItem>
                    <DropdownItem onClick={() => setDegree('Maestría/Postgrado')}>
                      Maestría/Postgrado
                    </DropdownItem>
                    <DropdownItem onClick={() => setDegree('Doctorado')}>Doctorado</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>

            <Row>
              <Col>
                <Label className="SignUpInputLabel">
                  ¿Cual de las siguientes dos opciones son de tu interes?
                </Label>
                <CheckBox label="Obtener un título académico que me permita migrar y trabajar en el país seleccionado" />
                <CheckBox label="Obtener un título académico que me permita regresar a mi país de residencia con mejores oportunidades profesionales " />
              </Col>
            </Row>

            <Row>
              <Col>
                <Label className="SignUpInputLabel">
                  ¿Qué nivel de programa universitario te interesa?
                </Label>
                <Dropdown isOpen={dropDownLevel} toggle={toggleLevel}>
                  <DropdownToggle className="SignUpDropdown" caret>
                    {educationLevel
                      ? educationLevel
                      : 'Selecciona un nivel del programa universitario'}
                  </DropdownToggle>
                  <DropdownMenu className="SignUpDropdownText">
                    <DropdownItem onClick={() => setEducationLevel('Técnico especializado')}>
                      Técnico especializado
                    </DropdownItem>
                    <DropdownItem onClick={() => setEducationLevel('Licenciatura o ingeniería')}>
                      Licenciatura o ingeniería
                    </DropdownItem>
                    <DropdownItem onClick={() => setEducationLevel('Maestría/Postgrado')}>
                      Maestría/Postgrado
                    </DropdownItem>
                    <DropdownItem onClick={() => setEducationLevel('Doctorado')}>
                      Doctorado
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </div>
        );
      case 2:
        return (
          <div>
            <Row>
              <Col>
                <Label className="SignUpInputLabel">
                  Selecciona la modalidad de estudio que se adapte mejor a ti
                </Label>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle className="SignUpDropdown" caret>
                    {modality ? modality : 'Selecciona un grado académico'}
                  </DropdownToggle>
                  <DropdownMenu className="SignUpDropdownText">
                    <DropdownItem onClick={() => setModality('Titulo o egresado de colegio')}>
                      Virtual
                    </DropdownItem>
                    <DropdownItem onClick={() => setModality('Tecnico especializado')}>
                      Presencial
                    </DropdownItem>
                    <DropdownItem onClick={() => setModality('Licenciatura o ingeniería')}>
                      Ambas
                    </DropdownItem>
                    <DropdownItem onClick={() => setModality('Doctorado')}>Doctorado</DropdownItem>
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
        {step == 0 ? (
          <>
            <div className="SignUpButtonSpacer" />
            <Button className="SignUpButton" onClick={nextStep}>
              Siguiente
            </Button>
            <div className="SignUpButtonSpacer" />
          </>
        ) : step == 1 ? (
          <>
            <Button className="SignUpButton" onClick={prevStep}>
              Anterior
            </Button>
            <div className="SignUpButtonSpacer" />
            <Button className="SignUpButton" onClick={nextStep}>
              Siguiente
            </Button>
          </>
        ) : (
          <>
            <Button className="SignUpButton" onClick={prevStep}>
              Anterior
            </Button>
            <div className="SignUpButtonSpacer" />
            <Button className="SignUpButtonCreateAccount" onClick={''}>
              Crear cuenta
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfessionalSignUpForm;
