import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'reactstrap';

import DivButton from '../Components/DivButton';

import facebookIcon from '@iconify-icons/bi/facebook';
import instagramIcon from '@iconify-icons/bi/instagram';
import whatsappIcon from '@iconify-icons/bi/whatsapp';

import usaIcon from '../Assets/Icons/usa.svg';
import mxIcon from '../Assets/Icons/mx.svg';
import hnIcon from '../Assets/Icons/hn.svg';

import { Icon } from '@iconify/react';

import './Styles/Footer.css';

const Footer = () => (
  <>
    <div className="DivFooterWave" />
    <Container className="Footer" fluid>
      <Container>
        <Row className="align-items-center">
          <Col lg="2">
            <img className="Isotipo" src="/Images/Isotipo.png" alt="edurockets" />
          </Col>
          <Col lg="2" className="TextContainer">
            <Row>
              <Col>
                <Link to={{}} className="TermFooter">
                  Acerca de
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={{}} className="TermFooter">
                  Noticias
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={{}} className="TermFooter">
                  Contacto
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={{}} className="TermFooter">
                  Centro de ayuda
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg="3" className="TextContainer">
            <Row>
              <Col>
                <Link to={{}} className="TermFooter">
                  Impacto
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={{}} className="TermFooter">
                  Nuestro equipo
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={{}} className="TermFooter">
                  Nuestros pasantes
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={{}} className="TermFooter">
                  Nuestros especialistas
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg="3" className="TextContainer">
            <Row>
              <Col>
                <Link to={{}} className="TermFooter">
                  Comunidad de apoyo
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={{}} className="TermFooter">
                  Comparte tu historia
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={{}} className="TermFooter">
                  Pasantías
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={{}} className="TermFooter">
                  Bolsa de trabajo
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg="2" className="TextContainer">
            <Row className="FooterFlagIconContaier">
              <DivButton
                className="FooterFlagIcon"
                style={{ backgroundImage: `url(${usaIcon})` }}
              />
              <DivButton className="FooterFlagIcon" style={{ backgroundImage: `url(${mxIcon})` }} />
              <DivButton className="FooterFlagIcon" style={{ backgroundImage: `url(${hnIcon})` }} />
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="FooterDivider" />
          </Col>
        </Row>

        <Row className="DownSectionContainer">
          <Col lg="6">
            <Link to={{}} className="TermFooter">
              ©2021 EduRockets
            </Link>
            <Link to={{}} className="TermFooter">
              Términos de uso
            </Link>
            <Link to={{}} className="TermFooter">
              Política de Seguridad
            </Link>
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
