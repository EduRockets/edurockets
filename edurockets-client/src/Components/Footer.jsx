import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Col, Row, Container, Button } from 'reactstrap';

import facebookIcon from '@iconify-icons/bi/facebook';
import instagramIcon from '@iconify-icons/bi/instagram';
import whatsappIcon from '@iconify-icons/bi/whatsapp';

import { Icon, InlineIcon } from '@iconify/react';

import '../Styles/Footer.css';

const Footer = () => (
  <>
    <Container className="Footer" fluid>
      <Row>
        <Col>
          <img className="Isotipo" src="/Images/Isotipo.png" alt="video" />
        </Col>
        <Col>
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
        <Col>
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
        <Col>
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
        <Col>Banderas</Col>
      </Row>
      <Row>
        <Col>
          <div className="Divider" />
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <Link className="TermFooter">© 2021 Edu Rockets</Link>
          <Link className="TermFooter">Términos de uso</Link>
          <Link className="TermFooter">Política de Seguridad</Link>
        </Col>
        <Col lg="5" />
        <Col lg="3" className="SocialIconsFooter">
          <Icon icon={facebookIcon} />
          <Icon icon={instagramIcon} />
          <Icon icon={whatsappIcon} />
        </Col>
      </Row>
    </Container>
  </>
);

export default Footer;
