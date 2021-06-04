import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import DivButton from './DivButton';

import './Styles/CardSchoolarShip.css';

const CardSchoolarShip = ({ title, institute, status, src }) => {
  return (
    <DivButton className="CardSchoolarShip">
      <CardImg className="CardSchoolarShipImage" src={src} alt="Image" />
      <CardBody>
        <CardTitle className="CardTitle">{title}</CardTitle>
        <CardSubtitle className="CardSubTitle">{institute}</CardSubtitle>
        <CardText className="CardStatus">{`Estado: ${status}`}</CardText>
      </CardBody>
    </DivButton>
  );
};

export default CardSchoolarShip;
