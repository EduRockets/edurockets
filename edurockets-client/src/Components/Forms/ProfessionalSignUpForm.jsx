import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Button, Row, Col, Input, Label } from 'reactstrap';

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
                <Label className="SignUpFormInputLabel">Nombres</Label>
                <Input className="SignUpFormInput" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="SignUpFormInputLabel">Apellidos</Label>
                <Input className="SignUpFormInput" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="SignUpFormInputLabel">País</Label>
                <Input className="SignUpFormInput" />
              </Col>
              <Col>
                <Label className="SignUpFormInputLabel">Ciudad</Label>
                <Input className="SignUpFormInput" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="SignUpFormInputLabel">Fecha de nacimiento</Label>
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
                <Label className="SignUpFormInputLabel">
                  Último grado académico obtenido o en curso
                </Label>
                <Row>
                  <Col>
                    <select onChange={() => {}} className="SignUpSelect">
                      <option value="Titulo o egresado de colegio">
                        Titulo o egresado de colegio
                      </option>
                      <option value="Técnico especializado">Técnico especializado</option>
                      <option value="Licenciatura o ingeniería">Licenciatura o ingeniería</option>
                      <option value="Maestría/Postgrado">Maestría/Postgrado</option>
                    </select>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Label className="SignUpFormInputLabel">
                  ¿Cual de las siguientes dos opciones son de tu interes?
                </Label>
                <CheckBox label="Obtener un título académico que me permita migrar y trabajar en el país seleccionado" />
                <CheckBox label="Obtener un título académico que me permita regresar a mi país de residencia con mejores oportunidades profesionales " />
              </Col>
            </Row>

            <Row>
              <Col>
                <Label className="SignUpFormInputLabel">
                  ¿Qué nivel de programa universitario te interesa?
                </Label>
                <Row>
                  <Col>
                    <select onChange={() => {}} className="SignUpSelect">
                      <option value="Técnico especializado">Técnico especializado</option>
                      <option value="Licenciatura o ingeniería">Licenciatura o ingeniería</option>
                      <option value="Maestría/Postgrado">Maestría/Postgrado</option>
                      <option value="Doctorado">Doctorado</option>
                    </select>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        );
      case 2:
        return (
          <div>
            <Row>
              <Col>
                <Label className="SignUpFormInputLabel">
                  Selecciona la modalidad de estudio que se adapte mejor a ti
                </Label>
                <Row>
                  <Col>
                    <select onChange={() => {}} className="SignUpSelect">
                      <option value="Virtual">Virtual</option>
                      <option value="Presencial">Presencial</option>
                      <option value="Ambas">Ambas</option>
                    </select>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Label className="SignUpFormInputLabel">
                  Selecciona los países de tu interés para estudiar un programa universitario
                </Label>
                <Row>
                  <Col>
                    <Input className="SignUpFormInput" />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Label className="SignUpFormInputLabel">
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
      <div className="SignUpFormButtonContainer">
        {step == 0 ? (
          <>
            <div className="SignUpButtonSpacer" />
            <Button className="SignUpFormButton" onClick={nextStep}>
              Siguiente
            </Button>
            <div className="SignUpButtonSpacer" />
          </>
        ) : step == 1 ? (
          <>
            <Button className="SignUpFormButton" onClick={prevStep}>
              Anterior
            </Button>
            <div className="SignUpButtonSpacer" />
            <Button className="SignUpFormButton" onClick={nextStep}>
              Siguiente
            </Button>
          </>
        ) : (
          <>
            <Button className="SignUpFormButton" onClick={prevStep}>
              Anterior
            </Button>
            <div className="SignUpButtonSpacer" />
            <Button className="SignUpFormButtonCreateAccount" onClick={''}>
              Crear cuenta
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfessionalSignUpForm;
