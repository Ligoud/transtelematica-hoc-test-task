const types = {
  SET_CATEGORY: "SET_CATEGORY",
  ADD_CATEGORY: "ADD_CATEGORY",
  UPDATE_CATEGORY: "UPDATE_CATEGORY",
  DELETE_CATEGORY: "DELETE_CATEGORY",
};

const setCategory = (payload) => {
  return { type: types.SET_CATEGORY, payload };
};

const addCategory = (payload) => {
  return { type: types.ADD_CATEGORY, payload };
};

const updateCategory = (payload) => {
  return { type: types.UPDATE_CATEGORY, payload };
};

const deleteCategory = (payload) => {
  return { type: types.DELETE_CATEGORY, payload };
};

export { types, setCategory, addCategory, updateCategory, deleteCategory };
