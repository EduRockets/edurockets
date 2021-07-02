import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Avatar from 'react-avatar';

import { Container, Row, Col, Button } from 'reactstrap';

import EmptyLayout from '../Layouts/EmptyLayout';
import SearchBar from '../Components/SearchBar';
import CardSchoolarShip from '../Components/CardSchoolarShip';
import DivButton from '../Components/DivButton';
import useAuth from '../Providers/useAuth';

import notificationIcon from '../Assets/Icons/notification.svg';
import signOutIcon from '../Assets/Icons/signOut.svg';

import './Styles/Profile.css';

const Profile = () => {
  const history = useHistory();
  const location = useLocation();

  const show = location.aboutProps;
  const showSaved = location.showSaved;

  const [label, setLabel] = useState('Aplicaciones en curso');

  const { user } = useAuth();

  useEffect(() => {
    if (showSaved) setLabel('Aplicaciones guardadas');
  }, []);

  return (
    <EmptyLayout>
      <Container className="Profile" fluid>
        <div className="ProfileBanner">
          <Container>
            <Row className="ProfileContainer">
              <Col lg="9" />
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
              <Col className="ProfileIconContainer">
                <DivButton
                  action={() => {
                    localStorage.removeItem('token');
                  }}
                >
                  <img className="ProfileIcon" alt="notification" src={signOutIcon} />
                </DivButton>
              </Col>
            </Row>
            <Row>
              <Col>
                <Avatar
                  size={150}
                  round="100%"
                  src={process.env.REACT_APP_SERVER_URL + '/' + user.photo.src}
                />
              </Col>
            </Row>
            <Row>
              <Col className="ProfileName">{`${user.names}  ${user.lastNames}`}</Col>
            </Row>
            <Row>
              <Col className="ProfileCountry">{user.email}</Col>
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
              <>
                {user.schoolarships.map((aplication) => {
                  if (label === 'Aplicaciones en curso' && aplication.status === 'En curso') {
                    return (
                      <CardSchoolarShip
                        title={aplication.name}
                        institute={aplication.institute}
                        status={aplication.status}
                        src={aplication.photo}
                      />
                    );
                  } else if (
                    label === 'Aplicaciones guardadas' &&
                    aplication.status === 'Guardado'
                  ) {
                    return (
                      <CardSchoolarShip
                        title={aplication.name}
                        institute={aplication.institute}
                        status={aplication.status}
                        src={aplication.photo}
                      />
                    );
                  } else if (
                    label === 'Aplicaciones aceptadas' &&
                    aplication.status === 'Aceptado'
                  ) {
                    return (
                      <CardSchoolarShip
                        title={aplication.name}
                        institute={aplication.institute}
                        status={aplication.status}
                        src={aplication.photo}
                      />
                    );
                  }
                })}
                {show ? (
                  <CardSchoolarShip
                    title={'Beca Presidencial Concordia - Contabilidad'}
                    institute={'Universidad de Concordia'}
                    status={'En Curso'}
                    src={
                      'https://d1bvpoagx8hqbg.cloudfront.net/originals/experiencia-en-la-universidad-concordia-canada-por-monika-024bc2c82e45deff1f1b0d344642d624.jpg'
                    }
                    action={() => {
                      history.push('/requirements');
                    }}
                  />
                ) : (
                  <></>
                )}
              </>
            )}
          </Row>
        </Container>
      </Container>
    </EmptyLayout>
  );
};

export default Profile;
