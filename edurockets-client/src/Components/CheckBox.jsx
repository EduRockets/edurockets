import React, { useState } from 'react';
import { Input } from 'reactstrap';

import './Styles/CheckBox.css';

const Checked = () => {};

const CheckBox = ({ value, label }) => {
  const [checked, setChecked] = useState();

  const toggleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="CheckBoxContainer" onClick={toggleChange}>
      <div className="CheckBox">
        <Input
          type="checkbox"
          clasname="CheckBoxChecked"
          checked={checked}
          onClick={toggleChange}
        />
      </div>
      <div className="CheckBoxLabel">{label}</div>
    </div>
  );
};

export default CheckBox;
