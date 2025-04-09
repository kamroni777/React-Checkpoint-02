import React from 'react';
import Player from './Player';
import players from '../players';
import { Container, Row } from 'react-bootstrap';

const PlayersList = () => {
  return (
    <Container style={{ padding: '20px 0' }}>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;