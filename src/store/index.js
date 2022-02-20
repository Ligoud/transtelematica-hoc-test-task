import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";

import { category, user_actions, item } from "./reducers";

const root = combineReducers({
  category: category.reducer,
  user_actions: user_actions.reducer,
  item: item.reducer,
});

const store = createStore(root, applyMiddleware(thunk));

export default store;
