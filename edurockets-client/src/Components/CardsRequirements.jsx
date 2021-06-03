import React, { useState } from 'react';
import { Row, Col, Button, CardImg, CardBody, CardTitle } from 'reactstrap';

import PassportImage from '../Assets/Images/requirements/passport.svg';
import RequestLetterImage from '../Assets/Images/requirements/requestLetter.svg';
import TestImage from '../Assets/Images/requirements/test.svg';
import CurriculumImage from '../Assets/Images/requirements/curriculum.svg';
import UniversityFormImage from '../Assets/Images/requirements/universityForm.svg';
import PersonalReferencesImage from '../Assets/Images/requirements/personalReferences.svg';
import InterestFormImage from '../Assets/Images/requirements/interestForm.svg';
import ExtracurricularActivitiesImage from '../Assets/Images/requirements/extracurricularActivities.svg';

import checkedIcon from '../Assets/Icons/checked.svg';
import pendingIcon from '../Assets/Icons/pending.svg';

import './Styles/CardsRequirements.css';

const CardRequirement = ({ requirements }) => {
  const infoRequirements = [
    {
      name: 'Pasaporte | ID',
      image: PassportImage,
    },
    {
      name: 'Carta de Solicitud',
      image: RequestLetterImage,
    },
    {
      name: 'Ensayo',
      image: TestImage,
    },
    {
      name: 'Curriculum',
      image: CurriculumImage,
    },
    {
      name: 'Formulario Universitario',
      image: UniversityFormImage,
    },
    {
      name: 'Referencias Personales',
      image: PersonalReferencesImage,
    },
    {
      name: 'Formulario de Intereses',
      image: InterestFormImage,
    },
    {
      name: 'Actividades Extracurriculares',
      image: ExtracurricularActivitiesImage,
    },
  ];

  return infoRequirements.map((requirement, index) => {
    return (
      <div
        key={requirement.key}
        className={`CardRequirement ${
          requirements[Object.keys(requirements)[index]].status !== 1
            ? ''
            : 'CardRequirementChecked'
        }`}
      >
        <CardImg className="CardRequirementImage" src={requirement.image} alt="Image" />
        <CardBody>
          <Row>
            <Col>
              <CardTitle className="CardRequirementTitle">{requirement.name}</CardTitle>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className={
                  requirements[Object.keys(requirements)[index]].status !== 1
                    ? 'CardRequirementButton'
                    : 'CardRequirementButtonChecked'
                }
              >
                Recurso de ayuda
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className={
                  requirements[Object.keys(requirements)[index]].status !== 1
                    ? 'CardRequirementButton'
                    : 'CardRequirementButtonChecked'
                }
              >
                Ver Ejemplos
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className={
                  requirements[Object.keys(requirements)[index]].status !== 1
                    ? 'CardRequirementButton'
                    : 'CardRequirementButtonChecked'
                }
              >
                {requirement.name == 'Formulario Universitario' ||
                requirement.name == 'Formulario de Intereses' ||
                requirement.name == 'Actividades Extracurriculares' ? (
                  <>Llenar Documento</>
                ) : (
                  <>Cargar Documento</>
                )}
              </Button>
            </Col>
            <Col sm="2" lg="2">
              {requirements[Object.keys(requirements)[index]].status !== 1 ? (
                <img className="CardRequirementIcon" src={pendingIcon} />
              ) : (
                <img className="CardRequirementIcon" src={checkedIcon} />
              )}
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  });
};

export default CardRequirement;
