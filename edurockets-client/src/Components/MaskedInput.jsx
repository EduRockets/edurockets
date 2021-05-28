import React from 'react';
import { Input } from 'reactstrap';
import { deafult as MI } from 'react-text-mask';

const MaskedInput = (props) => {
  const { mask, guide, name, id, onChange, value, placeholder, valid, invalid, className } = props;

  return (
    <MI
      mask={mask}
      guide={guide}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      valid={valid}
      invalid={invalid}
      render={(ref, prs) => <Input className={className} innerRef={ref} {...prs} />}
    />
  );
};

export default MaskedInput;
