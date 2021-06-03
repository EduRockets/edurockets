import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';

import priceIcon from '../Assets/Icons/price.svg';
import markerIcon from '../Assets/Icons/marker.svg';
import clockIcon from '../Assets/Icons/clock.svg';
import bookIcon from '../Assets/Icons/book.svg';
import calendarIcon from '../Assets/Icons/calendar.svg';
import instituteIcon from '../Assets/Icons/institute.svg';
import corazonIcon from '../Assets/Icons/corazon.svg';

import StatusTracker from '../Components/StatusTracker';
import SignInLayout from '../Layouts/SignInLayout';

import CardsRequirements from '../Components/CardsRequirements';
import Map from '../Components/Map';
import { mapKey } from '../Config/credentials';

import './Styles/Schoolarship.css';

const Schoolarship = () => {
  const schoolarship = {
    uid: 'este es el uid',
    name: 'Digital Marketing Management',
    institute: 'Universidad Equis',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore ',
    modality: 'Virtual',
    dueDate: new Date(2021, 6, 8),
    duration: 2,
    label: 'https://wallpaperaccess.com/full/1912152.jpg',
    price: 0,
    hedge: 30,
    location: {
      country: 'Canada',
      state: 'Ottawa',
      lng: '100000',
      lat: '9956',
    },
    requirements: {
      passport: {
        url: '',
        status: 0,
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
        style={{ backgroundImage: `url(${schoolarship.label})` }}
        fluid
      />

      <Container className="SchoolarshipContainer">
        <Row>
          <Col xs="12" lg="8" className="SchoolarshipTitle">
            {schoolarship.name}
          </Col>
          <Col className="SchoolarshipTitle">
            {!show ? (
              <Row>
                <Col xs="12" lg="5">
                  <Button className="SchoolarshipButtonGuardar">
                    <img className="SchoolarshipButtonIcon" src={corazonIcon} /> Guardar
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
              <></>
            )}
          </Col>
        </Row>

        <Row>
          {/* Izquierda */}
          <Col xs="12" lg="8">
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
            <StatusTracker />
          </Col>
        </Row>

        {show ? (
          <>
            <Row className="SchoolarshipTitle">Ruta de Aplicación</Row>
            <Row>
              <CardsRequirements requirements={schoolarship.requirements} />
            </Row>
            <Row>
              <Col className="SchoolarshipSendButtonContaier">
                <Button className="SchoolarshipSendButton">Enviar Aplicación</Button>
              </Col>
            </Row>
          </>
        ) : (
          <></>
        )}
      </Container>
    </SignInLayout>
  );
};

export default Schoolarship;
