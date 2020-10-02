import { Action } from './electronics';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr: Array<any>) => arr.reduce((sum: number, obj) => sum + obj.price, 0);

const cart = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const currentQuantity = !state.items[action.payload.id]
        ? [ action.payload ]
        : [ ...state.items[action.payload.id].quantity, action.payload ];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          quantity: currentQuantity,
          totalPrice: Math.round(getTotalPrice(currentQuantity) * 100) / 100,
        }
      }

      const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].quantity.length + sum, 0);
      const totalPrice = Math.round(Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0) * 100) / 100;

      return {
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'DELETE_CART_ITEM': {
      const { [action.payload]: itemToDelete, ...rest } = state.items;

      return {
        ...state,
        items: rest,
        totalPrice: Math.round((state.totalPrice - itemToDelete.totalPrice) * 100) / 100,
        totalCount: state.totalCount - itemToDelete.quantity.length,
      };
    }

    case 'PLUS_CART_ITEM': {
      const newQuantity = [
        ...state.items[action.payload].quantity,
        state.items[action.payload].quantity[0]
      ];
      const newState = {
        ...state.items,
        [action.payload]: {
          quantity: newQuantity,
          totalPrice: Math.round(getTotalPrice(newQuantity) * 100) / 100,
        }
      };

      const totalCount = Object.keys(newState).reduce((sum, key) => newState[key].quantity.length + sum, 0);
      const totalPrice = Math.round(Object.keys(newState).reduce((sum, key) => newState[key].totalPrice + sum, 0) * 100) / 100;

      return {
        ...state,
        items: newState,
        totalPrice,
        totalCount,
      };
    }

    case 'MINUS_CART_ITEM': {
      const oldQuantity = state.items[action.payload].quantity;
      const newQuantity = oldQuantity.length > 1 ? state.items[action.payload].quantity.splice(0, state.items[action.payload].quantity.length - 1) : oldQuantity;
      const newItems= {
        ...state.items,
        [action.payload]: {
          quantity: newQuantity,
          totalPrice: Math.round(getTotalPrice(newQuantity) * 100) / 100
        }
      };

      return {
        ...state,
        items: newItems,
        totalPrice: Math.round(Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0) * 100) / 100,
        totalCount: Object.keys(newItems).reduce((sum, key) => newItems[key].quantity.length + sum, 0)
      };
    }

    default:
      return state;
  }
};

export default cart;