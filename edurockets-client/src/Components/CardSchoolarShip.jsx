import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import DivButton from './DivButton';

import '../Styles/CardSchoolarShip.css';

const CardSchoolarShip = ({ title, institute, status }) => {
  return (
    <DivButton>
      <Card className="CardSchoolarShip">
        <CardImg
          top
          width="100%"
          src="https://i.pinimg.com/originals/f3/03/60/f303601a76f2f0e17c492ccd871be275.jpg"
          alt="Image"
        />
        <CardBody>
          <CardTitle className="CardTitle">{title}</CardTitle>
          <CardSubtitle className="CardSubTitle">{institute}</CardSubtitle>
          <CardText className="CardStatus">{`Estado: ${status}`}</CardText>
        </CardBody>
      </Card>
    </DivButton>
  );
};

export default CardSchoolarShip;
