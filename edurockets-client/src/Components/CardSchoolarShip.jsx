import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import DivButton from './DivButton';

import './Styles/CardSchoolarShip.css';

const CardSchoolarShip = ({ title, institute, status }) => {
  return (
    <DivButton className="CardSchoolarShip">
      <CardImg
        className="CardSchoolarShipImage"
        src="https://images.theconversation.com/files/3911/original/princeton.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
        alt="Image"
      />
      <CardBody>
        <CardTitle className="CardTitle">{title}</CardTitle>
        <CardSubtitle className="CardSubTitle">{institute}</CardSubtitle>
        <CardText className="CardStatus">{`Estado: ${status}`}</CardText>
      </CardBody>
    </DivButton>
  );
};

export default CardSchoolarShip;
