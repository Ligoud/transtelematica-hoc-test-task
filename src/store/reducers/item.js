import { types } from "../actions/item";

const inititalState = {
  items: [],
};

const reducer = (state = inititalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_ITEM:
      return {
        ...state,
        items: payload,
      };
    case types.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, payload],
      };
    case types.UPDATE_ITEM: {
      const index = state.items.findIndex((el) => el.id === payload.id);
      if (index === -1) return state;
      const updatedItems = [...state.items];
      updatedItems[index] = payload;
      return {
        ...state,
        items: updatedItems,
      };
    }
    case types.DELETE_ITEM: {
      const index = state.items.findIndex((el) => el.id === payload.id);
      if (index === -1) return state;
      const updatedItems = [...state.items].splice(index, 1);
      return {
        ...state,
        items: updatedItems,
      };
    }
    default:
      return state;
      break;
  }
};

export { reducer, inititalState };
