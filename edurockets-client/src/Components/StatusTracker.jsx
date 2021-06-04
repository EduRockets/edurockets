import React from 'react';
import { Col, Row } from 'reactstrap';

import './Styles/StatusTracker.css';

const StatusTracker = ({ requirements, show }) => {
  const infoRequirements = [
    'Pasaporte | ID',
    'Carta de Solicitud',
    'Ensayo',
    'Curriculum',
    'Formulario Universitario',
    'Referencias Personales',
    'Formulario de Intereses',
    'Actividades Extracurriculares',
  ];

  return (
    <div className="StatusTracker">
      <Row>
        <div className="StatusTrackerTitle">Requisitos</div>
      </Row>
      {infoRequirements.map((name, index) => {
        return (
          <>
            <Row>
              <Col xs="3" lg="3">
                <div className="StatusTrackerDivider" />
              </Col>
              <Col />
            </Row>
            <Row>
              <Col xs="3" lg="3">
                <div
                  className={`StatusTrackerIndicator ${
                    requirements[Object.keys(requirements)[index]].status !== 1
                      ? ''
                      : show
                      ? 'StatusTrackerIndicatorCheked'
                      : ''
                  } `}
                />
              </Col>
              <Col className="StatusTrackerText">{name}</Col>
            </Row>
          </>
        );
      })}
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerDivider" />
        </Col>
        <Col />
      </Row>
    </div>
  );
};

export default StatusTracker;

{
  /*

  <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerIndicator" />
        </Col>
        <Col className="StatusTrackerText">Pasaporte | ID</Col>
      </Row>
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerDivider" />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerIndicator" />
        </Col>
        <Col className="StatusTrackerText">Carta de solicitud</Col>
      </Row>
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerDivider" />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerIndicator" />
        </Col>
        <Col className="StatusTrackerText">Ensayo</Col>
      </Row>
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerDivider" />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerIndicator" />
        </Col>
        <Col className="StatusTrackerText">Curriculum</Col>
      </Row>
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerDivider" />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerIndicator" />
        </Col>
        <Col className="StatusTrackerText">Formulario Universitario</Col>
      </Row>
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerDivider" />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerIndicator" />
        </Col>
        <Col className="StatusTrackerText">Referencias Profesionales</Col>
      </Row>
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerDivider" />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerIndicator" />
        </Col>
        <Col className="StatusTrackerText">Formulario de Intereses</Col>
      </Row>
      <Row>
        <Col xs="3" lg="3">
          <div className="StatusTrackerDivider" />
        </Col>
        <Col />
      </Row>

*/
}
