import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col, Input, Label, Spinner } from 'reactstrap';

import DatePicker from 'react-datepicker';
import { WithContext as ReactTags } from 'react-tag-input';

import CheckBox from '../../Components/CheckBox';
import useAuth from '../../Providers/useAuth';
import { updateSignUpUser } from '../../Api/index.js';

import 'react-datepicker/dist/react-datepicker.css';
import './Styles/SignUpForm.css';

const StudentSignUpForm = (props) => {
  const { paso, setPaso } = props;
  const { user, setUser } = useAuth();

  const history = useHistory();

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  // Form States
  const [names, setNames] = useState('');
  const [lastNames, setLastNames] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [birthday, setBirthday] = useState(null);
  const [highSchool, setHighSchool] = useState('');
  const [currentDegree, setCurrentDegree] = useState(null);
  const [favoriteCountries, setFavoriteCountries] = useState([]);
  const [favoriteStudyAreas, setFavoriteStudyAreas] = useState([]);

  // Form States Validation
  const [invalidNames, setInvalidNames] = useState(false);
  const [invalidLastNames, setInvalidLastNames] = useState(false);
  const [invalidHighSchool, setInvalidHighSchool] = useState(false);
  const [invalidState, setInvalidState] = useState(false);

  // States and variables for tag-picker
  const [tags, setTags] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const delimiters = [188, 13];

  const profile = {
    names: names,
    lastNames: names,
    country: country,
    state: state,
    birthday: birthday,
    highSchool: highSchool,
    currentDegree: currentDegree,
    favoriteCountries: favoriteCountries,
    favoriteStudyAreas: favoriteStudyAreas,
  };

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

  // Country Tag Picker functions
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
    setTags(newTags);
  };

  const handleCreate = () => {
    setFavoriteCountries([...tags.text]);

    setInvalidNames(names === '' ? true : false);
    setInvalidLastNames(lastNames === '' ? true : false);
    setInvalidState(state === '' ? true : false);
    setInvalidHighSchool(highSchool === '' ? true : false);

    if (
      !invalidNames &&
      !invalidLastNames &&
      country !== '' &&
      !invalidState &&
      birthday !== null &&
      !invalidHighSchool &&
      currentDegree !== '' &&
      favoriteCountries.length > 0
    ) {
      console.log(profile);
      /*

      updateSignUpUser({ user, profile })
        .then((res) => {
          setUser(res.data.user); 
          console.log(res.data.user);
          history.push('/profile'); 
        })
        .catch((err) => {
          console.log(err);
        });

       */
      console.log('AAAAA');
    }
  };

  //
  const nextStep = () => {
    setStep((oldStep) => (oldStep < 1 ? oldStep + 1 : oldStep));
    setPaso((oldStep) => (oldStep < 1 ? oldStep + 1 : oldStep));
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
      case 'highSchool':
        setHighSchool(event.value);
        setInvalidHighSchool(emptyVal);
        break;
      case 'currentDegree':
        setCurrentDegree(event.value);
        break;
      case 'state':
        setState(event.value);
        setInvalidState(emptyVal);
        break;
      default:
        break;
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
            <Row>
              <Col>
                <Label className="SignUpFormInputLabel">Escuela donde estudias</Label>
                <Input
                  className="SignUpFormInput"
                  name="highSchool"
                  id="highSchool"
                  value={highSchool}
                  invalid={invalidHighSchool}
                  onChange={(event) => changeValue(event.currentTarget)}
                />
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
                <select
                  className="SignUpSelect"
                  name="currentDegree"
                  id="currentDegree"
                  value={currentDegree}
                  onChange={(event) => changeValue(event.currentTarget)}
                >
                  <option style={{ display: 'none' }}></option>
                  <option value="Titulo o egresado de colegio">Titulo o egresado de colegio</option>
                  <option value="Técnico especializado">Técnico especializado</option>
                  <option value="Licenciatura o ingeniería">Licenciatura o ingeniería</option>
                  <option value="Maestría/Postgrado">Maestría/Postgrado</option>
                  <option value="Doctorado">Doctorado</option>
                </select>
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

export default StudentSignUpForm;
