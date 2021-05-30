import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from 'react-avatar';

import { Container, Row, Col, Button } from 'reactstrap';
import EmptyLayout from '../Layouts/EmptyLayout';

import SearchBar from '../Components/SearchBar';
import CardSchoolarShip from '../Components/CardSchoolarShip';
import DivButton from '../Components/DivButton';

import notificationIcon from '../Assets/Icons/notification.svg';

import './Styles/Profile.css';

const Profile = () => {
  const history = useHistory();

  const [label, setLabel] = useState('Aplicaciones en curso');
  const [section, setSection] = useState();

  const user = {
    names: 'Jane',
    lastNames: 'Doe',
    birthday: '',
    language: 'Español',
    country: 'Honduras',
    residenceCountry: 'USA',
    phone: '+504 95447780',
  };

  const aplications = [
    {
      name: 'Digital Marketing Management',
      institute: 'UC Berkeley Global',
      status: 'Enviado',
    },
    {
      name: 'Digital Marketing Management',
      institute: 'UC Berkeley Global',
      status: 'Enviado',
    },
    {
      name: 'Digital Marketing Management',
      institute: 'UC Berkeley Global',
      status: 'Enviado',
    },
    {
      name: 'Digital Marketing Management',
      institute: 'UC Berkeley Global',
      status: 'Enviado',
    },
    {
      name: 'Digital Marketing Management',
      institute: 'UC Berkeley Global',
      status: 'Enviado',
    },
    {
      name: 'Digital Marketing Management',
      institute: 'UC Berkeley Global',
      status: 'Enviado',
    },
    {
      name: 'Digital Marketing Management',
      institute: 'UC Berkeley Global',
      status: 'Enviado',
    },
    {
      name: 'Digital Marketing Management',
      institute: 'UC Berkeley Global',
      status: 'Enviado',
    },
    {
      name: 'Digital Marketing Management',
      institute: 'UC Berkeley Global',
      status: 'Enviado',
    },
    {
      name: 'Digital Marketing Management',
      institute: 'UC Berkeley Global',
      status: 'Enviado',
    },
  ];

  const renderByState = () => {
    switch (label) {
      case 'Aplicaciones en curso':
        return (
          <Row>
            <Col lg="4">
              <CardSchoolarShip
                title="Digital Marketing Management"
                institute="UC Berkeley Global"
                status="En curso"
              />
            </Col>
            <Col lg="4">
              <CardSchoolarShip
                title="Digital Marketing Management"
                institute="UC Berkeley Global"
                status="En curso"
              />
            </Col>
            <Col lg="4">
              <CardSchoolarShip
                title="Digital Marketing Management"
                institute="UC Berkeley Global"
                status="En curso"
              />
            </Col>
            <Col lg="4">
              <CardSchoolarShip
                title="Digital Marketing Management"
                institute="UC Berkeley Global"
                status="En curso"
              />
            </Col>
          </Row>
        );

      case 'Aplicaciones guardadas':
        return (
          <Row>
            <Col lg="4">
              <CardSchoolarShip
                title="Digital Marketing Management"
                institute="UC Berkeley Global"
                status="En curso"
              />
            </Col>
            <Col lg="4">
              <CardSchoolarShip
                title="Digital Marketing Management"
                institute="UC Berkeley Global"
                status="En curso"
              />
            </Col>
            <Col lg="4">
              <CardSchoolarShip
                title="Digital Marketing Management"
                institute="UC Berkeley Global"
                status="En curso"
              />
            </Col>
            <Col lg="4">
              <CardSchoolarShip
                title="Digital Marketing Management"
                institute="UC Berkeley Global"
                status="En curso"
              />
            </Col>
            <Col lg="4">
              <CardSchoolarShip
                title="Digital Marketing Management"
                institute="UC Berkeley Global"
                status="En curso"
              />
            </Col>
            <Col lg="4">
              <CardSchoolarShip
                title="Digital Marketing Management"
                institute="UC Berkeley Global"
                status="En curso"
              />
            </Col>
            <Col lg="4">
              <CardSchoolarShip
                title="Digital Marketing Management"
                institute="UC Berkeley Global"
                status="En curso"
              />
            </Col>
          </Row>
        );

      case 'Aplicaciones aceptadas':
        return (
          <Row>
            <Col lg="4">
              <CardSchoolarShip
                title="Digital Marketing Management"
                institute="UC Berkeley Global"
                status="En curso"
              />
            </Col>
            <Col lg="4">
              <CardSchoolarShip
                title="Digital Marketing Management"
                institute="UC Berkeley Global"
                status="En curso"
              />
            </Col>
          </Row>
        );
      default:
        break;
    }
  };

  return (
    <EmptyLayout>
      <Container className="Profile" fluid>
        <div className="ProfileBanner">
          <Container>
            <Row className="ProfileContainer">
              <Col lg="10" />
              <Col>
                <Button
                  className="ProfileButton"
                  onClick={() => {
                    history.push('/editprofile');
                  }}
                >
                  Editar
                </Button>
              </Col>
              <Col className="ProfileIconContainer">
                <DivButton
                  action={() => {
                    console.log('olo');
                  }}
                >
                  <img className="ProfileIcon" alt="notification" src={notificationIcon} />
                </DivButton>
              </Col>
            </Row>
            <Row>
              <Col>
                <Avatar size={150} round="100%" />
              </Col>
            </Row>
            <Row>
              <Col className="ProfileName">{`${user.names}  ${user.lastNames}`}</Col>
            </Row>
            <Row>
              <Col className="ProfileCountry">{user.country}</Col>
            </Row>
            <Row>
              <Col>
                <SearchBar />
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <div className="ProfileButtonsContainer">
            <div className="ProfileLabelAplication">{label}</div>
            <div className="ProfileButtonAplicationContainer">
              <DivButton
                className={`ProfileButtonAplication${
                  label === 'Aplicaciones en curso' ? ' Background' : ''
                }`}
                action={() => {
                  setLabel('Aplicaciones en curso');
                }}
              >
                Aplicaciones en curso
              </DivButton>
              <DivButton
                className={`ProfileButtonAplication${
                  label === 'Aplicaciones guardadas' ? ' Background' : ''
                }`}
                action={() => {
                  setLabel('Aplicaciones guardadas');
                }}
              >
                Aplicaciones guardadas
              </DivButton>
              <DivButton
                className={`ProfileButtonAplication${
                  label === 'Aplicaciones aceptadas' ? ' Background' : ''
                }`}
                action={() => {
                  setLabel('Aplicaciones aceptadas');
                }}
              >
                Aplicaciones aceptadas
              </DivButton>
              <DivButton
                className={`ProfileButtonAplication${
                  label === 'Perfil de aptitudes e intereses' ? ' Background' : ''
                }`}
                action={() => {
                  setLabel('Perfil de aptitudes e intereses');
                }}
              >
                Perfil de aptitudes e intereses
              </DivButton>
            </div>
          </div>

          {/* <Row>
            {aplications.map((aplication) => {
              <Col>
                <CardSchoolarShip
                  title={aplication.name}
                  institute={aplication.institute}
                  status={aplication.status}
                />
              </Col>;
            })}
          </Row> */}
          {renderByState()}
        </Container>
      </Container>
    </EmptyLayout>
  );
};

export default Profile;
