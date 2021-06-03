import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';
import Avatar from 'react-avatar';

import EmptyLayout from '../Layouts/EmptyLayout';
import MaskedInput from '../Components/MaskedInput';

import 'react-datepicker/dist/react-datepicker.css';

import './Styles/EditProfile.css';

const EditProfile = () => {
  const history = useHistory();

  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [birthday, setBirthday] = useState();
  const [language, setLanguage] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [phone, setPhone] = useState();

  /*USUARIO PROVICIONAL.*/
  const user = {
    names: 'Jane',
    lastNames: 'Doe',
    photo: 'https://image.flaticon.com/icons/png/512/64/64572.png' /*NO OBLIGATORIO*/,
    birthday: '',
    language: '' /*NO OBLIGATORIO*/,
    country: 'Honduras',
    flag: '',
    residenceCountry: '' /*NO OBLIGATORIO*/,
    phone: '' /*NO OBLIGATORIO*/,
  };

  const changeValue = (event) => {
    const emptyValue = event.value === '';
    switch (event.name) {
      case phone:
        setPhone(event.value);
        break;
      default:
        break;
    }
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

        <Container>
          <Col lg="2" />
          <Col>
            <Row>
              <Col className="EditProfileTitle">Datos Personales</Col>
            </Row>
            <Row>
              <Col>
                <Label className="EditProfileLabel">Nombres</Label>
                <Input value={user.names} className="EditProfileInput" />
              </Col>
            </Row>

            <Row>
              <Col>
                <Label className="EditProfileLabel">Apellidos</Label>
                <Input value={user.lastNames} className="EditProfileInput" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Label className="EditProfileLabel">Fecha de nacimiento</Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <DatePicker
                      className="EditProfileDatePicker"
                      selected={birthday}
                      onChange={(date) => setBirthday(date)}
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Label className="EditProfileLabel">Lengua materna</Label>
                <select value={user.language} className="EditProfileSelect">
                  <option value="Español">Español</option>
                  <option value="Ingles">Ingles</option>
                  <option value="Portugués">Portugués</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="EditProfileLabel">País de origen</Label>
                <select value={user.country} className="EditProfileSelect">
                  <option value="Honduras">Honduras</option>
                  <option value="Costa Rica">Costa Rica</option>
                </select>
              </Col>
              <Col>
                <Label className="EditProfileLabel">País de residencia</Label>
                <select value={user.country} className="EditProfileSelect">
                  <option value="Honduras">Honduras</option>
                  <option value="Costa Rica">Costa Rica</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="EditProfileLabel">Número de celular</Label>
                <Input className="EditProfileInput" placeholder={user.phone} />
                {/*<MaskedInput
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
                    className="EditProfileInput"
                    name="phone"
                    id="phone"
                    value={user.phone}
                    onChange={(event) => changeValue(event.currentTarget)}
                  />*/}
              </Col>
            </Row>
            <div className="EditProfileButtonContainer">
              <Button
                className="EditPictureCancelButton"
                onClick={() => {
                  history.push('/profile');
                }}
              >
                Cancelar
              </Button>
              <Button className="EditProfileSaveButton">Guardar cambios</Button>
            </div>
          </Col>
        </Container>
      </Container>
    </EmptyLayout>
  );
};

export default EditProfile;
