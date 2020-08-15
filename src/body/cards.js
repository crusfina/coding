import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./slider.css";
import { CardDeck, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardWrapper = (props) => {
    console.log(props.cardData);
  let Render = props.cardData.map(creatCard);
  function creatCard(item) {
      let badge = null;
    if (item.badgeCard === 'HOT') 
    badge = <h3><Badge variant="danger">HOT</Badge></h3> ;
    else if (item.badgeCard=== 'NEW') 
    badge =  <h3><Badge variant="danger">NEW</Badge></h3> ;

    return (
      <Card style={{ width: "18rem" }}>
        <div className="badge">
            {badge}
        </div>
        <Card.Img variant="top" src={item.imgCard} />
        <Card.Body>
    <Card.Title>{item.titleCard}</Card.Title>
          <Card.Text>{item.textCard}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Button variant="outline-warning" href="#">
            Mua Ngay
          </Button>{" "}
          <Link to={`/product/${item.id}`}><Button variant="outline-warning">
            Xem Chi Tiết
          </Button></Link>
        </Card.Body>
      </Card>
    );
  }
  return (
    <div>
      <CardDeck>{Render}</CardDeck>
    </div>
  );
};

export default CardWrapper;
