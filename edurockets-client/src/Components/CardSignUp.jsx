import React from 'react';
import {
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

import '../Styles/CardSignUp.css';

const CardSignUp = ({ src, title, text }) => {
  return (
    <div>
      <Card className="Card">
        <Row className="CardImageContainer">
          <CardImg className="CardImage" src={src} />
        </Row>
        <CardBody>
          <CardTitle className="CardTitle">{title}</CardTitle>

          <CardText className="CardText">
            <i>{text}</i>
          </CardText>
          <Button className="CardButton">Entrar</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardSignUp;
