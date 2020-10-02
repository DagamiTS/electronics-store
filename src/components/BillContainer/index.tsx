import React from 'react';
import { Col } from 'react-bootstrap';
import { Wrapper } from './BillContainer.styles';

type Props = {
  totalPrice: number,
  totalCount: number
};

const BillContainer: React.FC<Props> = ({ totalPrice, totalCount }) => {
  return (
    <Col as={Wrapper} md={3} className='d-flex flex-column justify-content-between align-items-center bill-container'>
      <p>{totalCount} items in the cart</p>
      <h3>{totalPrice} $</h3>
      <button>BUY</button>
    </Col>
  );
};

export default BillContainer;