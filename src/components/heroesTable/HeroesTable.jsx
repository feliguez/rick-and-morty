import React, { useContext } from 'react';
import Context from '../../Context';
import HeroeItem from '../heroeItem/HeroeItem';
import Table from '../table/Table';
import Tbody from '../table/Tbody';
import Th from '../table/Th';
import Tr from '../table/Tr';
import './HeroesTable.css';

const HeroesTable = () => {
  const state = useContext(Context);
  const { isRingUsed, heroesList } = state;

  return (
    <Table isRingUsed={isRingUsed}>
      <thead className="thead-light">
        <Tr>
          <Th>ID</Th>
          <Th>Nombre</Th>
          <Th>Raza</Th>
          <Th>Edad</Th>
          <Th>Arma</Th>
          <Th>acción</Th>
        </Tr>
      </thead>
      <Tbody>
        {heroesList.map((heroe, i) => (
          <HeroeItem heroe={heroe} key={i} heroeIndex={i} />
        ))}
      </Tbody>
    </Table>
  );
};

export default HeroesTable;
