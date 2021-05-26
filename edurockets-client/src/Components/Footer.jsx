import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Col, Row, Container, Button } from 'reactstrap';

import facebookIcon from '@iconify-icons/bi/facebook';
import instagramIcon from '@iconify-icons/bi/instagram';
import whatsappIcon from '@iconify-icons/bi/whatsapp';

import { Icon } from '@iconify/react';

import '../Styles/Footer.css';

const Footer = () => (
  <>
    <Container className="Footer" fluid>
      <Container>
        <Row className="align-items-center">
          <Col lg="2">
            <img className="Isotipo" src="/Images/Isotipo.png" alt="edurockets" />
          </Col>
          <Col lg="3" className="TextContainer">
            <Row>
              <Col>
                <Link className="TermFooter">Acerca de</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link className="TermFooter">Noticias</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link className="TermFooter">Contacto</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link className="TermFooter">Centro de ayuda</Link>
              </Col>
            </Row>
          </Col>
          <Col lg="3" className="TextContainer">
            <Row>
              <Col>
                <Link className="TermFooter">Impacto</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link className="TermFooter">Nuestro equipo</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link className="TermFooter">Nuestros pasantes</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link className="TermFooter">Nuestros especialistas</Link>
              </Col>
            </Row>
          </Col>
          <Col lg="3" className="TextContainer">
            <Row>
              <Col>
                <Link className="TermFooter">Comunidad de apoyo</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link className="TermFooter">Comparte tu historia</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link className="TermFooter">Pasantías</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link className="TermFooter">Bolsa de trabajo</Link>
              </Col>
            </Row>
          </Col>
          <Col lg="1" className="TextContainer">
            ...
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="Divider" />
          </Col>
        </Row>

        <Row className="DownSectionContainer">
          <Col lg="6">
            <Link className="TermFooter">© 2021 Edu Rockets</Link>
            <Link className="TermFooter">Términos de uso</Link>
            <Link className="TermFooter">Política de Seguridad</Link>
          </Col>
          <Col lg="3" />
          <Col lg="3">
            <Icon className="SocialIconFooter" icon={facebookIcon} />
            <Icon className="SocialIconFooter" icon={instagramIcon} />
            <Icon className="SocialIconFooter" icon={whatsappIcon} />
          </Col>
        </Row>
      </Container>
    </Container>
  </>
);

export default Footer;
