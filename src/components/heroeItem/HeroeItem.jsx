import React, { useContext, useState } from 'react';
import Context from '../../Context';
import HeroeControl from '../heroeControl/HeroeControl';
import Td from '../table/Td';
import Tr from '../table/Tr';
import './HeroeItem.css';

const HeroeItem = ({ heroe, heroeIndex }) => {
  const state = useContext(Context);
  const {
    isRingUsed,
    handleEdit,
    handleRing,
    handleRemove,
    handleUpdateHeroe
  } = state;

  const [updateHeroe, setUpdateHeroe] = useState({
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
    setUpdateHeroe({ ...updateHeroe, [name]: value });
  };

  return (
    <Tr isKill={heroe.isKill} useRing={heroe.useRing}>
      {heroe.editing ? (
        <>
          <Td>{heroe.id}</Td>
          <Td>
            <input
              onChange={handleOnChangeInput}
              value={updateHeroe.name}
              type="text"
              name="name"
              className="form-control"
              placeholder="Sam"
            />
          </Td>
          <Td>
            <input
              onChange={handleOnChangeInput}
              value={updateHeroe.race}
              type="text"
              name="race"
              className="form-control"
              placeholder="Hobbit"
            />
          </Td>
          <Td>
            <input
              onChange={handleOnChangeInput}
              value={updateHeroe.age}
              type="number"
              name="age"
              className="form-control"
              placeholder="30"
            />
          </Td>
          <Td>
            <input
              onChange={handleOnChangeInput}
              value={updateHeroe.weapon}
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
          handleEdit={handleEdit}
          handleRemove={handleRemove}
          handleRing={handleRing}
          handleUpdateHeroe={handleUpdateHeroe}
          heroe={heroe}
          heroeIndex={heroeIndex}
          isRingUsed={isRingUsed}
          updateHeroe={updateHeroe}
        />
      </Td>
    </Tr>
  );
};

export default HeroeItem;
