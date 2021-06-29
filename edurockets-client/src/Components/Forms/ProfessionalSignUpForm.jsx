import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col, Input, Label, Spinner } from 'reactstrap';

import DatePicker from 'react-datepicker';
import { WithContext as ReactTags } from 'react-tag-input';

import CheckBox from '../../Components/CheckBox';

import 'react-datepicker/dist/react-datepicker.css';

import './Styles/SignUpForm.css';

const ProfessionalSignUpForm = (props) => {
  const { paso, setPaso } = props;
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);
  const [countries, setCountries] = useState([]);

  // Form States
  const [names, setNames] = useState('');
  const [lastNames, setLastNames] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [birthday, setBirthday] = useState(null);
  const [collegeDegree, setCollegeDegree] = useState('');
  const [degree, setDegree] = useState('');
  const [modality, setModality] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const [favoriteCountries, setFavoriteCountries] = useState([]);
  const [favoriteStudyAreas, setFavoriteStudyAreas] = useState([]);

  // Form States Validation
  const [invalidNames, setInvalidNames] = useState(false);
  const [invalidLastNames, setInvalidLastNames] = useState(false);
  const [invalidState, setInvalidState] = useState(false);

  // States and variables for tag-picker
  const [tags, setTags] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const delimiters = [188, 13];

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then(
        (result) => {
          const arr = [];
          const sugg = [];
          result.map((element) => {
            sugg.push({ id: element.name, text: element.name });
            arr.push(element.name);
            setCountries(arr);
            setSuggestions(sugg);
          });
          setLoading(false);
        },
        (err) => {
          console.error(err);
        }
      );
  }, []);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    // re-render
    setTags(newTags);
  };

  const nextStep = () => {
    setStep((oldStep) => (oldStep < 2 ? oldStep + 1 : oldStep));
    setPaso((oldStep) => (oldStep < 2 ? oldStep + 1 : oldStep));
  };
  const prevStep = () => {
    setStep((oldStep) => (oldStep > 0 ? oldStep - 1 : oldStep));
    setPaso((oldStep) => (oldStep > 0 ? oldStep - 1 : oldStep));
  };

  const changeValue = (event) => {
    const emptyVal = event.value === '';
    switch (event.name) {
      case 'names':
        setNames(event.value);
        setInvalidNames(emptyVal);
        break;
      case 'lastNames':
        setLastNames(event.value);
        setInvalidLastNames(emptyVal);
        break;
      case 'country':
        setCountry(event.value);
        break;
      case 'state':
        setState(event.value);
        setInvalidState(emptyVal);
        break;
      case 'collegeDegree':
        setCollegeDegree(event.value);
        break;
      case 'degree':
        setDegree(event.value);
        break;
      case 'modality':
        setModality(event.value);
        break;
      default:
        break;
    }
  };

  const handleCreate = () => {
    let arr = [];
    tags.forEach((element) => {
      arr.push(element.text);
    });
    setFavoriteCountries([...arr]);

    setInvalidNames(names === '' ? true : false);
    setInvalidLastNames(lastNames === '' ? true : false);
    setInvalidState(state === '' ? true : false);

    if (
      !invalidNames &&
      !invalidLastNames &&
      country !== '' &&
      !invalidState &&
      birthday !== null &&
      collegeDegree !== '' &&
      degree !== '' &&
      modality !== '' &&
      favoriteCountries.length > 0
    ) {
      console.log('AAA');
    } else {
      console.log('Hacen falta campos que llenar');
    }
  };

  const renderByStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <Row>
              <Col>
                <Label className="SignUpFormInputLabel">Nombres</Label>
                <Input
                  className="SignUpFormInput"
                  name="names"
                  id="names"
                  value={names}
                  invalid={invalidNames}
                  onChange={(event) => changeValue(event.currentTarget)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="SignUpFormInputLabel">Apellidos</Label>
                <Input
                  className="SignUpFormInput"
                  name="lastNames"
                  id="lastNames"
                  value={lastNames}
                  invalid={invalidLastNames}
                  onChange={(event) => changeValue(event.currentTarget)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="SignUpFormInputLabel">País</Label>
                <Row>
                  <Col>
                    <select
                      className="SignUpSelect"
                      name="country"
                      id="country"
                      value={country}
                      onChange={(event) => changeValue(event.currentTarget)}
                    >
                      <option style={{ display: 'none' }}></option>
                      {countries.map((element) => {
                        return (
                          <option key={element.key} value={element}>
                            {element}
                          </option>
                        );
                      })}
                    </select>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Label className="SignUpFormInputLabel">Estado/Provincia</Label>
                <Input
                  className="SignUpFormInput"
                  name="state"
                  id="state"
                  value={state}
                  invalid={invalidState}
                  onChange={(event) => changeValue(event.currentTarget)}
                />
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
                    <select
                      className="SignUpSelect"
                      name="collegeDegree"
                      id="collegeDegree"
                      value={collegeDegree}
                      onChange={(event) => changeValue(event.currentTarget)}
                    >
                      <option style={{ display: 'none' }}></option>
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
                    <select
                      className="SignUpSelect"
                      name="degree"
                      id="degree"
                      value={degree}
                      onChange={(event) => changeValue(event.currentTarget)}
                    >
                      <option style={{ display: 'none' }}></option>
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
                    <select
                      className="SignUpSelect"
                      name="modality"
                      id="modality"
                      value={modality}
                      onChange={(event) => changeValue(event.currentTarget)}
                    >
                      <option style={{ display: 'none' }}></option>
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
                <ReactTags
                  placeholder=""
                  classNames={{
                    tags: 'TagsClass',
                    tagInput: 'tagInputClass',
                    tagInputField: 'tagInputFieldClass',
                    selected: 'selectedClass',
                    tag: 'tagClass',
                    remove: 'removeClass',
                    suggestions: 'suggestionsClass',
                    activeSuggestion: 'activeSuggestionClass',
                  }}
                  tags={tags}
                  suggestions={suggestions}
                  handleDelete={handleDelete}
                  handleAddition={handleAddition}
                  handleDrag={handleDrag}
                  delimiters={delimiters}
                />
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
      {!loading ? (
        <>
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
                <Button
                  className="SignUpFormButtonCreateAccount"
                  onClick={() => {
                    handleCreate();
                  }}
                >
                  Crear cuenta
                </Button>
              </>
            )}
          </div>
        </>
      ) : (
        <Row>
          <Col style={{ textAlign: 'center' }}>
            <Spinner style={{ textAlign: 'center', width: '3rem', height: '3rem' }} color="primary">
              {' '}
            </Spinner>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProfessionalSignUpForm;
