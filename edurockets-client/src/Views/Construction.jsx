import React from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import StandardLayout from '../Layouts/StandardLayout';

import '../Styles/Construction.css';

const Construction = () => {
  const history = useHistory();

  return (
    <StandardLayout>
      <Container className="Construction" fluid>
        <Container>
          <Row>
            <Col>
              <div className="Title">Estamos un paso del despegue</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="SubTitle">Nuestro sito web está en construcción.</div>
            </Col>
          </Row>
          <Row>
            <Col className="ButtonContainer">
              <Button
                className="Button"
                onClick={() => {
                  history.push('/');
                }}
              >
                Regresar al inicio
              </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <img
                className="Image"
                src="/Images/Construction-Background.svg"
                alt="En Construcción"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </StandardLayout>
  );
};

export default Construction;
