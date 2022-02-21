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
        categories: [...state.categories, payload],
      };
    case types.UPDATE_CATEGORY: {
      const index = state.categories.findIndex((el) => el.id === payload.id);
      if (index === -1) return state;
      const updatedCategories = [...state.categories];
      updatedCategories[index] = payload;
      return {
        ...state,
        categories: updatedCategories,
      };
    }
    case types.DELETE_CATEGORY: {
      const index = state.categories.findIndex((el) => el.id === payload.id);
      if (index === -1) return state;
      const updatedCategories = [...state.categories].splice(index, 1);
      return {
        ...state,
        categories: updatedCategories,
      };
    }
    default:
      return state;
      break;
  }
}

export { reducer, initialState };
