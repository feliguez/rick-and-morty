import React from 'react';

const HeroeItem = ({ data }) => {
  const { name, race, age, weapon } = data;
  return (
    <tr className="heroes-row">
      <td>{name}</td>
      <td>{race}</td>
      <td>{age}</td>
      <td>{weapon}</td>
      <td>
        <div className="controls">
          <div>☠ Eliminar</div>
          <div>
            <span role="img" aria-label="ring">
              💍
            </span>{' '}
            Usar el anillo
          </div>
        </div>
      </td>
    </tr>
  );
};

export default HeroeItem;
