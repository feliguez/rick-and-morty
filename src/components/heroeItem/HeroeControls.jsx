import React from 'react';

const HeroeControls = () => {
  return (
    <div className="controls">
      <div>
        <span role="img" aria-label="skull">
          ☠
        </span>{' '}
        Eliminar
      </div>
      <div>
        <span role="img" aria-label="ring">
          💍
        </span>{' '}
        Usar el anillo
      </div>
    </div>
  );
};

export default HeroeControls;
