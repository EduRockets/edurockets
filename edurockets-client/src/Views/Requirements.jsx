import React from 'react';
import { Row, Col, Container, Button } from 'reactstrap';

import DivButton from '../Components/DivButton';
import SignInLayout from '../Layouts/SignInLayout';

import CardsRequirements from '../Components/CardsRequirements';

import './Styles/Requirements.css';

const Requirements = () => {
  const user = {
    names: 'Jane',
    lastNames: 'Doe',
    photo:
      'https://icons-for-free.com/iconfiles/png/512/female+person+user+woman+young+icon-1320196266256009072.png' /*NO OBLIGATORIO*/,
    birthday: new Date(1998, 6, 8),
    language: '' /*NO OBLIGATORIO*/,
    country: 'Honduras',
    flag: '' /*NO OBLIGATORIO*/,
    residenceCountry: '' /*NO OBLIGATORIO*/,
    phone: '' /*NO OBLIGATORIO*/,
    schoolarShips: [
      {
        uid: 'uid de la beca',
        requirements: {
          passport: {
            url: '',
            status: 1,
          },
          requestLetter: {
            url: '',
            status: 0,
          },
          test: {
            url: '',
            status: 0,
          },
          curriculum: {
            url: '',
            status: 0,
          },
          universityForm: {
            url: '',
            status: 0,
          },
          personalReferences: {
            url: '',
            status: 0,
          },
          interestForm: {
            url: '',
            status: 0,
          },
          extracurricularEvents: {
            url: '',
            status: 0,
          },
        },
      },
      {
        uid: 'uid de la beca 2',
        requirements: {
          passport: {
            url: '',
            status: 1,
          },
          requestLetter: {
            url: '',
            status: 0,
          },
          test: {
            url: '',
            status: 0,
          },
          curriculum: {
            url: '',
            status: 0,
          },
          universityForm: {
            url: '',
            status: 0,
          },
          personalReferences: {
            url: '',
            status: 0,
          },
          interestForm: {
            url: '',
            status: 0,
          },
          extracurricularEvents: {
            url: '',
            status: 0,
          },
        },
      },
    ],
  };

  return (
    <SignInLayout>
      <Container className="Requirements">
        <Row className="RequirementsTitle">Ruta de Aplicación</Row>
        <Row>
          <CardsRequirements requirements={user.schoolarShips[0].requirements} />
        </Row>
        <Row>
          <Col className="RequirementsSendButtonContainer">
            <Button className="RequirementsSendButton">Enviar Aplicación</Button>
          </Col>
        </Row>
      </Container>
    </SignInLayout>
  );
};

export default Requirements;
