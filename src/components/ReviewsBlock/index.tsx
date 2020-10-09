import React from 'react';
// Bootstrap
import { Button, Col, Row } from 'react-bootstrap';
// Styles
import { Wrapper } from './ReviewsBlock.styles';
// Components
import ReviewItem from '../ReviewItem';

type Props = {
  reviews: Array<{
    id: number,
    title: string,
    text: string,
    rating: number,
    name: string,
  }> | undefined,
};

const ReviewsBlock: React.FC<Props> = ({ reviews }) => {
  return (
    <Row as={Wrapper}>
      <h2>Reviews</h2>
      <Col md={11} className='d-flex flex-column align-items-center m-auto'>
        <Button variant='warning' size='lg'>Left a feedback</Button>
        {reviews && reviews.map(review => <ReviewItem key={review.id} review={review} />)}
      </Col>
    </Row>
  );
};

export default ReviewsBlock;