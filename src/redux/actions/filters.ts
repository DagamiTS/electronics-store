import { SortBy } from '../reducers/filters';

export const setCategory = (category: number | null) => ({
  type: 'SET_CATEGORY',
  payload: category,
});

export const setSortBy = ({ name, order }: SortBy) => ({
  type: 'SET_SORT_BY',
  payload: { name, order }
})