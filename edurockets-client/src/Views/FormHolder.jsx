import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import EmptyLayout from '../Layouts/EmptyLayout';

import '../Styles/FormHolder.css';

const FormHolder = ({ form }) => {
  return (
    <EmptyLayout>
      <Container className="FormHolder" fluid>
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
            <Col lg="2" />
            <Col lg="6" className="FormHolderForm">
              {form()}
            </Col>
          </Row>
        </Container>
      </Container>
    </EmptyLayout>
  );
};

export default FormHolder;
