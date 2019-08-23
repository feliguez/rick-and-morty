import React from 'react';
import HeroeItem from '../heroeItem/HeroItem';
import { heroes } from './heroes';
import './HeroesTable.css';

const HeroesTable = () => {
  return (
    <table className="heroes-table">
      <tbody>
        <tr className="heroes-row">
          <th>Nombre</th>
          <th>Raza</th>
          <th>Edad</th>
          <th>Arma</th>
          <th>acción</th>
        </tr>
        {heroes.map(e => {
          return (
            <HeroeItem
              key={e.name}
              name={e.name}
              race={e.race}
              age={e.age}
              weapon={e.weapon}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default HeroesTable;
