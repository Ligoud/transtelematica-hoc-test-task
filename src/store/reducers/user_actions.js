import { types } from "../actions/user_actions";

const inititalState = {
  actions: [],
};

const reducer = (state = inititalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_USER_ACTIONS: {
      const copy = [...state.actions];
      const objectToPush = {
        id: 0,
        eventName: payload.name,
        eventValue: payload.value,
      };
      if (!!copy.length) objectToPush.id = copy[copy.length - 1].id + 1;

      copy.push(objectToPush);
      return {
        ...state,
        actions: copy,
      };
    }
    case types.UPDATE_USER_ACTIONS: {
      const index = state.actions.findIndex((el) => el.id === payload.id);
      if (index === -1) return state;
      const updatedActions = [...state.actions];
      updatedActions[index] = payload;
      return {
        ...state,
        actions: updatedActions,
      };
    }
    case types.DELETE_USER_ACTIONS: {
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
