import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button, Label, Input, Spinner } from 'reactstrap';
import DatePicker from 'react-datepicker';
import Avatar from 'react-avatar';

import EmptyLayout from '../Layouts/EmptyLayout';
import useAuth from '../Providers/useAuth';
import { uploadImage, updateImage, updateProfile } from '../Api/index';

import MaskedInput from '../Components/MaskedInput';
import DivButton from '../Components/DivButton';

import notificationIcon from '../Assets/Icons/notification.svg';

import 'react-datepicker/dist/react-datepicker.css';
import './Styles/EditProfile.css';

const EditProfile = () => {
  const history = useHistory();
  const input = useRef(null);

  const { user, setUser } = useAuth();

  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(true);

  const [names, setNames] = useState(user.names);
  const [lastNames, setLastNames] = useState(user.lastNames);
  const [birthday, setBirthday] = useState(new Date(user.birthday));
  const [language, setLanguage] = useState('');
  const [country, setCountry] = useState(user.country);
  const [state, setState] = useState(user.state);
  const [phone, setPhone] = useState('');

  const [photo, setPhoto] = useState(user.photo);
  const [newPhoto, setNewPhoto] = useState('');

  // States for validation
  const [validNames, setValidNames] = useState();
  const [invalidNames, setInvalidNames] = useState();
  const [validLastNames, setValidLastNames] = useState();
  const [invalidLastNames, setInvalidLastNames] = useState();

  let data = {
    names: names,
    lastNames: lastNames,
    country: country,
    state: state,
    birthday: birthday,
    phone: phone,
    photo: photo,
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
    if (newPhoto !== '') {
      const formData = new FormData();
      formData.append('file', newPhoto);
      if (user.photo.id !== '') {
        formData.append('_id', user.photo.id);
        updateImage(formData)
          .then((res) => {
            data.photo.src = res.data.image.path;
            const userType = user.userType;
            const id = user.profileId;
            updateProfile({ userType, id, data })
              .then((res) => {
                setUser({ ...user, ...res.data });
                setValidNames(false);
                setInvalidLastNames(false);
              })
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        uploadImage(formData)
          .then((res) => {
            data.photo.src = res.data.path;
            data.photo.id = res.data._id;
            const userType = user.userType;
            const id = user.profileId;
            updateProfile({ userType, id, data })
              .then((res) => {
                setUser({ ...user, ...res.data });
                setValidNames(false);
                setInvalidLastNames(false);
              })
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((err) => {
            console.error(err);
          });
      }
    } else {
      const userType = user.userType;
      const id = user.profileId;
      updateProfile({ userType, id, data })
        .then((res) => {
          setUser({ ...user, ...res.data });
          setValidNames(false);
          setInvalidLastNames(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <EmptyLayout>
      <Container className="EditProfile" fluid>
        <div className="EditProfileBanner">
          <Container>
            <Row>
              <Col lg="10" />
              <Col>
                <DivButton
                  action={() => {
                    console.log('Click en notificaci??n');
                  }}
                >
                  <img className="EditProfileIcon" alt="notification" src={notificationIcon} />
                </DivButton>
              </Col>
              <Col>
                <DivButton
                  action={() => {
                    console.log('Click en notificaci??n');
                  }}
                >
                  <img className="ProfileIcon" alt="notification" src={notificationIcon} />
                </DivButton>
              </Col>
            </Row>
            <Row>
              <Col className="ProfileAvatarContainer">
                <Avatar
                  size={150}
                  round="100%"
                  src={process.env.REACT_APP_SERVER_URL + '/' + user.photo.src}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="file"
                  name="file"
                  ref={input}
                  onChange={(event) => {
                    setNewPhoto(event.target.files[0]);
                    console.log(newPhoto);
                  }}
                  hidden
                />
                <Button
                  className="EditPictureButton"
                  onClick={() => {
                    input.current.click();
                  }}
                >
                  Cambiar fotograf??a
                </Button>
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
                        <option value="Espa??ol">Espa??ol</option>
                        <option value="Ingles">Ingles</option>
                        <option value="Portugu??s">Portugu??s</option>
                      </select>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Label className="EditProfileLabel">Pa??s de origen</Label>
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
                      <Label className="EditProfileLabel">N??mero de celular</Label>
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
