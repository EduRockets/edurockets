import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Row, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

import studentImage from '../Assets/Images/student.png';
import professionalImage from '../Assets/Images/professional.png';

import './Styles/CardSignUp.css';

export const CardSignUpStudent = () => {
  const history = useHistory();

  return (
    <div>
      <Card className="Card">
        <Row>
          <CardImg className="CardSignUpImage" src={studentImage} />
        </Row>
        <CardBody>
          <CardTitle className="CardTitle">
            Un despegue rápido <br /> que te lleve a las estrellas
          </CardTitle>

          <CardText className="CardSignUpText">
            <i>
              Estás por graduarte del colegio y listo <br /> para convertirte en quien deseas ser.
            </i>
          </CardText>
          <Button
            className="CardButton"
            onClick={() =>
              history.push({
                pathname: '/signup',
                userType: {
                  name: 'student',
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

export const CardSignUpProfessional = () => {
  const history = useHistory();

  return (
    <div>
      <Card className="Card">
        <Row>
          <CardImg className="CardSignUpImage" src={professionalImage} />
        </Row>
        <CardBody>
          <CardTitle className="CardTitle">
            Volar más alto <br />y más rápido
          </CardTitle>

          <CardText className="CardSignUpText">
            <i>
              Eres un profesional en busca de las mejores <br /> oportunidades laborales y
              académicas.
            </i>
          </CardText>
          <Button
            className="CardButton"
            onClick={() =>
              history.push({
                pathname: '/signup',
                userType: {
                  name: 'professional',
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
