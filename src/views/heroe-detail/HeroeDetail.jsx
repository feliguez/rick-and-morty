import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap';

const HeroeDetail = ({ heroes, match }) => {
  const [heroeItem, setHeroeItem] = useState({});

  useEffect(() => {
    const id = Number(match.params.id);
    const currentHeroe = heroes.find(heroe => heroe.id === id);
    setHeroeItem(currentHeroe);
  }, [match.params, heroes]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={4} className="text-left">
          <Link to="/">← Volver</Link>
          <Card>
            {console.log(heroes)}
            <Card.Img variant="top" src={heroeItem.avatar} />
            <Card.Body>
              <Card.Title>{heroeItem.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Raza: {heroeItem.race}</ListGroupItem>
              <ListGroupItem>Edad: {heroeItem.age} años</ListGroupItem>
              <ListGroupItem>Arma: {heroeItem.weapon}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Link to="/">← Volver</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStatetoProps = state => state.heroes;

export default connect(mapStatetoProps)(HeroeDetail);
