import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { Container, Row, Col, Button, Label, Input } from 'reactstrap';
import EmptyLayout from '../Layouts/EmptyLayout';

import '../Styles/EditProfile.css';

const EditProfile = () => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [birthday, setBirthday] = useState();
  const [language, setLanguage] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [phone, setPhone] = useState();

  return (
    <EmptyLayout>
      <Container className="Profile" fluid>
        <div className="ProfileBanner">
          <Container>
            <Row>
              <Col className="ProfileAvatarContainer">
                <Avatar size={150} round="100%" />
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
          <Row>
            <Col lg="2" />
            <Col>
              <Row>
                <Col className="EditProfileTitle">Datos Personales</Col>
              </Row>
              <Row>
                <Col>
                  <Label className="EditProfileLabel">Nombres</Label>
                  <Input className="EditProfileInput" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label className="EditProfileLabel">Apellidos</Label>
                  <Input className="EditProfileInput" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label className="EditProfileLabel">Fecha de nacimiento</Label>
                  <Input className="EditProfileInput" />
                </Col>
                <Col>
                  <Label className="EditProfileLabel">Lengua materna</Label>
                  <Input className="EditProfileInput" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label className="EditProfileLabel">País de origen</Label>
                  <Input className="EditProfileInput" />
                </Col>
                <Col>
                  <Label className="EditProfileLabel">País de residencia</Label>
                  <Input className="EditProfileInput" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label className="EditProfileLabel">Número de celular</Label>
                  <Input className="EditProfileInput" />
                </Col>
              </Row>
              <div className="EditProfileButtonContainer">
                <Button className="EditPictureCancelButton">Cancelar</Button>
                <Button className="EditProfileSaveButton">Guardar cambios</Button>
              </div>
            </Col>
            <Col lg="2" />
          </Row>
        </Container>
      </Container>
    </EmptyLayout>
  );
};

export default EditProfile;
