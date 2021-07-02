import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import StandardLayout from '../Layouts/StandardLayout';
import { CardSignUpStudent, CardSignUpProfessional } from '../Components/CardSignUp';

import './Styles/SignUpSwitch.css';

const SignUpSwitch = () => {
  return (
    <StandardLayout>
      <Container className="SignUpSwtich" fluid>
        <Container className="SignUpSwtichContainer">
          <Row>
            <Col>
              <div className="SignUpSwtichTitle">¿En qué podemos ayudarte?</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" lg="6">
              <CardSignUpStudent />
            </Col>

            <Col sm="12" lg="6">
              <CardSignUpProfessional />
            </Col>
          </Row>
        </Container>
      </Container>
    </StandardLayout>
  );
};

export default SignUpSwitch;
