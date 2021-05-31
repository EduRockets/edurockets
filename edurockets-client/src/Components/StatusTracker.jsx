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
        <Col lg="3">
          <div className="StatusTrackerDivider" />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col lg="3">
          <div className="StatusTrackerIndicator StatusTrackerIndicatorCheked" />
        </Col>
        <Col className="StatusTrackerText">Pasaporte | ID</Col>
      </Row>
      <Row>
        <Col lg="3">
          <div className="StatusTrackerDivider" />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col lg="3">
          <div className="StatusTrackerIndicator" />
        </Col>
        <Col className="StatusTrackerText">Carta de solicitud</Col>
      </Row>
      <Row>
        <Col lg="3">
          <div className="StatusTrackerDivider" />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col lg="3">
          <div className="StatusTrackerIndicator" />
        </Col>
        <Col className="StatusTrackerText">Ensayo</Col>
      </Row>
      <Row>
        <Col lg="3">
          <div className="StatusTrackerDivider" />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col lg="3">
          <div className="StatusTrackerIndicator" />
        </Col>
        <Col className="StatusTrackerText">Curriculum</Col>
      </Row>
    </div>
  );
};

export default StatusTracker;
