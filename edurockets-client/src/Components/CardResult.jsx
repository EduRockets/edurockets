import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';

import priceIcon from '../Assets/Icons/price.svg';
import markerIcon from '../Assets/Icons/marker.svg';
import clockIcon from '../Assets/Icons/clock.svg';
import bookIcon from '../Assets/Icons/book.svg';
import corazonIcon from '../Assets/Icons/corazon.svg';
import calendarIcon from '../Assets/Icons/calendar.svg';
import instituteIcon from '../Assets/Icons/institute.svg';

import { Icon } from '@iconify/react';
import heartIcon from '@iconify-icons/bi/heart';

import './Styles/CardResult.css';

const CardResult = ({ schoolarship }) => {
  const history = useHistory();

  const differenceDate = new Date();
  differenceDate.setTime(schoolarship.dueDate.getTime() - new Date().getTime());

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

  return (
    <div className="CardResult">
      <Row className="CardResultContainer">
        <Col>
          <img className="CardImage" src={schoolarship.photo} alt="Schoolarship image" />
        </Col>

        <Col lg="5">
          <Row>
            <Col className="CardTitle">{schoolarship.name}</Col>
          </Row>
          <Row>
            <Col className="CardText">
              <img className="CardIcon" alt="location" src={markerIcon} />
              {` ${schoolarship.location.state}, ${schoolarship.location.country}`}
            </Col>
          </Row>
          <Row>
            <Col className="CardText">
              <img className="CardIcon" alt="location" src={instituteIcon} />
              {` Instituto: ${schoolarship.institute}`}
            </Col>
          </Row>
          <Row>
            <Col className="CardText">
              <img className="CardIcon" alt="price" src={priceIcon} />
              {` Cobertura Beca: ${schoolarship.hedge}`}
            </Col>
          </Row>
          <Row>
            <Col className="CardText">
              <img className="CardIcon" alt="modality" src={bookIcon} />
              {` Modalidad: ${schoolarship.modality}`}
            </Col>
          </Row>
          <Row>
            <Col className="CardText">
              <img className="CardIcon" alt="modality" src={clockIcon} />
              {` Fecha límite de aplicación: ${schoolarship.dueDate.getDate()} de ${
                monthNames[schoolarship.dueDate.getMonth()]
              }, ${schoolarship.dueDate.getFullYear()}`}
            </Col>
          </Row>

          <Row>
            <Col>
              <Button className="CardButtonAplicar">Aplicar</Button>
            </Col>
            <Col>
              <Button className="CardButtonGuardar">
                <Icon className="CardButtonGuardarIcon" icon={heartIcon} />
                Guardar
              </Button>
            </Col>
          </Row>
        </Col>

        <div className="CardResultDivider" />

        <Col className="CardInformationContainer">
          <Row>
            <Col>
              <div className="CardTime">{`Quedan ${differenceDate.getDate()} días`}</div>
            </Col>
          </Row>
          <Row>
            <Col className="CardDueTimeContainer">
              <img className="CardIcon" alt="time" src={calendarIcon} />
              {`${schoolarship.duration} ${schoolarship.duration > 1 ? 'años' : 'año'} `}
            </Col>
          </Row>
          <Row>
            <Col className="CardPriceContainer">{`${schoolarship.price.toFixed(1)} USD/año`}</Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="
                CardButtonInfo"
                onClick={() => {
                  history.push('/schoolarship');
                }}
              >
                Más información
              </Button>
            </Col>
          </Row>
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
