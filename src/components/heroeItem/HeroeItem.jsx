import React, { useState } from 'react';
import HeroeControl from '../heroeControl/HeroeControl';
import Td from '../table/Td';
import Tr from '../table/Tr';
import './HeroeItem.css';

const HeroeItem = ({
  heroe,
  heroeIndex,
  removeHeroe,
  ringHeroe,
  isRingUsed,
  editHeroe,
  updateHeroe
}) => {
  const [updatedHeroe, setUpdatedHeroe] = useState({
    id: heroe.id,
    name: heroe.name,
    race: heroe.race,
    age: heroe.age,
    weapon: heroe.weapon,
    isKill: heroe.isKill,
    useRing: heroe.useRing
  });

  const handleOnChangeInput = event => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;
    setUpdatedHeroe({ ...updatedHeroe, [name]: value });
  };

  return (
    <Tr isKill={heroe.isKill} useRing={heroe.useRing}>
      {heroe.editing ? (
        <>
          <Td>{heroe.id}</Td>
          <Td>
            <input
              onChange={handleOnChangeInput}
              value={updatedHeroe.name}
              type="text"
              name="name"
              className="form-control"
              placeholder="Sam"
            />
          </Td>
          <Td>
            <input
              onChange={handleOnChangeInput}
              value={updatedHeroe.race}
              type="text"
              name="race"
              className="form-control"
              placeholder="Hobbit"
            />
          </Td>
          <Td>
            <input
              onChange={handleOnChangeInput}
              value={updatedHeroe.age}
              type="number"
              name="age"
              className="form-control"
              placeholder="30"
            />
          </Td>
          <Td>
            <input
              onChange={handleOnChangeInput}
              value={updatedHeroe.weapon}
              type="text"
              name="weapon"
              className="form-control"
              placeholder="Puño"
            />
          </Td>
        </>
      ) : (
        <>
          <Td>{heroe.id}</Td>
          <Td>{heroe.name}</Td>
          <Td>{heroe.race}</Td>
          <Td>{heroe.age}</Td>
          <Td>{heroe.weapon}</Td>
        </>
      )}
      <Td>
        <HeroeControl
          heroe={heroe}
          heroeIndex={heroeIndex}
          isRingUsed={isRingUsed}
          updateHeroe={updateHeroe}
          updatedHeroe={updatedHeroe}
          removeHeroe={removeHeroe}
          ringHeroe={ringHeroe}
          editHeroe={editHeroe}
        />
      </Td>
    </Tr>
  );
};

export default HeroeItem;
