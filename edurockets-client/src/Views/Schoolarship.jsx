import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Button, Row, Col } from 'reactstrap';

import priceIcon from '../Assets/Icons/price.svg';
import markerIcon from '../Assets/Icons/marker.svg';
import clockIcon from '../Assets/Icons/clock.svg';
import bookIcon from '../Assets/Icons/book.svg';
import calendarIcon from '../Assets/Icons/calendar.svg';
import instituteIcon from '../Assets/Icons/institute.svg';

import StatusTracker from '../Components/StatusTracker';
import SignInLayout from '../Layouts/SignInLayout';

import Map from '../Components/Map';
import { mapKey } from '../Config/credentials';

import { Icon } from '@iconify/react';
import heartIcon from '@iconify-icons/bi/heart';

import './Styles/Schoolarship.css';

const Schoolarship = () => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    console.log('Este es el id: ', id);
  }, []);

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

  const schoolarship = {
    uid: 'este es el uid',
    name: 'Beca Presidencial Concordia - Contabilidad',
    institute: 'Universidad de Concordia',
    description:
      'Contadores destacados mantienen a las empresas a la vanguardia: resuelven problemas, desarrollan estrategias financieras sólidas y garantizan una buena salud fiscal. Si eres un gran triunfador con un apetito por el aprendizaje continuo, considéranos. Se unirá a un programa con reputación de graduados que logran excelentes resultados en los exámenes nacionales de contabilidad profesional.',
    modality: 'Presencial',
    studyArea: 'Negocios Administración y Economía',
    degree: 'Pregrado',
    dueDate: new Date(2021, 10, 1),
    duration: 5,
    banner: 'https://pbs.twimg.com/media/DKmMe6CWsAUvikp.jpg',
    photo:
      'https://d1bvpoagx8hqbg.cloudfront.net/originals/experiencia-en-la-universidad-concordia-canada-por-monika-024bc2c82e45deff1f1b0d344642d624.jpg',
    price: 16500,
    hedge: 100,
    location: {
      country: 'Canada',
      state: 'Montreal',
      lng: '100000',
      lat: '9956',
    },
  };

  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const differenceDate = new Date();
  differenceDate.setTime(schoolarship.dueDate.getTime() - new Date().getTime());

  const [show, setShow] = useState(false);

  return (
    <SignInLayout>
      <Container
        className="SchoolarshipBanner"
        style={{ backgroundImage: `url(${schoolarship.banner})` }}
        fluid
      />

      <Container className="SchoolarshipContainer">
        <Row>
          {/* Izquierda */}
          <Col xs="12" lg="8">
            <Row>
              <Col xs="12" lg="8" className="SchoolarshipTitle">
                {schoolarship.name}
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="SchoolarshipInfoContainer">
                    <img className="SchoolarshipIcon" alt="location" src={markerIcon} />
                    <div />
                    {` ${schoolarship.location.state}, ${schoolarship.location.country}`}
                  </Col>
                </Row>
                <Row>
                  <Col className="SchoolarshipInfoContainer">
                    <img className="SchoolarshipIcon" alt="institute" src={instituteIcon} />
                    {` Instituto: ${schoolarship.institute}`}
                  </Col>
                </Row>
                <Row>
                  <Col className="SchoolarshipInfoContainer">
                    <img className="SchoolarshipIcon" alt="price" src={priceIcon} />
                    {` Cobertura Beca: ${schoolarship.hedge}%`}
                  </Col>
                </Row>
                <Row>
                  <Col className="SchoolarshipInfoContainer">
                    <img className="SchoolarshipIcon" alt="modality" src={bookIcon} />
                    {` Modalidad: ${schoolarship.modality}`}
                  </Col>
                </Row>
                <Row>
                  <Col className="SchoolarshipInfoContainer">
                    <img className="SchoolarshipIcon" alt="modality" src={clockIcon} />
                    {` Fecha límite de aplicación: ${schoolarship.dueDate.getDate()} de ${
                      monthNames[schoolarship.dueDate.getMonth() - 1]
                    }, ${schoolarship.dueDate.getFullYear()}`}
                  </Col>
                </Row>
              </Col>

              <Col className="SchoolarshipPriceContainer">
                <Row>
                  <Col>
                    <div className="SchoolarshipDueDate">{`Quedan ${differenceDate.getDate()} días`}</div>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ margin: '1rem' }}>
                    <img className="SchoolarshipIcon" alt="time" src={calendarIcon} />
                    {`${schoolarship.duration} años`}
                  </Col>
                </Row>
                <Row>
                  <Col>{`${schoolarship.price} USD/año`}</Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <p className="SchoolarshipDescription">{schoolarship.description}</p>
              </Col>
            </Row>

            <Row>
              <div className="SchoolarshipMapContainer">
                {/*<Map
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapKey}&callback=initMap`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  nuevaDireccion={schoolarship.location}
                  center={schoolarship.location}
                  zoom={15}
                />*/}
              </div>
            </Row>
          </Col>

          {/* Derecha */}
          <Col>
            <Row>
              <Col className="SchoolarshipTitle">
                {!show ? (
                  <Row>
                    <Col xs="12" lg="5">
                      <Button className="SchoolarshipButtonGuardar">
                        <Icon className="SchoolarshipButtonIcon" icon={heartIcon} /> Guardar
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        className="SchoolarshipButtonAplicar"
                        onClick={() => {
                          setShow(true);
                        }}
                      >
                        Aplicar
                      </Button>
                    </Col>
                  </Row>
                ) : (
                  <>
                    <Row>
                      <Button
                        className="SchoolarshipButtonInProgress"
                        onClick={() => {
                          history.push('/requirements');
                        }}
                      >
                        Ver estado de la aplicación
                      </Button>
                    </Row>
                    <Row>
                      <Col className="SchoolarshipText">Aplicación actualmente en curso</Col>
                    </Row>
                  </>
                )}
              </Col>
            </Row>
            <StatusTracker requirements={user.schoolarShips[0].requirements} />
          </Col>
        </Row>
      </Container>
    </SignInLayout>
  );
};

export default Schoolarship;
