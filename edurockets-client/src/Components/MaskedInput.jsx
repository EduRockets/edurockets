import React from 'react';
import { Input } from 'reactstrap';
import { default as MI } from 'react-text-mask';

const MaskedInput = (props) => {
  const { className, mask, guide, name, id, onChange, value, placeholder, valid, invalid } = props;

  return (
    <MI
      className={className}
      mask={mask}
      guide={guide}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      valid={valid}
      invalid={invalid}
      render={(ref, prps) => <Input innerRef={ref} {...prps} />}
    />
  );
};

export default MaskedInput;
