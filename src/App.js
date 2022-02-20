import React, { useEffect, useCallback, useState } from "react";
import { hot } from "react-hot-loader";
import { useSelector, useDispatch } from "react-redux";
//
import elementsMock from "./mocks/elements.json";
//
import Autocomplete from "./components/Autocomplete";
import Select from "./components/Select";
//
import { loadItems } from "./store/actions/item";
import { loadCategories } from "./store/actions/category";
//
import "../src/css/form.css";
import withForm from "./hocs/withForm";

const App = ({ FormComponent }) => {
  const dispatch = useDispatch();

  // Запросы к "Серверу"
  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadItems());
  }, []);

  return (
    <div>
      <FormComponent />
    </div>
  );
};

export default hot(module)(withForm(App));
