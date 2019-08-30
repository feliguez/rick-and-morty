import React from 'react';

const Tr = props => {
  return (
    <tr
      className={`heroes-row ${props.isKill ? 'isKill' : ''} ${
        props.useRing ? 'useRing' : ''
      }`}
    >
      {props.children}
    </tr>
  );
};

export default Tr;
