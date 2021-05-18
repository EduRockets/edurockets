import React from 'react';

const DivButton = ({ style, id, className, action, children, stopPropagation }) => {
  const act = (e) => {
    if (stopPropagation) e.stopPropagation();
    if (action) action();
  };

  return (
    <div
      style={style}
      id={id}
      className={className}
      role="button"
      tabIndex={0}
      onClick={act}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          act();
        }
      }}
    >
      {children}
    </div>
  );
};

export default DivButton;
