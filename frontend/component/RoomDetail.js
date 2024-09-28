// RoomDetail.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const RoomDetail = ({ rooms, onRoomSelect }) => {
  return (
    <div> 
      <h1> Avilabile Room </h1>
    <Row className="mt-4">
      {rooms.map((room) => (
        <Col md={4} key={room.roomNumber}>
          <Card className="mb-4">
            <Card.Img variant="top" src={room.image} />
            <Card.Body>
              <Card.Title>{room.roomType}</Card.Title>
              <Card.Text>
                <strong>Room Number:</strong> {room.roomNumber}<br />
                <strong>Price:</strong> ${room.price}<br />
                <strong>Description:</strong> {room.description}
              </Card.Text>
              <Button variant="primary" onClick={() => onRoomSelect(room)}>
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default RoomDetail;