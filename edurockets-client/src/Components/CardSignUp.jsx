import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Row, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

import './Styles/CardSignUp.css';

const CardSignUp = ({ src, title, text, href, userType }) => {
  const history = useHistory();

  return (
    <div>
      <Card className="Card">
        <Row>
          <CardImg className="CardSignUpImage" src={src} />
        </Row>
        <CardBody>
          <CardTitle className="CardTitle">{title}</CardTitle>

          <CardText className="CardText">
            <i>{text}</i>
          </CardText>
          <Button
            className="CardButton"
            onClick={() =>
              history.push({
                pathname: '/signup',
                userType: {
                  name: userType,
                },
              })
            }
          >
            Entrar
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardSignUp;
