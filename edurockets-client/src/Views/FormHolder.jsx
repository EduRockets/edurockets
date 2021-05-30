import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import EmptyLayout from '../Layouts/EmptyLayout';

import './Styles/FormHolder.css';

const FormHolder = ({ Form }) => {
  const [paso, setPaso] = useState(0);

  return (
    <EmptyLayout>
      <Container
        className={`FormHolder${
          paso == 1 ? ' FormHolderStep2' : paso == 2 ? ' FormHolderStep3' : ''
        }`}
        fluid
      >
        <Container className="FormHolderContainer">
          <Row>
            <Col lg="4">
              <Row className="FormHolderWelcome">
                <Col>¡Te damos la bienvenida!</Col>
              </Row>
              <div className="FormHolderDivider" />
              <Row>
                <Col>
                  <div className="FormHolderDescrpiton">
                    Crea tu perfil para conectar con las mejores universidades. Coloca tu nombre de
                    forma correcta ya que será el oficial de tus aplicaciones
                  </div>
                </Col>
              </Row>
            </Col>
            <Col />
            <Col lg="6" className="FormHolderForm">
              <Form setPaso={setPaso} paso={paso} />
            </Col>
          </Row>
        </Container>
      </Container>
    </EmptyLayout>
  );
};

export default FormHolder;
