import React from 'react';

const Tr = props => {
  return <tr className="heroes-row">{props.children}</tr>;
};

export default Tr;
