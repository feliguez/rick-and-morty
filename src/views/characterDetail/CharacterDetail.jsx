import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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

import '../../components/characterItem/CharacterItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const CharacterDetail = props => {
  const dispatch = useDispatch();
  const characterItem = useSelector(store => store.characterGetReducer);

  useEffect(() => {
    dispatch(characterGetAsyncActionCreator(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const { data } = characterItem;

  return (
    <Container>
      <Row className="justify-content-md-center">
        {data ? (
          <Col sm={4} className="text-left">
            <Helmet>
              <title>{data.name} - Rick and Morty characters by Felipe</title>
            </Helmet>
            <Link to="/" className="character-back">
              <FontAwesomeIcon icon={faChevronLeft} /> volver
            </Link>
            <Card className="text-left">
              <div className="card-header">
                <img
                  src={data.image}
                  alt={data.name}
                  width="50"
                  className="card-img-top"
                />
                <div className="card-title">
                  <h5>{data.name}</h5>
                  <p>id: {data.id}</p>
                </div>
              </div>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="custom-list-group-item">
                  <span>Raza:</span> {data.species}
                </ListGroupItem>
                <ListGroupItem className="custom-list-group-item">
                  <span>Estado:</span> {data.status}
                </ListGroupItem>
                <ListGroupItem className="custom-list-group-item">
                  <span>Género:</span> {data.gender}
                </ListGroupItem>
                <ListGroupItem className="custom-list-group-item">
                  <span>Origen:</span> {data.origin.name}
                </ListGroupItem>
                <ListGroupItem className="custom-list-group-item">
                  <span>Ubicación:</span> {data.location.name}
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        ) : (
          <FontAwesomeIcon icon={faSpinner} pulse size="3x" />
        )}
      </Row>
    </Container>
  );
};

export default CharacterDetail;
