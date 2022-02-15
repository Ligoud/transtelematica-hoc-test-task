import { types } from "../actions/category";

const initialState = {
  categories: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_CATEGORY:
      return {
        ...state,
        categories: payload,
      };
    case types.ADD_CATEGORY:
      return {
        ...state,
        actions: [...state.actions, payload],
      };
    case types.UPDATE_CATEGORY: {
      const index = state.actions.findIndex((el) => el.id === payload.id);
      if (index === -1) return state;
      const updatedActions = [...state.actions];
      updatedActions[index] = payload;
      return {
        ...state,
        actions: updatedActions,
      };
    }
    case types.DELETE_CATEGORY: {
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
}

export { reducer, initialState };
