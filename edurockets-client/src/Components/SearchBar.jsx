import React, { useState } from 'react';
import { Col, Row, List } from 'reactstrap';

import { Icon } from '@iconify/react';
import searchIcon from '@iconify-icons/bi/search';

import DivButton from '../Components/DivButton';

import '../Styles/SearchBar.css';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="SearchBar">
      <div className="SearchBarContainer">
        <div />
        <DivButton
          action={() => {
            setIsOpen(!isOpen);
          }}
          className="SearchBarButton"
        >
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

        <DivButton className="Search">
          <Icon icon={searchIcon} />
        </DivButton>

        <div />
      </div>

      {/* <div className={`SearchBarPanelEnabled${isOpen ? '' : ' SearchBarPanelDiseable'}`}>
        <List type="unstyled">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
        </List>
        </div> */}
    </div>
  );
};

export default SearchBar;
