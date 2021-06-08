import React, { useState } from 'react';
import { Row, Col, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import DivButton from './DivButton';

import checkedIcon from '../Assets/Icons/checked.svg';
import pendingIcon from '../Assets/Icons/pending.svg';

import './Styles/CardSchoolarShip.css';

const CardSchoolarShip = ({ title, institute, status, src }) => {
  return (
    <DivButton className="CardSchoolarShip">
      {/* <img className="CardSchoolarShipIcon" src={pendingIcon} /> */}
      <Row>
        <Col>
          <img src={src} className="CardSchoolarShipImage" alt="image" />
        </Col>
      </Row>
      <Row>
        <CardTitle className="CardTitle">{title}</CardTitle>
      </Row>
      <Row>
        <CardSubtitle className="CardSubTitle">{institute}</CardSubtitle>
      </Row>
      <Row>
        <CardText className="CardStatus">{`Estado: ${status}`}</CardText>
      </Row>
    </DivButton>
  );
};

export default CardSchoolarShip;
