import React from 'react';
// Bootstrap
import { Col, Row } from 'react-bootstrap';
// Styles
import { Wrapper } from './CartItem.styles';
// Images
import minusSvg from '../../assets/img/minus.svg';
import plusSvg from '../../assets/img/plus.svg';
import deleteIconSvg from '../../assets/img/deleteIcon.svg';
// Types
import { ItemInCart } from '../../redux/actions/cart';
import { useDispatch } from 'react-redux';
// Actions
import { DeleteCartItem } from '../../redux/actions/cart';
import { PlusCartItem } from '../../redux/actions/cart';
import { MinusCartItem } from '../../redux/actions/cart';

type Props = ItemInCart & { totalCount: number, totalPrice: number };

const CartItem: React.FC<Props> = ({id, name, imageUrl, price, totalCount, totalPrice }) => {
  const dispatch = useDispatch();
  const onDeleteCartItem = () => dispatch(DeleteCartItem(id));
  const onPlusCartItem = () => dispatch(PlusCartItem(id));
  const onMinusCartItem = () => dispatch(MinusCartItem(id));

  return (
    <Wrapper className='cart-item-container'>
        <Row>
          <Col md={3}>
            <img
              src={imageUrl}
              alt="photo" className="float-left photo" style={{ height: '160px', width: '160px' }} />
          </Col>
          <Col md={9} className='text-center d-flex flex-column justify-content-center'>
            <h5>{name}</h5>
            <div className='d-flex flex-row justify-content-between'>
              <h4>{totalPrice} $</h4>
              <div className="items-quantity">
                <img src={minusSvg} onClick={onMinusCartItem} alt="Minus item button" />
                <span>{totalCount}</span>
                <img src={plusSvg} onClick={onPlusCartItem} alt="Plus item button" />
              </div>
              <button onClick={onDeleteCartItem}><img src={deleteIconSvg} alt="Delete icon" />delete</button>
            </div>
          </Col>
        </Row>
    </Wrapper>
  );
};

export default CartItem