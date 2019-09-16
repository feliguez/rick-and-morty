import React from 'react';

const HeroeControl = ({
  handleEdit,
  handleRemove,
  handleRing,
  handleUpdateHeroe,
  heroe,
  heroeIndex,
  isRingUsed,
  updateHeroe
}) => (
  <div className="controls">
    {!heroe.isKill && (
      <button
        onClick={() => handleRing(heroeIndex)}
        disabled={isRingUsed}
        className="btn btn-outline-primary"
      >
        <span role="img" aria-label="ring">
          💍
        </span>{' '}
        Usar
      </button>
    )}
    {heroe.editing ? (
      <button
        onClick={() => handleUpdateHeroe(updateHeroe)}
        className="btn btn-outline-success"
      >
        <span role="img" aria-label="pencil">
          💾
        </span>{' '}
        Guardar
      </button>
    ) : (
      <button
        onClick={() => handleEdit(heroeIndex)}
        className="btn btn-outline-secondary"
      >
        <span role="img" aria-label="pencil">
          ✏️
        </span>{' '}
        Editar
      </button>
    )}
    <button
      onClick={() => handleRemove(heroeIndex)}
      className="btn btn-outline-danger"
    >
      <span role="img" aria-label="skull">
        ☠ {'Remover'}
      </span>
    </button>
  </div>
);

export default HeroeControl;
