import React from 'react';
import HeroeControls from './HeroeControls';
import Tr from '../table/Tr';
import Td from '../table/Td';

import './HeroeItem.css';

const HeroeItem = ({ data }) => {
  const { name, race, age, weapon } = data;
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{race}</Td>
      <Td>{age}</Td>
      <Td>{weapon}</Td>
      <Td>
        <HeroeControls />
      </Td>
    </Tr>
  );
};

export default HeroeItem;
