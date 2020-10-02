import React from 'react';
import { useSelector } from 'react-redux';
// Bootstrap
import { Container, Row } from 'react-bootstrap';
// Components
import CartItem from '../../components/CartItem';
import BillContainer from '../../components/BillContainer';
// Types
import { RootState } from '../../redux/reducers';

const Cart: React.FC = () => {
  const { items, totalPrice, totalCount } = useSelector((state: RootState) => state.cart);

  const addedProducts = Object.keys(items).map(key => items[key].quantity[0]);

  return (
    <Container fluid style={{ minHeight: '65vh' }}>
      <Container>
        <h1>Cart</h1>
        <Row>
          <div className='col-md-9'>
            {addedProducts.map(obj => <CartItem key={obj.id}
                                                totalPrice={items[obj.id].totalPrice}
                                                totalCount={items[obj.id].quantity.length}
                                                {...obj} />)}
          </div>
          <BillContainer totalPrice={totalPrice} totalCount={totalCount} />
        </Row>
      </Container>
    </Container>
  );
};

export default Cart;