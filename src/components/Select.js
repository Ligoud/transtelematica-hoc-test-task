import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addUserAction } from "../store/actions/user_actions";
import "../css/select.css";

const Select = ({ setSelectedCategory, value }) => {
  const { categories = [] } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <select
      data-testid="categorySelect"
      value={value || "DEFAULT"}
      onChange={(e) => {
        setSelectedCategory(e.target.value);

        const { flags } = categories.find((el) => el.id === e.target.value);

        if (!!flags) return;
        dispatch(
          addUserAction({
            name: "ChangeCategorySelect",
            value: e.target.value,
          })
        );
      }}
    >
      <option disabled value="DEFAULT">
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
