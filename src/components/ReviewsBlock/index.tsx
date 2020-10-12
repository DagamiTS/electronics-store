import React, { useState } from 'react';
// Bootstrap
import { Button, Col, Row } from 'react-bootstrap';
// Styles
import { Wrapper } from './ReviewsBlock.styles';
// Components
import ReviewItem from '../ReviewItem';
import FeedbackForm from '../FeedbackForm';

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
  const [ leaveFeedbackStatus, setLeaveFeedbackStatus ] = useState(false);

  const handleFeedbackStatus = () => setLeaveFeedbackStatus(true);

  return (
    <Row as={Wrapper}>
      <h2>Reviews</h2>
      <Col md={11} className='d-flex flex-column align-items-center m-auto'>
        {!leaveFeedbackStatus ?
          <Button variant='warning' size='lg' onClick={handleFeedbackStatus}>Leave a feedback</Button> :
          <FeedbackForm onCancel={() => setLeaveFeedbackStatus(false)} />
        }
        {!leaveFeedbackStatus && reviews && reviews.map(review => <ReviewItem key={review.id} review={review} />)}
      </Col>
    </Row>
  );
};

export default ReviewsBlock;