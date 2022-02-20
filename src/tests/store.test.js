/**
 * @jest-environment jsdom
 */
import React from "react";
import "regenerator-runtime";
import { Provider, useSelector } from "react-redux";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";

import App from "../App";
import store from "../store";

beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
test("Мультиселект отсуствует без выбранной категории", () => {
  expect(screen.getByTestId("categorySelect")).toHaveValue("DEFAULT");
  expect(screen.queryByTestId("autocomplete")).toBeNull();
});

test("Мультиселект появляется после смены категории", async () => {
  fireEvent.change(screen.getByTestId("categorySelect"), {
    target: { value: "cats" },
  });
  expect(screen.getByTestId("categorySelect")).toHaveValue("cats");

  expect(await screen.findByTestId("categorySelect")).toBeInTheDocument();
});

test("Мультиселект раскрывается при фокусировке", async () => {
  fireEvent.change(screen.getByTestId("categorySelect"), {
    target: { value: "cats" },
  });

  expect(screen.queryByTestId("autocompleteList")).toBeNull();
  screen.getByTestId("autocompleteInput").focus();
  expect(await screen.findByTestId("autocompleteList")).toBeInTheDocument();
});

test("Мультиселект скрывается при потере фокуса", async () => {
  fireEvent.change(screen.getByTestId("categorySelect"), {
    target: { value: "cats" },
  });
  screen.getByTestId("autocompleteInput").focus();
  expect(await screen.findByTestId("autocompleteList")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("categorySelect"));
  expect(screen.queryByTestId("autocompleteList")).toBeNull();
});
