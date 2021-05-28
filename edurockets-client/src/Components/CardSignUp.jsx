import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

import '../Styles/CardSignUp.css';

const CardSignUp = ({ src, title, text, href }) => {
  const history = useHistory();

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
          <Button
            className="CardButton"
            onClick={() => {
              history.push(href);
            }}
          >
            Entrar
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardSignUp;
