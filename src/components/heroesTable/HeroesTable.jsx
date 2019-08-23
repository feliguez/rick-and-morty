import React from 'react';
import { heroes } from '../../services/hero.services';
import HeroeItem from '../heroeItem/HeroItem';
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
        {heroes.map((hero, i) => {
          return <HeroeItem key={i} data={hero} />;
        })}
      </tbody>
    </table>
  );
};

export default HeroesTable;
