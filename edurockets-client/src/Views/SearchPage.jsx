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
      uid: 'este es el uid',
      name: 'Beca Presidencial Concordia - Contabilidad',
      institute: 'Universidad de concordia',
      description:
        'Contadores destacados mantienen a las empresas a la vanguardia: resuelven problemas, desarrollan estrategias financieras sólidas y garantizan una buena salud fiscal. Si eres un gran triunfador con un apetito por el aprendizaje continuo, considéranos. Se unirá a un programa con reputación de graduados que logran excelentes resultados en los exámenes nacionales de contabilidad profesional.',
      modality: 'Presencial',
      studyArea: 'Negocios Administración y Economía',
      degree: 'Pregrado',
      dueDate: new Date(2021, 1, 10),
      duration: 5,
      banner: 'https://wallpaperaccess.com/full/1912152.jpg',
      photo:
        'https://d1bvpoagx8hqbg.cloudfront.net/originals/experiencia-en-la-universidad-concordia-canada-por-monika-024bc2c82e45deff1f1b0d344642d624.jpg',
      price: 16500,
      hedge: '100%',
      location: {
        country: 'Canada',
        state: 'Montreal',
        lng: '100000',
        lat: '9956',
      },
    },

    {
      uid: 'este es el uid',
      name: 'Licenciatura en Música en Escritura y Producción Contemporánea',
      institute: 'Berklee College of Music',
      description:
        'Los estudiantes que se especializan en escritura y producción contemporáneas estudian arreglos, composición, puntuación para medios, orquestación, técnicas de producción y prácticas de notación avanzada, y aprenden a aplicar estas habilidades y conceptos escribiendo y supervisando la producción de una amplia variedad de instrumentos, vocales, combinaciones acústicas y electrónicas, que van desde pequeños conjuntos hasta orquestas en situaciones de actuación en vivo y entornos de estudio de grabación. ',
      modality: 'Presencial',
      studyArea: 'Artes Diseño y Arquitectura',
      degree: 'Pregrado',
      dueDate: new Date(2021, 4, 10),
      duration: 4,
      banner: '',
      photo:
        'https://college.berklee.edu/sites/default/files/styles/scale_and_crop_16_9_large/public/d7/bcm/berklee-boston-campus-at-night.jpg?itok=ICRwn8Jm',
      price: 5000,
      hedge: '100%',
      location: {
        country: 'Estados Unidos',
        state: 'Boston',
        lng: '100000',
        lat: '9956',
      },
    },

    {
      uid: 'este es el uid',
      name: 'Gestion de riesgos y serguros',
      institute: 'University of Central Arkansas',
      description:
        'La especialización en Seguros y Gestión de Riesgos de la Universidad de Central Arkansas es uno de los programas de más rápido crecimiento en el país. Como único título en Administración de Riesgos y Seguros de Arkansas, este programa sirve como un recurso valioso para los servicios financieros y de seguros de la región. El programa de la UCA integra la teoría económica y los principios financieros con los seguros y la gestión de riesgos para preparar a los estudiantes para una variedad de carreras en la industria de los seguros y los servicios financieros.',
      modality: 'Presencial',
      studyArea: 'Negocios Administración y Economía',
      degree: 'Pregrado',
      dueDate: new Date(2021, 3, 31),
      duration: 1,
      banner: '',
      photo: 'https://talkbusiness.net/wp-content/uploads/2018/08/UCA-Image-WEB.jpg',
      price: 3500,
      hedge: '$7,000',
      location: {
        country: 'Estados Unidos',
        state: 'Conway',
        lng: '100000',
        lat: '9956',
      },
    },

    {
      uid: 'este es el uid',
      name: 'Producción cinematográfica (BFA)',
      institute: 'Universidad de concordia',
      description:
        'Contadores destacados mantienen a las empresas a la vanguardia: resuelven problemas, desarrollan estrategias financieras sólidas y garantizan una buena salud fiscal. Si eres un gran triunfador con un apetito por el aprendizaje continuo, considéranos. Se unirá a un programa con reputación de graduados que logran excelentes resultados en los exámenes nacionales de contabilidad profesional.',
      modality: 'Presencial',
      studyArea: 'Artes Diseño y Arquitectura',
      degree: 'Pregrado',
      dueDate: new Date(2021, 2, 1),
      duration: 3,
      banner: '',
      photo:
        'https://d1bvpoagx8hqbg.cloudfront.net/originals/experiencia-en-la-universidad-concordia-canada-por-monika-024bc2c82e45deff1f1b0d344642d624.jpg',
      price: 16500,
      hedge: '100%',
      location: {
        country: 'Canada',
        state: 'Montreal',
        lng: '100000',
        lat: '9956',
      },
    },
    {
      uid: 'este es el uid',
      name: 'International Student Merit Scholarship - Innovación y Emprendimiento',
      institute: 'University of Central Arkansas',
      description:
        'La especialización en Innovación y Emprendimiento de la Universidad de Central Arkansas le proporcionará el conocimiento y la experiencia creativos y prácticos que necesita para convertirse en un empresario exitoso o en un activo valioso en organizaciones corporativas, gubernamentales y sin fines de lucro en una variedad de campos.',
      modality: 'Presencial',
      studyArea: 'Negocios Administración y Economía',
      degree: 'Pregrado',
      dueDate: new Date(2021, 3, 31),
      duration: 1,
      banner: '',
      photo: 'https://talkbusiness.net/wp-content/uploads/2018/08/UCA-Image-WEB.jpg',
      price: 3500,
      hedge: '$7,000',
      location: {
        country: 'Estados Unidos',
        state: 'Conway',
        lng: '100000',
        lat: '9956',
      },
    },
    {
      uid: 'este es el uid',
      name: 'Agronegocios y Comercialización de Alimentos',
      institute: 'Lincoln University',
      description:
        'El título de Licenciatura en Agronegocios y Comercialización de Alimentos de Lincoln lo equipará con un sólido conocimiento aplicado de los conceptos comerciales centrales y las consideraciones comerciales únicas de la industria de producción primaria de miles de millones de dólares. Una población mundial en rápido crecimiento y las limitaciones de recursos finitos requieren un enfoque más inteligente del negocio de la producción y comercialización de alimentos. Asimismo, la creciente sofisticación y poder adquisitivo de los consumidores en todo el mundo significa una demanda creciente de una amplia gama de productos de alta calidad. Obtendrá una comprensión contextual de los sectores de la comercialización de alimentos y la agroindustria global para satisfacer esta demanda.',
      modality: 'Presencial',
      studyArea: 'Agricultura y Alimentos',
      degree: 'Pregrado',
      dueDate: new Date(2021, 7, 1),
      duration: 3,
      banner: '',
      photo:
        'https://www.ellucian.com/sites/default/files/styles/max_width_1920/public/uploads/images/2020/01/news-image-lincoln-university.png?itok=U_GbUwDB',
      price: 2381,
      hedge: '$7,142',
      location: {
        country: 'Nueva Zelanda',
        state: 'Lincoln',
        lng: '100000',
        lat: '9956',
      },
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
                <CardResult schoolarship={schoolarship} />
              );
            })}
          </Col>
        </Row>
      </Container>
    </SignInLayout>
  );
};

export default SearchPage;
