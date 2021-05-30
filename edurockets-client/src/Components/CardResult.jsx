import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
  Container,
} from 'reactstrap';

import priceIcon from '../Assets/Icons/price.svg';
import markerIcon from '../Assets/Icons/marker.svg';
import clockIcon from '../Assets/Icons/clock.svg';
import bookIcon from '../Assets/Icons/book.svg';
import corazonIcon from '../Assets/Icons/corazon.svg';

import SchoolarshipImage from '../Assets/Temporal/SchoolarshipImage.png';

import './Styles/CardResult.css';

const CardResult = ({ name, location, hedge, modality, date }) => {
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

  location = {
    country: 'Canada',
    state: 'Ottawa',
    lng: '0',
    lat: '0',
  };

  hedge = 30;

  modality = 'Virtual';

  date = new Date(2021, 5, 26);

  return (
    <div className="CardResult">
      <Row className="CardResultContainer">
        <Col>
          <img className="CardImage" src={SchoolarshipImage} alt="Schoolarship image" />
        </Col>

        <Col lg="5">
          <Row>
            <Col className="CardTitle">{name}</Col>
          </Row>
          <Row>
            <Col className="CardText">
              <img className="CardIcon" alt="location" src={markerIcon} />
              {` ${location.state}, ${location.country}`}
            </Col>
          </Row>
          <Row>
            <Col className="CardText">
              <img className="CardIcon" alt="price" src={priceIcon} />
              {` Cobertura Beca: ${hedge}%`}
            </Col>
          </Row>
          <Row>
            <Col className="CardText">
              <img className="CardIcon" alt="modality" src={bookIcon} />
              {` Modalidad: ${modality}`}
            </Col>
          </Row>
          <Row>
            <Col className="CardText">
              <img className="CardIcon" alt="modality" src={clockIcon} />
              {` Fecha límite de aplicación: ${date.getDate()} de ${
                monthNames[date.getMonth()]
              }, ${date.getFullYear()}`}
            </Col>
          </Row>

          <Row>
            <Col>
              <Button className="CardButtonAplicar">Aplicar</Button>
            </Col>
            <Col>
              <Button className="CardButtonGuardar">
                <img className="CardIcon" alt="price" src={corazonIcon} /> Guardar
              </Button>
            </Col>
          </Row>
        </Col>

        <div className="CardResultDivider" />

        <Col>
          <Button
            className="
         CardButtonGuardar"
          >
            Más información
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CardResult;

{
  /*
return (
    <div className="CardResult">
      <div>
        <img className="CardImage" src={SchoolarshipImage} alt="Schoolarship image" />
      </div>

      <div>
        <div className="CardTitle">{name}</div>
        <div>
          <div className="CardText">
            <img className="CardIcon" alt="location" src={markerIcon} />
            {`${location.state}, ${location.country}`}
          </div>
          <div className="CardText">
            <img className="CardIcon" alt="price" src={priceIcon} />
            {`Cobertura Beca: ${hedge}%`}
          </div>
          <div className="CardText">
            <img className="CardIcon" alt="modality" src={bookIcon} />
            {`Modalidad: ${modality}`}
          </div>
          <div className="CardText">
            <img className="CardIcon" alt="date" src={clockIcon} />
            {`Fecha límite de aplicación: ${date.getDate()} de ${
              monthNames[date.getMonth()]
            }, ${date.getFullYear()}`}
          </div>
        </div>

        <div>
          <Button className="CardButtonAplicar">Aplicar</Button>
          <Button className="CardButtonGuardar">
            <img className="CardIcon" alt="price" src={corazonIcon} /> Guardar
          </Button>
        </div>
      </div>

      <div>
        <div className="CardResultDivider" />
      </div>

      <div>
        <Button
          className="
         CardButtonGuardar"
        >
          Más información
        </Button>
      </div>
    </div>
  );
*/
}
