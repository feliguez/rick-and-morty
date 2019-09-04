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
      <Tbody>
        <Tr>
          <Th>Nombre</Th>
          <Th>Raza</Th>
          <Th>Edad</Th>
          <Th>Arma</Th>
          <Th>acción</Th>
        </Tr>
        {heroesList.map((hero, i) => {
          return (
            <Tr key={i} isKill={hero.isKill} useRing={hero.useRing}>
              <Td>{hero.name}</Td>
              <Td>{hero.race}</Td>
              <Td>{hero.age}</Td>
              <Td>{hero.weapon}</Td>
              <Td>
                <div className="controls">
                  <div>
                    <button onClick={() => state.handleKill(i)}>
                      {hero.isKill ? (
                        ' Restaurar'
                      ) : (
                        <span role="img" aria-label="skull">
                          ☠ {'Eliminar'}
                        </span>
                      )}
                    </button>
                  </div>
                  <div>
                    {!hero.isKill && (
                      <button
                        onClick={() => state.handleRing(i)}
                        disabled={isRingUsed}
                      >
                        <span role="img" aria-label="ring">
                          💍
                        </span>{' '}
                        Usar el anillo
                      </button>
                    )}
                  </div>
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
