import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from 'react-avatar';

import { Container, Row, Col, Button } from 'reactstrap';
import EmptyLayout from '../Layouts/EmptyLayout';

import { Icon } from '@iconify/react';
import notificationIcon from '@iconify-icons/mi/notification';

import SearchBar from '../Components/SearchBar';
import CardSchoolarShip from '../Components/CardSchoolarShip';

import '../Styles/Profile.css';

const Profile = () => {
  const history = useHistory();

  const [label, setLabel] = useState('Aplicaciones en curso');
  const [section, setSection] = useState();

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

  return (
    <EmptyLayout>
      <Container className="Profile" fluid>
        <div className="ProfileBanner">
          <Container>
            <Row className="ProfileActionsContainer">
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
              <Col>
                <Icon className="ProfileIcon" icon={notificationIcon} />
              </Col>
            </Row>
            <Row>
              <Col className="ProfileAvatarContainer">
                <Avatar size={150} round="100%" />
              </Col>
            </Row>
            <Row>
              <Col className="ProfileName">Jane Doe</Col>
            </Row>
            <Row>
              <Col className="ProfileCountry">Honduras</Col>
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
            <div>
              <Button
                className="ProfileButtonAplication"
                onClick={() => {
                  setLabel('Aplicaciones en curso');
                }}
              >
                Aplicaciones en curso
              </Button>
              <Button
                className="ProfileButtonAplication"
                onClick={() => {
                  setLabel('Aplicaciones guardadas');
                }}
              >
                Aplicaciones guardadas
              </Button>
              <Button
                className="ProfileButtonAplication"
                onClick={() => {
                  setLabel('Aplicaciones aceptadas');
                }}
              >
                Aplicaciones aceptadas
              </Button>
              <Button
                className="ProfileButtonAplication"
                onClick={() => {
                  setLabel('Perfil de aptitudes e intereses');
                }}
              >
                Perfil de aptitudes e intereses
              </Button>
            </div>
          </div>

          {aplications.map((aplication) => {
            <>
              <CardSchoolarShip
                title={aplication.name}
                institute={aplication.institute}
                status={aplication.status}
              />
            </>;
          })}
        </Container>
      </Container>
    </EmptyLayout>
  );
};

export default Profile;
