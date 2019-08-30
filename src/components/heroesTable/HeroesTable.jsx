import React, { Component } from 'react';
import { heroes } from '../../services/hero.services';
import Table from '../table/Table';
import Tbody from '../table/Tbody';
import Th from '../table/Th';
import Tr from '../table/Tr';
import Td from '../table/Td';

import './HeroesTable.css';

class HeroesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroesList: heroes,
      isRingUsed: false
    };
  }

  handleKill = i => {
    const { heroesList } = this.state;
    let newHeroesList = heroesList.slice(); // crea una copia del array original
    const isKill = newHeroesList[i].isKill ? false : true;
    newHeroesList[i].isKill = isKill;
    const selected = newHeroesList.splice(i, 1); // elimina un elemento por posición del índice
    newHeroesList = newHeroesList.concat(selected); // une un array con otro
    this.setState({ heroesList: newHeroesList });
  };

  handleRing = i => {
    const { heroesList } = this.state;
    const newHeroesList = heroesList.slice();
    const useRing = newHeroesList[i].useRing ? false : true;
    newHeroesList[i].useRing = useRing;
    this.setState({ heroesList: newHeroesList, isRingUsed: true });
  };

  render() {
    const { heroesList, isRingUsed } = this.state;
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
                      <button onClick={() => this.handleKill(i)}>
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
                          onClick={e => this.handleRing(i, e)}
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
  }
}

export default HeroesTable;
