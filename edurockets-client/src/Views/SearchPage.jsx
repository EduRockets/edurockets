import React, { useState } from 'react';
import { Container, Col, Row, Button, Collapse } from 'reactstrap';

import CardResult from '../Components/CardResult';
import DivButton from '../Components/DivButton';

import robotCIcon from '../Assets/Icons/robot.svg';
import expandIcon from '../Assets/Icons/expand.svg';
import compressIcon from '../Assets/Icons/compress.svg';

import SignInLayout from '../Layouts/SignInLayout';

import './Styles/SearchPage.css';

const SearchPage = () => {
  const [isOpenCountry, setIsOpenCountry] = useState(true);
  const [isOpenLanguage, setIsOpenLanguage] = useState(true);
  const [isOpenStudyArea, setIsOpenStudyArea] = useState(true);
  const [isOpenDegree, setIsOpenDegree] = useState(true);
  const [isOpenHedge, setIsOpenHedge] = useState(true);

  const toggleCountry = () => setIsOpenCountry(!isOpenCountry);
  const toggleLanguage = () => setIsOpenLanguage(!isOpenLanguage);
  const toggleStudyArea = () => setIsOpenStudyArea(!isOpenStudyArea);
  const toggleDegree = () => setIsOpenDegree(!isOpenDegree);
  const toggleHedge = () => setIsOpenHedge(!isOpenHedge);

  const schoolarships = [
    {
      name: 'Nombre del Programa Para Títulos largos se usa esta distancia',
      institute: 'Nombre de la universidad',
      location: {
        country: 'Canada',
        state: 'Ottawa',
        lng: '0',
        lat: '0',
      },
      hedge: 30,
      modality: 'Virtual',
      date: new Date(2021, 5, 26),
    },
    {
      name: 'Nombre del Programa Para Títulos largos se usa esta distancia',
      institute: 'Nombre de la universidad',
      location: {
        country: 'Canada',
        state: 'Ottawa',
        lng: '0',
        lat: '0',
      },
      hedge: 30,
      modality: 'Virtual',
      date: new Date(2021, 5, 26),
    },
    {
      name: 'Nombre del Programa Para Títulos largos se usa esta distancia',
      institute: 'Nombre de la universidad',
      location: {
        country: 'Canada',
        state: 'Ottawa',
        lng: '0',
        lat: '0',
      },
      hedge: 30,
      modality: 'Virtual',
      date: new Date(2021, 5, 26),
    },
    {
      name: 'Nombre del Programa Para Títulos largos se usa esta distancia',
      institute: 'Nombre de la universidad',
      location: {
        country: 'Canada',
        state: 'Ottawa',
        lng: '0',
        lat: '0',
      },
      hedge: 30,
      modality: 'Virtual',
      date: new Date(2021, 5, 26),
    },
  ];

  return (
    <SignInLayout>
      <Container className="SearchPage">
        <Row className="SearchPageRobotContainer">
          <Col>
            <img className="SearchPageRobotIcon" alt="notification" src={robotCIcon} />
            <Button className="SearchPageButton">Búsqueda Personalizada</Button>
          </Col>
        </Row>

        <Row>
          <Col lg="3">
            <div className="SearchPageFilterContainer">
              <Row>
                <DivButton className="SearchPageFilterSelect" action={toggleCountry}>
                  <div>País</div>
                  <div>
                    <img
                      className="SearchPageFilterIcon"
                      alt=">"
                      src={isOpenCountry ? compressIcon : expandIcon}
                    />
                  </div>
                </DivButton>
                <Collapse isOpen={isOpenCountry}>
                  <DivButton className="SearchPageFilterItem">Alemania</DivButton>
                  <DivButton className="SearchPageFilterItem">Canadá</DivButton>
                  <DivButton className="SearchPageFilterItem">España</DivButton>
                  <DivButton className="SearchPageFilterItem">Estados Unidos</DivButton>
                  <DivButton className="SearchPageFilterItem">Inglaterra</DivButton>
                </Collapse>
              </Row>

              <Row>
                <div className="SearchPageFilterDivider" />
              </Row>

              <Row>
                <DivButton className="SearchPageFilterSelect" action={toggleLanguage}>
                  <div>Idioma</div>
                  <div>
                    <img
                      className="SearchPageFilterIcon"
                      alt=">"
                      src={isOpenLanguage ? compressIcon : expandIcon}
                    />
                  </div>
                </DivButton>
                <Collapse isOpen={isOpenLanguage}>
                  <DivButton className="SearchPageFilterItem">Alemán</DivButton>
                  <DivButton className="SearchPageFilterItem">Español</DivButton>
                  <DivButton className="SearchPageFilterItem">Inglés</DivButton>
                  <DivButton className="SearchPageFilterItem">Italiano</DivButton>
                </Collapse>
              </Row>

              <Row>
                <div className="SearchPageFilterDivider" />
              </Row>

              <Row>
                <DivButton className="SearchPageFilterSelect" action={toggleStudyArea}>
                  <div>Area de estúdio</div>
                  <div>
                    <img
                      className="SearchPageFilterIcon"
                      alt=">"
                      src={isOpenStudyArea ? compressIcon : expandIcon}
                    />
                  </div>
                </DivButton>
                <Collapse isOpen={isOpenStudyArea}>
                  <DivButton className="SearchPageFilterItem">
                    Artes, Diseño y Arquitectura
                  </DivButton>
                  <DivButton className="SearchPageFilterItem">Ciencias Sociales</DivButton>
                  <DivButton className="SearchPageFilterItem">
                    Negocios, Administración y Economía
                  </DivButton>
                  <DivButton className="SearchPageFilterItem">Salud y Medicina</DivButton>
                  <DivButton className="SearchPageFilterItem">Ingeniería y Tecnología</DivButton>
                  <DivButton className="SearchPageFilterItem">
                    Ciencias Naturales y Matemáticas
                  </DivButton>
                  <DivButton className="SearchPageFilterItem">Ciencias Computacionales</DivButton>
                  <DivButton className="SearchPageFilterItem">Derecho y Diplomacia</DivButton>
                  <DivButton className="SearchPageFilterItem">Agricultura y Alimentos</DivButton>
                  <DivButton className="SearchPageFilterItem">Turismo y Experiencias</DivButton>
                </Collapse>
              </Row>

              <Row>
                <div className="SearchPageFilterDivider" />
              </Row>

              <Row>
                <DivButton className="SearchPageFilterSelect" action={toggleDegree}>
                  <div>Grado académico</div>
                  <div>
                    <img
                      className="SearchPageFilterIcon"
                      alt=">"
                      src={isOpenDegree ? compressIcon : expandIcon}
                    />
                  </div>
                </DivButton>
                <Collapse isOpen={isOpenDegree}>
                  <DivButton className="SearchPageFilterItem">Licenciatura</DivButton>
                  <DivButton className="SearchPageFilterItem">Maestría</DivButton>
                  <DivButton className="SearchPageFilterItem">Doctorado</DivButton>
                  <DivButton className="SearchPageFilterItem">Especialización</DivButton>
                </Collapse>
              </Row>

              <Row>
                <div className="SearchPageFilterDivider" />
              </Row>

              <Row>
                <DivButton className="SearchPageFilterSelect" action={toggleHedge}>
                  <div>Tipo de cobertura</div>
                  <div>
                    <img
                      className="SearchPageFilterIcon"
                      alt=">"
                      src={isOpenHedge ? compressIcon : expandIcon}
                    />
                  </div>
                </DivButton>
                <Collapse isOpen={isOpenHedge}>
                  <DivButton className="SearchPageFilterItem">30%</DivButton>
                  <DivButton className="SearchPageFilterItem">50%</DivButton>
                </Collapse>
              </Row>
            </div>

            <Row>
              <Col className="SearchPageButtonContainer">
                <Button className="SearchPageButton">Aplicar filtro</Button>
              </Col>
            </Row>
          </Col>

          <Col>
            {schoolarships.map((schoolarship) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <CardResult
                  name={schoolarship.name}
                  location={schoolarship.location}
                  institute={schoolarship.institute}
                  hedge={schoolarship.hedge}
                  modality={schoolarship.modality}
                  date={schoolarship.date}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </SignInLayout>
  );
};

export default SearchPage;
