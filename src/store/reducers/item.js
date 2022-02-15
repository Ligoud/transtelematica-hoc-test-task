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
        actions: [...state.actions, payload],
      };
    case types.UPDATE_ITEM: {
      const index = state.actions.findIndex((el) => el.id === payload.id);
      if (index === -1) return state;
      const updatedActions = [...state.actions];
      updatedActions[index] = payload;
      return {
        ...state,
        actions: updatedActions,
      };
    }
    case types.DELETE_ITEM: {
      const index = state.actions.findIndex((el) => el.id === payload.id);
      if (index === -1) return state;
      const updatedActions = [...state.actions].splice(index, 1);
      return {
        ...state,
        actions: updatedActions,
      };
    }
    default:
      return state;
      break;
  }
};

export { reducer, inititalState };
