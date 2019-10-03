import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { characterGetAsyncActionCreator } from '../../store/actions/getCharacter.actions';
import { Link } from 'react-router-dom';
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap';

const HeroeDetail = props => {
  const dispatch = useDispatch();
  const heroeItem = useSelector(store => store.characterGetReducer);

  useEffect(() => {
    dispatch(characterGetAsyncActionCreator(props.match.params.id));
    console.log(heroeItem, props);
  }, [dispatch, heroeItem, props]);

  const { data } = heroeItem;
  return (
    data && (
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={4} className="text-left">
            <Link to="/">← Volver</Link>
            <Card>
              <Card.Img variant="top" src={heroeItem.image} />
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
    )
  );
};

export default HeroeDetail;
