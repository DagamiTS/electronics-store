import React from 'react';
import { Col, Row } from 'react-bootstrap';
// Styles
import { Wrapper } from './ReviewItem.style';
// Components
import StarImage from '../StarImage';

type Props = {
  review: {
    id: number,
    rating: number,
    title: string,
    text: string,
    name: string,
  }
};

const ReviewItem: React.FC<Props> = ({ review }) => {
  const rating = [];

  for (let i = 0; i < Math.floor(review.rating); i++) {
    rating.push(2);
  }

  if (rating.length < 5) {
    for (let i = rating.length; i < 5; i++) {
      rating.push(0);
    }
  }

  return (
    <Col as={Wrapper} md={10}>
      <Row className='item'>
        <Col md={4}>
          <h5>{review.name}</h5>
          <div>{rating.map((val, i) => <StarImage key={i} val={val} />)}</div>
        </Col>
        <Col md={8}>
          <h5>{review.title}</h5>
          <p>{review.text}</p>
        </Col>
      </Row>
    </Col>
  );
};

export default ReviewItem;