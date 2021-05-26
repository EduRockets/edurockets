import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row, Container, Button } from 'reactstrap';
import StandardLayout from '../Layouts/StandardLayout';

import '../Styles/Landing.css';

const Landing = () => {
  const history = useHistory();

  const redirect = () => {
    history.push('/underConstruction');
  };

  return (
    <StandardLayout>
      <Container id="FirstSectionLanding" fluid>
        <Container>
          <Row>
            <div className="DivWave" />
            <Col sm="12" lg="6">
              <Row>
                <Col>
                  <div className="FirstSectionText">
                    Te facilitamos el proceso de <br />
                    <i style={{ color: '#F81735' }}>buscar, aplicar y entrar</i>
                    <br />a las mejores universidades <br />
                    en el extranjero.
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    className="LandingFirstButton"
                    onClick={() => {
                      history.push('/signup');
                    }}
                  >
                    Listo para alcanzar mis sueños
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg="6" />
          </Row>
        </Container>
      </Container>

      <Container id="SecondSectionLanding">
        <Row>
          <Col>
            <p className="MisionTitleLanding">
              NUESTRA MISIÓN <br />
              <b style={{ color: '#F81735' }}>Propulsar tus sueños</b> de estudiar <br /> y trabajar
              en el <b style={{ color: '#F81735' }}>extranjero</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg="3" />
          <Col sm="12" lg="6">
            <p className="SecondSectionText">
              En EduRockets te ayudamos a cumplir con todos los requisitos para aplicar a las
              mejores universidades del extranjero, haciendo el proceso fácil y sencillo.
            </p>
          </Col>
          <Col lg="3" />
        </Row>
        <Row>
          <Col>
            <div className="LandingImageVideo">
              <img className="ImageVideo" src="/Images/Raul.png" alt="video" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="DivWave DivSecondWave Bottom-Auto" />
      <Container id="ThirdSectionLanding" fluid>
        <Container className="WavePaddingContainer">
          <Row>
            <Col lg="6" />
            <Col sm="12" lg="6">
              <div className="LandingTitleThirdSection">¿QUÉ NECESITAS?</div>
            </Col>
          </Row>
          <Row>
            <Col lg="6" />
            <Col sm="12" lg="6">
              <img src="/Images/subrayado1.svg" alt="-" />
            </Col>
          </Row>
          <Row style={{ alignItems: 'center' }}>
            <Col sm="12" lg="6">
              <img
                className="LandingImageThirdSection"
                src="/Images/Estudiante.png"
                alt="estudiante"
              />
            </Col>
            <Col sm="12" lg="6">
              <Row>
                <Col>
                  <div className="LandingSubTitleThirdSection">ESTUDIANTE</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="LandingH3TitleThirdSection">
                    Un despegue rápido <br /> que te lleve a las estrellas
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <i style={{ fontSize: '1rem' }}>
                    Estás por graduarte del colegio <br /> y listo para convertirte en <br /> quien
                    deseas ser.
                  </i>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    className="LandingSecondButton"
                    onClick={() => {
                      redirect();
                    }}
                  >
                    Listo para Alcanzar mis sueños
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ alignItems: 'center' }}>
            <Col sm="12" lg="6" style={{ textAlign: 'end' }}>
              <Row>
                <Col>
                  <div className="LandingSubTitleThirdSection">PROFESIONAL</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="LandingH3TitleThirdSection">Volar más alto y más rápido</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <i style={{ fontSize: '1rem' }}>
                    Eres un profesional que busca <br /> de mejores oportunidades <br /> laborales y
                    académicas.
                  </i>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    className="LandingSecondButton"
                    onClick={() => {
                      redirect();
                    }}
                  >
                    Listo para Alcanzar mis sueños
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col sm="12" lg="6">
              <img
                className="LandingImageThirdSection LandingSecondImageThirdSection"
                src="/Images/Profesional.png"
                alt="profesional"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <div className="DivWave DivThirdWave Bottom-Auto" />
      <Container id="FourthSectionLanding">
        <Row>
          <Col sm="12" lg="6">
            <div className="LandingTitleThirdSection">BENEFICIOS</div>
          </Col>
          <Col lg="6" />
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <img src="/Images/subrayado2.svg" alt="-" />
          </Col>
          <Col lg="6" />
        </Row>
        <Row>
          <Col sm="12">
            <div className="LandingBenefitContainer">
              <img className="LandingNumberBenefitContainer" src="/Images/1.png" alt="numero 1" />
              <div style={{ margin: '0 20px' }}>
                Más de <b>1000 programas y becas</b> <br /> universitarias disponibles
              </div>
              <img
                className="LandingImageBenefitContainer"
                src="/Images/Icon1.png"
                alt="beneficio 1"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <div className="LandingBenefitContainer">
              <img
                className="LandingImageBenefitContainer"
                src="/Images/Icon2.png"
                alt="beneficio 2"
              />
              <div style={{ margin: '0 20px' }}>
                Uso de <b>inteligencia artificial</b> para <br />
                recomendarte los mejores programas <br /> universitarios.
              </div>
              <img className="LandingNumberBenefitContainer" src="/Images/2.png" alt="numero 2" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <div className="LandingBenefitContainer">
              <img className="LandingNumberBenefitContainer" src="/Images/3.png" alt="numero 3" />
              <div style={{ margin: '0 20px' }}>
                <b>Nuestros especialistas</b> te ayudan a crear
                <br /> una aplicación ganadora.
              </div>
              <img
                className="LandingImageBenefitContainer"
                src="/Images/Icon3.png"
                alt="beneficio 3"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <div className="LandingBenefitContainer">
              <img
                className="LandingImageBenefitContainer"
                src="/Images/Icon4.png"
                alt="beneficio 4"
              />
              <div style={{ margin: '0 20px' }}>
                Aplica simultáneamente a las
                <br /> <b>mejores</b> universidades.
              </div>
              <img className="LandingNumberBenefitContainer" src="/Images/4.png" alt="numero 4" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <div className="LandingBenefitContainer">
              <img className="LandingNumberBenefitContainer" src="/Images/5.png" alt="numero 5" />
              <div style={{ margin: '0 20px' }}>
                Accede a <b>descuentos especiales</b> en <br /> nuestra red universitaria.
              </div>
              <img
                className="LandingImageBenefitContainer"
                src="/Images/Icon5.png"
                alt="beneficio 5"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <div className="LandingBenefitContainer">
              <img
                className="LandingImageBenefitContainer"
                src="/Images/Icon6.png"
                alt="beneficio 6"
              />
              <div style={{ margin: '0 20px' }}>
                <b>Te asesoramos</b> en temas migratorios para que <br /> tengas un viaje seguro y
                sin estrés tu nueva <br /> vida.
              </div>
              <img className="LandingNumberBenefitContainer" src="/Images/6.png" alt="numero 6" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <div className="LandingBenefitContainer">
              <img className="LandingNumberBenefitContainer" src="/Images/7.png" alt="numero 7" />
              <div style={{ margin: '0 20px' }}>
                <b>¿Necesitas financiamiento?</b>
                <br /> Te conectamos de manera directa con <br /> nuestros partners.
              </div>
              <img
                className="LandingImageBenefitContainer"
                src="/Images/Icon7.png"
                alt="beneficio 7"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container id="FifthSectionLanding" fluid>
        <div className="DivWave DivFourthWave Bottom-Auto" />
        <Container>
          <Row className="align-items-center">
            <Col lg="2" />
            <Col sm="12" lg="4">
              <Row>
                <Col className="SabiasQueTitle">¿Sabías qué?</Col>
              </Row>
              <Row>
                <Col className="SabiasQueTextBox">
                  Un profesional en Canada tiene un ingreso <br />
                  promedio de más de{' '}
                  <b className="SabiasQueText">
                    {' '}
                    50.000 USD anuales, <br />
                    400% superior{' '}
                  </b>{' '}
                  al promedio de Latinoamérica.{' '}
                </Col>
              </Row>
            </Col>
            <Col sm="12" lg="6">
              <img id="imageWave" src="/Images/SabiasQue.png" alt="Sabías que" />
            </Col>
          </Row>
        </Container>
      </Container>

      <div className="DivFifthWave" />
      <Container id="SixthSectionLanding" fluid>
        <Container>
          <Row>
            <Col>
              <div className="LandingImageVideo">
                <img className="LandingVideo" src="/Images/Raul.png" alt="video" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="DivSixthWave" />

      <Container id="SeventhSectionLanding" fluid>
        <Container>
          <Row>
            <Col sm="12" lg="6" />
            <Col sm="12" lg="6">
              <Row>
                <Col>
                  <i className="LandingRocketTitle">
                    ¿Listo para <br /> el despegue?
                  </i>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    className="LandingRocketButton"
                    onClick={() => {
                      redirect();
                    }}
                  >
                    Listo para alcanzar mis sueños
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

      <div className="DivSeventhWave" />
    </StandardLayout>
  );
};

export default Landing;
