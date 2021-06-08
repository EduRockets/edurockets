import React, { useState } from 'react';
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from 'reactstrap';
import Dropzone from 'react-dropzone';

import SignInLayout from '../Layouts/SignInLayout';
import videoImage from '../Assets/Images/Temporal/helperResourceVideoImage.svg';

import { Icon, InlineIcon } from '@iconify/react';
import uploadIcon from '@iconify-icons/bi/upload';
import uploadFileIcon from '../Assets/Icons/uploadFile.svg';

import DivButton from '../Components/DivButton';

import './Styles/HelpResource.css';

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div>
      <iframe
        width="100%"
        height="600"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

const HelpResource = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Modal className="HelpResourceModal" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Cargar Archivo</ModalHeader>
        <ModalBody>
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <div className="HelpResourceModalContainer">
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <DivButton>
                      <Row>
                        <Col>
                          <img
                            className="HelpResourceModalImage"
                            src={uploadFileIcon}
                            alt="upload"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="HelpResourceModalTitle">
                          Haz click o arrastra y suelta el archivo para cargarlo
                        </Col>
                      </Row>
                      <Row>
                        <Col>Asegurate de cargar el archivo correcto</Col>
                      </Row>
                    </DivButton>
                  </div>
                </section>
                <Button onClick={toggle} className="HelpResourceModalButton">
                  Subir archivos
                </Button>
              </div>
            )}
          </Dropzone>
        </ModalBody>
      </Modal>
      <SignInLayout>
        <Container className="HelpResource">
          <Row>
            <Col>
              {/* https://www.youtube.com/watch?v=94RAJ_jskzo&ab_channel=EduRockets */}
              <YoutubeEmbed embedId="94RAJ_jskzo" />
            </Col>
          </Row>

          <Row>
            <div className="HelpResourceTitle">Como preparar un ensayo ganador</div>
          </Row>

          <Row>
            <div>
              Aprende a desarrollar ensayos que cumplan con los estándares establecidos por las
              mejores universidades. Sigue las pautas estructurales proporcionadas por nuestros
              especialistas y conviértete en un experto en plasmar tus ideas.{' '}
            </div>
          </Row>

          <Row className="HelpResourceContainer">
            <Col>
              <Button className="HelpResourceButtonExample">Ver Ejemplo</Button>
              <Button className="HelpResourceButtonUpload" onClick={toggle}>
                <Icon className="HelpResourceButtonIcon" icon={uploadIcon} />
                Cargar Archivo
              </Button>
            </Col>
          </Row>
        </Container>
      </SignInLayout>
    </>
  );
};

export default HelpResource;
