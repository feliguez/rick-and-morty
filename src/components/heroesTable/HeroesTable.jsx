import React from 'react';
import { heroes } from '../../services/hero.services';
import HeroeItem from '../heroeItem/HeroeItem';
import Table from '../table/Table';
import Tbody from '../table/Tbody';
import Th from '../table/Th';
import Tr from '../table/Tr';

import './HeroesTable.css';

const HeroesTable = () => {
  return (
    <Table>
      <Tbody>
        <Tr>
          <Th>Nombre</Th>
          <Th>Raza</Th>
          <Th>Edad</Th>
          <Th>Arma</Th>
          <Th>acción</Th>
        </Tr>
        {heroes.map((hero, i) => {
          return <HeroeItem key={i} data={hero} />;
        })}
      </Tbody>
    </Table>
  );
};

export default HeroesTable;
