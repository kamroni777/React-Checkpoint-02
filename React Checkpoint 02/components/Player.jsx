import React from 'react';
import { Card, Image, Badge } from 'react-bootstrap';

const Player = ({ 
  name = "Unknown Player", 
  team = "Unknown Team", 
  nationality = "Unknown", 
  jerseyNumber = 0, 
  age = 0, 
  imageUrl = "https://via.placeholder.com/150" 
}) => {
  return (
    <Card style={{ 
      width: '18rem', 
      margin: '15px', 
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s'
    }} className="player-card">
      <Card.Body>
        <Image 
          src={imageUrl} 
          alt={name} 
          roundedCircle 
          style={{ 
            width: '150px', 
            height: '150px', 
            objectFit: 'cover', 
            display: 'block', 
            margin: '0 auto 15px',
            border: '3px solid #f0f0f0'
          }} 
        />
        <Card.Title style={{ textAlign: 'center', color: '#333' }}>{name}</Card.Title>
        <Card.Text style={{ marginBottom: '5px' }}>
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text style={{ marginBottom: '5px' }}>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text style={{ marginBottom: '5px' }}>
          <strong>Jersey Number:</strong> 
          <Badge bg="primary" style={{ marginLeft: '5px' }}>#{jerseyNumber}</Badge>
        </Card.Text>
        <Card.Text>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;