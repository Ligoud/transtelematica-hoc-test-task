const types = {
  SET_ITEM: "SET_ITEM",
  ADD_ITEM: "ADD_ITEM",
  UPDATE_ITEM: "UPDATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
};

const setItem = (payload) => {
  return { type: types.SET_ITEM, payload };
};

const addItem = (payload) => {
  return { type: types.ADD_ITEM, payload };
};

const updateItem = (payload) => {
  return { type: types.UPDATE_ITEM, payload };
};

const deleteItem = (payload) => {
  return { type: types.DELETE_ITEM, payload };
};

export { types, setItem, addItem, updateItem, deleteItem };
