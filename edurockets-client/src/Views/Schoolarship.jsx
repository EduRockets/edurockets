import React from 'react';
import { Container, Button, Row, Col } from 'reactstrap';

import priceIcon from '../Assets/Icons/price.svg';
import markerIcon from '../Assets/Icons/marker.svg';
import clockIcon from '../Assets/Icons/clock.svg';
import bookIcon from '../Assets/Icons/book.svg';
import calendarIcon from '../Assets/Icons/calendar.svg';

import StatusTracker from '../Components/StatusTracker';
import SignInLayout from '../Layouts/SignInLayout';

import './Styles/Schoolarship.css';

const Schoolarship = () => {
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

  const schoolarship = {
    uid: 'este es el uid',
    name: 'Digital Marketing Management',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore ',
    modality: 'Virtual',
    dueDate: new Date(2021, 5, 26),
    label:
      'https://images.theconversation.com/files/3911/original/princeton.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
    flag: 'https://lh3.googleusercontent.com/proxy/wYEasAw19qoihLmMjuZWZz1exzFQrx4rs6drsp6QY6hnkGnk-DDqPI6QLBNu6fxxCMXBljUIKlGxveDhwZWOLPM2Nuu9MsYpGNmNIX9VyLQ8djsjUfwtl6nviAlpnMpv3N3n5mAEzDmwsA',
    price: 0,
    hedge: 30,
    location: {
      country: 'Canada',
      state: 'Ottawa',
      lng: '0',
      lat: '0',
    },
    requirements: {},
  };

  return (
    <SignInLayout>
      <Container className="SchoolarshipLabel" fluid></Container>
      <Container className="SchoolarshipContainer">
        <Row className="SchoolarshipTitle">{schoolarship.name}</Row>

        <Row>
          {/* Izquierda */}
          <Col lg="8">
            <Row>
              <Col>
                <Row>
                  <Col className="SchoolarshipInfoContainer">
                    <img className="SchoolarshipIcon" alt="location" src={markerIcon} />
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
                      monthNames[schoolarship.dueDate.getMonth()]
                    }, ${schoolarship.dueDate.getFullYear()}`}
                  </Col>
                </Row>
              </Col>

              <Col className="SchoolarshipInformationContainer">
                <Row>
                  <Col className="SchoolarshipInfoContainer">
                    <div className="SchoolarshipTime">Quedan 5 días</div>
                  </Col>
                </Row>
                <Row>
                  <Col className="SchoolarshipInfoContainer">
                    <img className="CardIcon" alt="time" src={calendarIcon} /> 2 años
                  </Col>
                </Row>
                <Row>
                  <Col className="SchoolarshipInfoContainer">00000 USD/año</Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <p className="SchoolarshipDescription">{schoolarship.description}</p>
              </Col>
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
