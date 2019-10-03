import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './CharacterItem.scss';

const CharacterItem = ({ character }) => {
  return (
    <Card className="text-left">
      <div className="card-header">
        <img
          src={character.image}
          alt={character.name}
          width="300"
          height="300"
          className="card-img-top"
        />
        <div className="card-title">
          <h5>{character.name}</h5>
          <p>id: {character.id}</p>
        </div>
      </div>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="custom-list-group-item">
          <span>Raza:</span> {character.species}
        </ListGroupItem>
        <ListGroupItem className="custom-list-group-item">
          <span>Estado:</span> {character.status}
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Link to={`/character/${character.id}`}>
          ver detalle <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CharacterItem;
