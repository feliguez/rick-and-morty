import React, { useContext } from 'react';
import Context from '../../Context';
import Table from '../table/Table';
import Tbody from '../table/Tbody';
import Td from '../table/Td';
import Th from '../table/Th';
import Tr from '../table/Tr';
import './HeroesTable.css';

const HeroesTable = () => {
  const state = useContext(Context);
  const { heroesList, isRingUsed } = state;

  return (
    <Table isRingUsed={isRingUsed}>
      <thead className="thead-light">
        <Tr>
          <Th>Nombre</Th>
          <Th>Raza</Th>
          <Th>Edad</Th>
          <Th>Arma</Th>
          <Th>acción</Th>
        </Tr>
      </thead>
      <Tbody>
        {heroesList.map((hero, i) => {
          return (
            <Tr key={i} isKill={hero.isKill} useRing={hero.useRing}>
              <Td>{hero.name}</Td>
              <Td>{hero.race}</Td>
              <Td>{hero.age}</Td>
              <Td>{hero.weapon}</Td>
              <Td>
                <div className="controls">
                  {!hero.isKill && (
                    <button
                      onClick={() => state.handleRing(i)}
                      disabled={isRingUsed}
                      className="btn btn-outline-primary"
                    >
                      <span role="img" aria-label="ring">
                        💍
                      </span>{' '}
                      Usar
                    </button>
                  )}
                  <button
                    onClick={() => state.handleKill(i)}
                    className={`btn ${
                      !hero.isKill
                        ? 'btn-outline-danger'
                        : 'btn-outline-success'
                    }`}
                  >
                    {hero.isKill ? (
                      ' Restaurar'
                    ) : (
                      <span role="img" aria-label="skull">
                        ☠ {'Eliminar'}
                      </span>
                    )}
                  </button>
                </div>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default HeroesTable;
