import React, { useEffect, useState } from 'react';
import { useParams, Link, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
// Bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap';
// Components
import SpecificationsBlock from '../../components/SpecificationsBlock';
import ReviewsBlock from '../../components/ReviewsBlock';
// Types
import { Item } from '../../redux/actions/electronics';
// Styles
import { StyledBlockNames, mainInfoBlock } from './ItemPage.styles';
// Actions
import { AddToCart } from '../../redux/actions/cart';

const blockNames: Array<string> = [ 'Everything about the product', 'Specifications', 'Reviews' ];

const ItemPage: React.FC = () => {
  const dispatch = useDispatch();
  const { id }: { id: string } = useParams();
  const [ item, setItem ] = useState<Item | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/electronics?id=${id}`)
      .then(({ data }) => {
        setItem(data[0]);
      })
  }, [ id ]);

  const handleAddToCart = () => {
    if (item) {
      const obj = {
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        price: item.price,
      };
      dispatch(AddToCart(obj));
    }
  };

  return (
    <Container>
      <Row as={StyledBlockNames}>
        {blockNames.map((blockName, i) => <Col key={i} as={Link}
                                               to={blockName === 'Everything about the product' ? `/item/${id}` : `/item/${id}/${blockName.toLowerCase()}`}
                                               className='text-center'>{blockName}</Col>)}
      </Row>

      <Row as={mainInfoBlock} className='justify-content-around'>
        <Col md={5}><Col md={12}><img src={item?.imageUrl} alt="Product"
                                      style={{ width: '100%', height: '100%' }} /></Col></Col>
        <Col md={7}>
          <Col md={12} className='d-flex flex-column justify-content-between align-items-center text-center'>
            <h3>{item && item.name}</h3>
            <h2>{item && item.price} $</h2>
            <Button variant='danger' size='lg' onClick={handleAddToCart}>Add to Cart</Button>
          </Col>
        </Col>
      </Row>

      <Switch>
        <Route exact path={`/item/${id}`}>
          <SpecificationsBlock specifications={item?.specifications} />
          <ReviewsBlock reviews={item?.review} />
        </Route>
        <Route path={`/item/${id}/specifications`}>
          <SpecificationsBlock specifications={item?.specifications} />
        </Route>
        <Route path={`/item/${id}/reviews`}>
          <ReviewsBlock reviews={item?.review} />
        </Route>
      </Switch>
    </Container>
  );
};

export default ItemPage;