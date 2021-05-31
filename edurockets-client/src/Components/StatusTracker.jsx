import React from 'react';

import { Col, Row } from 'reactstrap';

import './Styles/StatusTracker.css';

const StatusTracker = ({ requirements }) => {
  return (
    <div className="StatusTracker">
      <Row>
        <Col>Requisitos</Col>
      </Row>
      <div></div>
    </div>
  );
};

export default StatusTracker;
