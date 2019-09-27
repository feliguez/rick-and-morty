import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroeControl from '../heroeControl/HeroeControl';
import Td from '../table/Td';
import Tr from '../table/Tr';
import './HeroeItem.css';

const HeroeItem = ({
  editHeroe,
  heroe,
  isRingUsed,
  removeHeroe,
  ringHeroe,
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
          <Td>
            <Link to={`/heroe-detail/${heroe.id}`}>{heroe.name}</Link>
          </Td>
          <Td>{heroe.race}</Td>
          <Td>{heroe.age}</Td>
          <Td>{heroe.weapon}</Td>
        </>
      )}
      <Td>
        <HeroeControl
          editHeroe={editHeroe}
          heroe={heroe}
          isRingUsed={isRingUsed}
          removeHeroe={removeHeroe}
          ringHeroe={ringHeroe}
          updatedHeroe={updatedHeroe}
          updateHeroe={updateHeroe}
        />
      </Td>
    </Tr>
  );
};

export default HeroeItem;
