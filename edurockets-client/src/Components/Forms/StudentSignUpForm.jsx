import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Button, Row, Col, Input, Label } from 'reactstrap';

import CheckBox from '../../Components/CheckBox';

import 'react-datepicker/dist/react-datepicker.css';
import './Styles/SignUpForm.css';

const StudentSignUpForm = (props) => {
  const { paso, setPaso } = props;
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [countries, setCountries] = useState([]);

  // Form States
  const [birthday, setBirthday] = useState(null);
  const [degree, setDegree] = useState(null);
  const [country, setCountry] = useState('');

  const uwu = ['uwu', 'owo'];

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then(
        (result) => {
          result.map((element) => {
            countries.push(element.name);
          });
          console.log(countries);
          setLoading(true);
        },
        (err) => {
          console.error(err);
        }
      );
  }, []);

  const nextStep = () => {
    setStep((oldStep) => (oldStep < 1 ? oldStep + 1 : oldStep));
    setPaso((oldStep) => (oldStep < 1 ? oldStep + 1 : oldStep));

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
                <Row>
                  <Col>
                    <select onChange={() => {}} className="SignUpSelect">
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Panamá">Panamá</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="El Salvador">El Salvador</option>
                    </select>
                  </Col>
                </Row>
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
            <Row>
              <Col>
                <Label className="SignUpFormInputLabel">Escuela donde estudias</Label>
                <Input className="SignUpFormInput" />
              </Col>
            </Row>
          </div>
        );
      case 1:
        return (
          <div>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Label className="SignUpFormInputLabel">Grado que estás cursando</Label>
                  </Col>
                </Row>
                <select value={degree} className="SignUpSelect">
                  <option value="Español">Titulo o egresado de colegio</option>
                  <option value="Ingles">Técnico especializado</option>
                  <option value="Portugués">Licenciatura o ingeniería</option>
                  <option value="Portugués">Maestría/Postgrado</option>
                  <option value="Portugués">Doctorado</option>
                </select>
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
      {loading ? renderByStep() : <> </>}
      <div className="SignUpFormButtonContainer">
        {step == 0 ? (
          <>
            <div className="SignUpButtonSpacer" />
            <Button className="SignUpFormButton" onClick={nextStep}>
              Siguiente
            </Button>
            <div className="SignUpButtonSpacer" />
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

export default StudentSignUpForm;
