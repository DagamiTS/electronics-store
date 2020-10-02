export type ItemInCart = {
  id: number,
  name: string,
  imageUrl: string,
  price: number
};

export const AddToCart = (obj: ItemInCart) => ({
  type: 'ADD_TO_CART',
  payload: obj
});

export const DeleteCartItem = (id: number) => ({
  type: 'DELETE_CART_ITEM',
  payload: id
});

export const PlusCartItem = (id: number) => ({
  type: 'PLUS_CART_ITEM',
  payload: id
});

export const MinusCartItem = (id: number) => ({
  type: 'MINUS_CART_ITEM',
  payload: id
});