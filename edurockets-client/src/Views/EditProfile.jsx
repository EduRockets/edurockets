import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button, Label, Input, Spinner } from 'reactstrap';
import DatePicker from 'react-datepicker';
import Avatar from 'react-avatar';

import EmptyLayout from '../Layouts/EmptyLayout';
import MaskedInput from '../Components/MaskedInput';
import useAuth from '../Providers/useAuth';
import { updateEditProfileUser } from '../Api/index';

import 'react-datepicker/dist/react-datepicker.css';
import './Styles/EditProfile.css';

const EditProfile = () => {
  const { user, setUser } = useAuth();

  const history = useHistory();

  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(true);

  const [names, setNames] = useState(user.names);
  const [lastNames, setLastNames] = useState(user.lastNames);
  const [birthday, setBirthday] = useState(new Date(user.birthday));
  const [language, setLanguage] = useState('');
  const [country, setCountry] = useState(user.country);
  const [state, setState] = useState(user.state);
  const [phone, setPhone] = useState('');

  // States for validation
  const [validNames, setValidNames] = useState();
  const [invalidNames, setInvalidNames] = useState();
  const [validLastNames, setValidLastNames] = useState();
  const [invalidLastNames, setInvalidLastNames] = useState();

  const profile = {
    names: names,
    lastNames: lastNames,
    country: country,
    state: state,
    birthday: birthday,
    phone: phone,
  };

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then(
        (result) => {
          const arr = [];
          result.map((element) => {
            arr.push(element.name);
            setCountries(arr);
          });
          setLoading(false);
          console.log(result);
        },
        (err) => {
          console.error(err);
        }
      );
  }, []);

  const changeValue = (event) => {
    const emptyVal = event.value === '';
    switch (event.name) {
      case 'names':
        setNames(event.value);
        setValidNames(!emptyVal);
        setInvalidNames(emptyVal);
        break;
      case 'lastNames':
        setLastNames(event.value);
        setValidLastNames(!emptyVal);
        setInvalidNames(emptyVal);
        break;
      case 'language':
        setLanguage(event.value);
        break;
      case 'country':
        setCountry(event.value);
        break;
      case 'state':
        setState(event.value);
        break;
      case 'phone':
        setPhone(event.value);
        break;
      default:
        break;
    }
  };

  const handleUpdate = () => {
    updateEditProfileUser({ user, profile })
      .then((updatedUser) => {
        setUser(updatedUser.data.user);
        setValidNames(false);
        setInvalidLastNames(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <EmptyLayout>
      <Container className="EditProfile" fluid>
        <div className="EditProfileBanner">
          <Container>
            <Row>
              <Col className="ProfileAvatarContainer">
                <Avatar size={150} round="100%" src={user.photo} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="EditPictureButton">Cambiar fotografía</Button>
              </Col>
            </Row>
          </Container>
        </div>

        {!loading ? (
          <>
            <Container>
              <Row>
                <Col lg="3" />
                <Col>
                  <Row>
                    <Col className="EditProfileTitle">Datos Personales</Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label className="EditProfileLabel">Nombres</Label>
                      <Input
                        className="EditProfileInput"
                        name="names"
                        id="names"
                        value={names}
                        valid={validNames}
                        invalid={invalidNames}
                        onChange={(event) => changeValue(event.currentTarget)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label className="EditProfileLabel">Apellidos</Label>
                      <Input
                        className="EditProfileInput"
                        name="lastNames"
                        id="lastNames"
                        value={lastNames}
                        valid={validLastNames}
                        invalid={invalidLastNames}
                        onChange={(event) => changeValue(event.currentTarget)}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Label className="EditProfileLabel">Fecha de nacimiento</Label>
                      <DatePicker
                        className="EditProfileDatePicker"
                        name="birthday"
                        id="birthday"
                        selected={birthday}
                        onChange={(date) => setBirthday(date)}
                      />
                    </Col>
                    <Col>
                      <Label className="EditProfileLabel">Lengua materna</Label>
                      <select
                        value={language}
                        name="language"
                        id="language"
                        onChange={(event) => changeValue(event.currentTarget)}
                        className="EditProfileSelect"
                      >
                        <option value="Español">Español</option>
                        <option value="Ingles">Ingles</option>
                        <option value="Portugués">Portugués</option>
                      </select>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Label className="EditProfileLabel">País de origen</Label>
                      <select
                        className="EditProfileSelect"
                        name="country"
                        id="country"
                        value={country}
                        onChange={(event) => changeValue(event.currentTarget)}
                      >
                        {countries.map((element) => {
                          return (
                            <option key={element.key} value={element}>
                              {element}
                            </option>
                          );
                        })}
                      </select>
                    </Col>
                    <Col>
                      <Label className="EditProfileLabel">Estado/Provincia</Label>
                      <Input
                        className="EditProfileInput"
                        name="state"
                        id="state"
                        value={state}
                        onChange={(event) => changeValue(event.currentTarget)}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Label className="EditProfileLabel">Número de celular</Label>
                      <MaskedInput
                        className="EditProfileInput"
                        mask={[
                          '(',
                          /\d/,
                          /\d/,
                          /\d/,
                          ')',
                          ' ',
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          ' ',
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                        ]}
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={(event) => changeValue(event.currentTarget)}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col className="EditProfileButtonContainer">
                      <Button
                        className="EditPictureCancelButton"
                        onClick={() => {
                          history.push('/profile');
                        }}
                      >
                        Cancelar
                      </Button>
                      <Button
                        className="EditProfileSaveButton"
                        onClick={() => {
                          handleUpdate();
                        }}
                      >
                        Guardar cambios
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col lg="3" />
              </Row>
            </Container>
          </>
        ) : (
          <Row>
            <Col style={{ textAlign: 'center' }}>
              <Spinner
                style={{ textAlign: 'center', width: '3rem', height: '3rem' }}
                color="primary"
              >
                {' '}
              </Spinner>
            </Col>
          </Row>
        )}
      </Container>
    </EmptyLayout>
  );
};

export default EditProfile;
