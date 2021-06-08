import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row, List } from 'reactstrap';

import { Icon } from '@iconify/react';
import searchIcon from '@iconify-icons/bi/search';

import DivButton from '../Components/DivButton';

import './Styles/SearchBar.css';

const SearchBar = () => {
  const history = useHistory();

  const [show, setShow] = useState(false);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false);
        }
      };

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef}>
      <div className="SearchBarContainer">
        <DivButton
          className="SearchBarButton"
          action={() => {
            setShow(true);
          }}
        >
          <div className="SearchBarLabel">País</div>
          <div>¿A donde deseas ir?</div>
        </DivButton>

        <div className="Divider" />

        <DivButton
          className="SearchBarButton"
          action={() => {
            setShow(true);
          }}
        >
          <div className="SearchBarLabel">Idioma</div>
          <div>¿Qué idioma te interesa?</div>
        </DivButton>

        <div className="Divider" />

        <DivButton
          className="SearchBarButton"
          action={() => {
            setShow(true);
          }}
        >
          <div className="SearchBarLabel">Grado Académico</div>
          <div>¿Qué grado deseas obtener?</div>
        </DivButton>

        <div className="Divider" />

        <DivButton
          className="SearchBarButton"
          action={() => {
            setShow(true);
          }}
        >
          <div className="SearchBarLabel">Area de Estudio</div>
          <div>¿Cuál es tu interés?</div>
        </DivButton>

        <div className="Divider" />

        <DivButton
          className="SearchBarButton"
          action={() => {
            setShow(true);
          }}
        >
          <div className="SearchBarLabel">Tipo de Cobertura</div>
          <div>Programas y becas disponibles</div>
        </DivButton>

        <DivButton
          action={() => {
            history.push('/search');
          }}
          className="SearchIconContainer"
        >
          <Icon className="SearchIcon" icon={searchIcon} />
        </DivButton>
      </div>
      {/* <div className="SearchBarPanel">
        <div className={show ? 'SearchBarPanelEnabled' : 'SearchBarPanelDiseabled'}>
          <Row> v </Row>
          <Row> A </Row>
          <Row> v </Row>
          <Row> A </Row>
          <Row> v </Row>
          <Row> A </Row>
          <Row> v </Row>
          <Row> A </Row>
          <Row> v </Row>
          <Row> A </Row>
          <Row> v </Row>
          <Row> A </Row>
        </div>
      </div> */}
    </div>
  );
};

export default SearchBar;
