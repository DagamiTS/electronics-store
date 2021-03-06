import React from 'react';
import { Link } from 'react-router-dom';
// Bootstrap
import { Button, Card, Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
// Images
import commentSvg from '../../assets/img/comment.svg';
import StarImage from '../StarImage';
// Types
import { Item } from '../../redux/actions/electronics';
import { ItemInCart } from '../../redux/actions/cart';
// Styles
import { Wrapper } from './CardItem.styles';

type Props = {
  item: Item,
  onAddToCart: (obj: ItemInCart) => void
};

const CartItem: React.FC<Props> = ({ item, onAddToCart }) => {
  const rating = [];

  for (let i = 0; i < Math.floor(item.rating); i++) {
    rating.push(2);
  }

  if (item.rating % 1 === 0.5) {
    rating.push(1);
  }

  if (rating.length < 5) {
    for (let i = rating.length; i < 5; i++) {
      rating.push(0);
    }
  }

  const handleAddToCart = () => {
    const obj = {
      id: item.id, name: item.name, imageUrl: item.imageUrl, price: item.price
    }
    onAddToCart(obj);
  };

  return (
    <Col as={Wrapper} xs={10} sm={6} md={5} lg={4} xl={3}>
      <Card>
        <Card.Img variant="top"
                  src={item.imageUrl} style={{ height: '248px' }} />
        <Card.Body>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 150, hide: 200 }}
            overlay={
              <Tooltip id="button-tooltip">
                {item.name}
              </Tooltip>
            }
          >
            <Card.Title as={Link} to={`/item/${item.id}`}>{item.name}</Card.Title>
          </OverlayTrigger>
          <Row className="justify-content-between mb-3">
            <span className="ml-2">{rating.map((val, i) => <StarImage key={i} val={val} />)}</span>
            <span className="mr-2 commentBlock"><Link to={`/item/${item.id}/reviews`}><img src={commentSvg}
                                                                              alt="comment icon" />{item.review.length}</Link></span>
          </Row>
          <Row className="justify-content-between">
            <span className="ml-2 price">{item.price} ₴</span>
            <Button variant="danger" onClick={handleAddToCart} className="mr-2">Add to cart</Button>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CartItem;