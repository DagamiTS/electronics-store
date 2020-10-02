import axios from 'axios';

export type Electronics = Array<{
  id: number,
  imageUrl: string,
  name: string,
  price: number,
  rating: number,
  category: string,
  specification: Object,
  review: Array<{
    id: number,
    title: string,
    text: string,
    rating: number
  }>
}>;

export type Item = {
  id: number,
  imageUrl: string,
  name: string,
  price: number,
  rating: number,
  category: number,
  specification: Object,
  review: Array<{
    id: number,
    title: string,
    text: string,
    rating: number
  }>
};

export const fetchElectronics = (category: number | null, sortBy: { name: string, order: string }) => (dispatch: Function) => {
  axios.get(`http://localhost:3001/electronics?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.name}&_order=${sortBy.order}`)
    .then(({ data }) => dispatch(setElectronics(data)));
};

export const setElectronics = (items: Electronics) => ({
  type: 'SET_ELECTRONICS',
  payload: items,
});