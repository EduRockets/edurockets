import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row, List } from 'reactstrap';

import { Icon } from '@iconify/react';
import searchIcon from '@iconify-icons/bi/search';

import DivButton from '../Components/DivButton';

import './Styles/SearchBar.css';

const SearchBar = () => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="SearchBarContainer">
      <DivButton className="SearchBarButton">
        <div className="SearchBarLabel">País</div>
        <div>¿A donde deseas ir?</div>
      </DivButton>

      <div className="Divider" />

      <DivButton className="SearchBarButton">
        <div className="SearchBarLabel">Idioma</div>
        <div>¿Qué idioma te interesa?</div>
      </DivButton>

      <div className="Divider" />

      <DivButton className="SearchBarButton">
        <div className="SearchBarLabel">Grado académico</div>
        <div>¿Qué grado deseas obtener?</div>
      </DivButton>

      <div className="Divider" />

      <DivButton className="SearchBarButton">
        <div className="SearchBarLabel">Area de estudio</div>
        <div>¿Cuál es tu interés?</div>
      </DivButton>

      <div className="Divider" />

      <DivButton className="SearchBarButton">
        <div className="SearchBarLabel">Tipo de cobertura</div>
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
  );
};

export default SearchBar;
