import React from 'react';
import { Container, Button, Row, Col } from 'reactstrap';

import priceIcon from '../Assets/Icons/price.svg';
import markerIcon from '../Assets/Icons/marker.svg';
import clockIcon from '../Assets/Icons/clock.svg';
import bookIcon from '../Assets/Icons/book.svg';
import calendarIcon from '../Assets/Icons/calendar.svg';

import StatusTracker from '../Components/StatusTracker';
import SignInLayout from '../Layouts/SignInLayout';

import Map from '../Components/Map';

import { mapKey } from '../Config/credentials';

import './Styles/Schoolarship.css';

const Schoolarship = () => {
  const schoolarship = {
    uid: 'este es el uid',
    name: 'Digital Marketing Management',
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
    requirements: {},
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

  return (
    <SignInLayout>
      <Container
        className="SchoolarshipLabel"
        style={{ backgroundImage: `url(${schoolarship.label})` }}
        fluid
      />

      <Container className="SchoolarshipContainer">
        <Row className="SchoolarshipTitle">{schoolarship.name}</Row>

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
                  <Col className="SchoolarshipInfoContainer">
                    <div className="SchoolarshipDueDate">{`Quedan ${differenceDate.getDate()} días`}</div>
                  </Col>
                </Row>
                <Row>
                  <Col className="SchoolarshipInfoContainer">
                    <img className="SchoolarshipIcon" alt="time" src={calendarIcon} />
                    {`${schoolarship.duration} años`}
                  </Col>
                </Row>
                <Row>
                  <Col className="SchoolarshipInfoContainer">{`${schoolarship.price} USD/año`}</Col>
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
                <Map
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${mapKey}&callback=initMap`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  nuevaDireccion={schoolarship.location}
                  center={schoolarship.location}
                  zoom={15}
                />
              </div>
            </Row>
          </Col>
          {/* Derecha */}
          <Col>
            <StatusTracker />
          </Col>
        </Row>
      </Container>
    </SignInLayout>
  );
};

export default Schoolarship;
