const inititalState = {
  counter: 0,
};
const reducer = (state = inititalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
      break;
  }
};

export { reducer };
