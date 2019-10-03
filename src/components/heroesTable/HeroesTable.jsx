import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { characterGellAllAsyncActionCreator } from '../../store/actions/getAllCharacter.actions';
import HeroeItem from '../heroeItem/HeroeItem';
import Table from '../table/Table';
import Tbody from '../table/Tbody';
import Th from '../table/Th';
import Tr from '../table/Tr';
import './HeroesTable.css';

const HeroesTable = () => {
  const dispatch = useDispatch();
  const characters = useSelector(store => {
    return store.characterGetAllReducer.data;
  });

  useEffect(() => {
    debugger;
    dispatch(characterGellAllAsyncActionCreator());
  }, [dispatch]);
  return (
    <Table>
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
        {characters.map((heroe, i) => (
          <HeroeItem heroe={heroe} heroeIndex={i} key={i} />
        ))}
      </Tbody>
    </Table>
  );
};

export default HeroesTable;
