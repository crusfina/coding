import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './slider.css'
import { CardDeck } from 'react-bootstrap';

const Cards = (props) => {
    return (
        <div>
            <CardDeck>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require("../img/donut/donut1.jpg")} />
                <Card.Body>
                    <Card.Title>Chocolate</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                {/* <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup> */}
                <Card.Body>
                    <Button variant="outline-warning" href="#">Mua Ngay</Button>{' '}
                    <Button variant="outline-warning" href="#">Xem Chi Tiết</Button>{' '}
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require("../img/donut/donut2.jpg")} />
                <Card.Body>
                    <Card.Title>Pink</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                {/* <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup> */}
                <Card.Body>
                    <Button variant="outline-warning" href="#">Mua Ngay</Button>{' '}
                    <Button variant="outline-warning" href="#">Xem Chi Tiết</Button>{' '}
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require("../img/donut/donut3.jpg")} />
                <Card.Body>
                    <Card.Title>Sugar</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                {/* <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup> */}
                <Card.Body>
                    <Button variant="outline-warning" href="#">Mua Ngay</Button>{' '}
                    <Button variant="outline-warning" href="#">Xem Chi Tiết</Button>{' '}
                </Card.Body>
            </Card>
            </CardDeck>
        </div>
    );
};

export default Cards;