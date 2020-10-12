import axios from 'axios';

export type Electronics = Array<Item>;

export type Item = {
  id: number,
  imageUrl: string,
  name: string,
  price: number,
  rating: number,
  category: number,
  specifications: {[key: string]: string},
  review: Array<{
    id: number,
    title: string,
    text: string,
    rating: number,
    name: string,
  }>
};

export const fetchElectronics = (category: number | null, sortBy: { name: string, order: string }) => (dispatch: Function) => {
  setLoadingFalse();
  axios.get(`http://localhost:3001/electronics?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.name}&_order=${sortBy.order}`)
    .then(({ data }) => dispatch(setElectronics(data)));
};

export const setElectronics = (items: Electronics) => ({
  type: 'SET_ELECTRONICS',
  payload: items,
});

export const setLoadingFalse = () => ({
  type: 'SET_LOADING_FALSE',
});