import React from 'react';

import { Col, Row } from 'reactstrap';

import DivButton from '../Components/DivButton';

import './Styles/StatusTracker.css';

const StatusTracker = ({ requirements }) => {
  return (
    <div className="StatusTracker">
      <Row>
        <Col>
          <div className="StatusTrackerTitle">Requisitos</div>
        </Col>
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
    </div>
  );
};

export default StatusTracker;
