import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addUserAction } from "../store/actions/user_actions";

const Select = ({ setSelectedCategory }) => {
  const { categories = [] } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <select
      onChange={(e) => {
        setSelectedCategory(e.target.value);
        dispatch(
          addUserAction({
            name: "ChangeCategorySelect",
            value: e.target.value,
          })
        );
      }}
    >
      <option disabled selected value>
        {" -- Выберите категорию -- "}
      </option>

      {categories.map((el) => (
        <option key={el.id} value={el.id}>
          {el.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
