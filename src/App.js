import React, { useEffect, useCallback, useState } from "react";
import { hot } from "react-hot-loader";
import { useSelector, useDispatch } from "react-redux";
//
import categoriesMock from "./mocks/categories.json";
import elementsMock from "./mocks/elements.json";
//
import { setCategory } from "./store/actions/category";
import { setItem } from "./store/actions/item";

import Autocomplete from "./components/Autocomplete";

const App = () => {
  const { categories = [] } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");

  // Запросы к "Серверу"
  useEffect(() => {
    dispatch(setCategory(categoriesMock));
    dispatch(setItem(elementsMock));
  }, []);

  return (
    <div className="App">
      <select
        onChange={(e) => {
          setSelectedCategory(e.target.value);
        }}
      >
        {categories.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
      <Autocomplete category={selectedCategory} />

      <br />
    </div>
  );
};

export default hot(module)(App);
