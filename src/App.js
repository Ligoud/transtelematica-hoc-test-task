import React, { useEffect, useCallback, useState } from "react";
import { hot } from "react-hot-loader";
import { useSelector, useDispatch } from "react-redux";
//
import categoriesMock from "./mocks/categories.json";
import elementsMock from "./mocks/elements.json";
//
import Autocomplete from "./components/Autocomplete";
import Select from "./components/Select";
//
import { setCategory } from "./store/actions/category";
import { setItem } from "./store/actions/item";

const App = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");

  // Запросы к "Серверу"
  useEffect(() => {
    dispatch(setCategory(categoriesMock));
    dispatch(setItem(elementsMock));
  }, []);

  return (
    <div className="App">
      <Select setSelectedCategory={setSelectedCategory} />
      <br />
      <Autocomplete category={selectedCategory} />
    </div>
  );
};

export default hot(module)(App);
