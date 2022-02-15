const types = {
  SET_USER_ACTIONS: "SET_USER_ACTIONS",
  ADD_USER_ACTIONS: "ADD_USER_ACTIONS",
  UPDATE_USER_ACTIONS: "UPDATE_USER_ACTIONS",
  DELETE_USER_ACTIONS: "DELETE_USER_ACTIONS",
};

const setUserAction = (payload) => {
  return { type: types.SET_USER_ACTIONS, payload };
};

const addUserAction = (payload) => {
  return { type: types.ADD_USER_ACTIONS, payload };
};

const updateUserAction = (payload) => {
  return { type: types.UPDATE_USER_ACTIONS, payload };
};

const deleteUserAction = (payload) => {
  return { type: types.DELETE_USER_ACTIONS, payload };
};

export {
  types,
  setUserAction,
  addUserAction,
  updateUserAction,
  deleteUserAction,
};
