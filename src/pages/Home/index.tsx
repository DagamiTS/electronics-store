import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Bootstrap
import { Container, Row } from 'react-bootstrap';
// Components
import Slider from '../../components/Slider';
import CardItem from '../../components/CardItem';
import SortByPopup from '../../components/SortByPopup';
// Styles
import { Wrapper } from './Home.styles';
// Types
import { RootState } from '../../redux/reducers';
import { SortBy } from '../../redux/reducers/filters';
import { ItemInCart } from '../../redux/actions/cart';
import { Item } from '../../redux/actions/electronics';
// Actions
import { fetchElectronics } from '../../redux/actions/electronics';
import { setSortBy } from '../../redux/actions/filters';
import { AddToCart } from '../../redux/actions/cart';

const sortItems: Array<{ name: string, order: string }> = [
  { name: 'rating', order: 'desc' },
  { name: 'price', order: 'desc' },
  { name: 'name', order: 'asc' },
];

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.electronics.items);
  const { category, sortBy } = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    dispatch(fetchElectronics(category, sortBy));
  }, [ category, sortBy ]);

  const onSelectSortType = (type: SortBy) => {
    dispatch(setSortBy(type));
  };

  const onAddToCart = (obj: ItemInCart) => dispatch(AddToCart(obj));

  return (
    <Wrapper>
      <Slider />
      <main>
        <Container>
          <Row className="justify-content-between categoryName">
            <h2>All Products</h2>
            <SortByPopup activeSortType={sortBy.name} items={sortItems} onClickSortType={onSelectSortType} />
          </Row>
          <Row>
            {items ? items.map((item: Item) => <CardItem key={item.id} item={item} onAddToCart={onAddToCart} />) : null}
          </Row>
        </Container>
      </main>
    </Wrapper>
  );
};

export default Home;