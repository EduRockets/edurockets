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

  /*USUARIO PROVICIONAL.*/
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
        status: 'En Curso',
        requirements: {
          passport: {
            url: '',
            status: 1,
          },
          requestLetter: {
            url: '',
            status: 1,
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
        status: 'Aceptado',
        requirements: {
          passport: {
            url: '',
            status: 1,
          },
          requestLetter: {
            url: '',
            status: 1,
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

  /*APLICACIONES PROVISONALES*/
  const aplications = [
    {
      name: 'Becas internacionales de maestría al mérito - Vino y la Viticultura',
      institute: 'Lincoln University',
      status: 'En curso',
      photo:
        'https://www.ellucian.com/sites/default/files/styles/max_width_1920/public/uploads/images/2020/01/news-image-lincoln-university.png?itok=U_GbUwDB',
    },
    {
      name: 'Pregrado de educación especial K-12',
      institute: 'University of Central Arkansas',
      status: 'Aceptado',
      photo: 'https://talkbusiness.net/wp-content/uploads/2018/08/UCA-Image-WEB.jpg',
    },
    {
      name: 'Lingüística (BA)',
      institute: 'Universidad de Concordia',
      status: 'En curso',
      photo:
        'https://d1bvpoagx8hqbg.cloudfront.net/originals/experiencia-en-la-universidad-concordia-canada-por-monika-024bc2c82e45deff1f1b0d344642d624.jpg',
    },
    {
      name: 'Licenciatura en Música en Composición de Canciones',
      institute: 'Berklee College of Music',
      status: 'En curso',
      photo:
        'https://college.berklee.edu/sites/default/files/styles/scale_and_crop_16_9_large/public/d7/bcm/berklee-boston-campus-at-night.jpg?itok=ICRwn8Jm',
    },
    {
      name: 'Marketing',
      institute: 'University of Central Arkansas',
      status: 'En curso',
      photo: 'https://talkbusiness.net/wp-content/uploads/2018/08/UCA-Image-WEB.jpg',
    },
    {
      name: 'Ingeniería Aeroespacial',
      institute: 'Universidad de Concordia',
      status: 'Aceptado',
      photo:
        'https://d1bvpoagx8hqbg.cloudfront.net/originals/experiencia-en-la-universidad-concordia-canada-por-monika-024bc2c82e45deff1f1b0d344642d624.jpg',
    },
    {
      name: 'Antropología',
      institute: 'Universidad de Concordia',
      status: 'Guardado',
      photo:
        'https://d1bvpoagx8hqbg.cloudfront.net/originals/experiencia-en-la-universidad-concordia-canada-por-monika-024bc2c82e45deff1f1b0d344642d624.jpg',
    },
    {
      name: 'Educación Artística, Artes Visuales',
      institute: 'Universidad de Concordia',
      status: 'Guardado',
      photo:
        'https://d1bvpoagx8hqbg.cloudfront.net/originals/experiencia-en-la-universidad-concordia-canada-por-monika-024bc2c82e45deff1f1b0d344642d624.jpg',
    },
  ];

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
                    console.log('Click en notificación');
                  }}
                >
                  <img className="ProfileIcon" alt="notification" src={notificationIcon} />
                </DivButton>
              </Col>
            </Row>
            <Row>
              <Col>
                <Avatar size={150} round="100%" src={user.photo} />
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
          <Row>
            {label === 'Perfil de aptitudes e intereses' ? (
              <>
                <Row>
                  <Col>
                    <Button className="ProfileButtonTest">Completar Test de EduRockets</Button>
                  </Col>
                </Row>
              </>
            ) : (
              aplications.map((aplication) => {
                if (label === 'Aplicaciones en curso' && aplication.status === 'En curso') {
                  return (
                    <CardSchoolarShip
                      title={aplication.name}
                      institute={aplication.institute}
                      status={aplication.status}
                      src={aplication.photo}
                    />
                  );
                } else if (label === 'Aplicaciones guardadas' && aplication.status === 'Guardado') {
                  return (
                    <CardSchoolarShip
                      title={aplication.name}
                      institute={aplication.institute}
                      status={aplication.status}
                      src={aplication.photo}
                    />
                  );
                } else if (label === 'Aplicaciones aceptadas' && aplication.status === 'Aceptado') {
                  return (
                    <CardSchoolarShip
                      title={aplication.name}
                      institute={aplication.institute}
                      status={aplication.status}
                      src={aplication.photo}
                    />
                  );
                }
              })
            )}
          </Row>
        </Container>
      </Container>
    </EmptyLayout>
  );
};

export default Profile;
