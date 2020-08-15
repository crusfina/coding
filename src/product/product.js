import React from "react";
import './product.css'
import { Breadcrumb, Card, Button } from "react-bootstrap";
import CardWrapper from '../body/cards.js'
import {cardData} from '../data/data'
import { useParams } from "react-router-dom";
function Product() {
    const {id } = useParams();
  return (
      <>
    <div className='breadcrumb-fix'>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>
    <div className='card-container'>
        <div className='card-fix'>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={require("../img/donut/donut1.jpg")} />
            </Card>
            <div style={{ marginLeft: '15px'}}>
                <h3>{cardData[id - 1].titleCard}</h3>
                <h4>20.000</h4>
                <Button variant="outline-warning" className='btn-outline-mystyle'>MUA NGAY</Button>{' '}
            </div>
        </div>
    </div>
    <div className='body-fix'>
        <h2>Cho ngày thêm tươi</h2>
        <p>Lớp trà oolong đã man mát, nhưng sẽ vị càng thêm vị khi có hương bưởi cùng những tép bưởi mọng nước đi kèm - cho bạn 1 cách thưởng thức đầy thú vị. Cùng đánh thức vị giác, khởi động 1 ngày tươi tắn cùng hương vị mới lạ này nhé!</p>
    </div>
    <div>
        <h3 style={{ textAlign: 'center'}}>Có thể bạn thích</h3>
        <CardWrapper cardData={cardData}></CardWrapper>
    </div>
    </>
  );
}

export default Product;
