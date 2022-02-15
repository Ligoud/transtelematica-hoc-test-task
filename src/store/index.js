import { applyMiddleware, combineReducers, createStore } from "redux";

import createSagaMiddleware from "redux-saga";
// import { mySaga } from "../sagas";

import { category, user_actions, item, counter } from "./reducers";

const root = combineReducers({
  category: category.reducer,
  user_actions: user_actions.reducer,
  item: item.reducer,
  counter: counter.reducer,
});

const sagaMIddleWare = createSagaMiddleware();
const store = createStore(root, applyMiddleware(sagaMIddleWare));
// sagaMIddleWare.run(mySaga);
export default store;
