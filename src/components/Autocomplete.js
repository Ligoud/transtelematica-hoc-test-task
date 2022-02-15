import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const PAGE_SIZE = 2;

const Autocomplete = ({ category }) => {
  const { items = [] } = useSelector((state) => state.item);

  const [page, setPage] = useState(0);
  const [filteredElems, setFilteredElems] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);

  /* #region  Input */
  const [text, setText] = useState("");

  const onChangeText = useCallback((e) => {
    const value = e.target.value;
    setText(value);
    setPage(0);
  }, []);
  /* #endregion */

  // Ресет стейта формы
  const reset = useCallback(() => {
    setPage(0);
    setText("");
  }, []);

  // Фильтр по категории
  useEffect(() => {
    const matchCategories = items.filter((el) => el.parent_id === category);
    //
    setFilteredElems(matchCategories);
    setCategoryItems(matchCategories);
    //
    reset();
  }, [category, items]);

  // Автокомплит
  useEffect(() => {
    // Чекеры чтобы не портились, тут нужно будет синкать с filtered перед .filter или во время. Что быстрее хз
    const filtered = categoryItems.filter(({ name = "" }) =>
      name.includes(text)
    );
    setFilteredElems(filtered);
  }, [text, categoryItems]);

  return (
    <>
      <input type="text" onChange={onChangeText} placeholder="Введите текст" />
      <ul>
        {filteredElems
          .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
          .map((el) => {
            const isChecked = !!el.isChecked;
            return (
              <li
                key={el.id}
                onClick={() => {
                  const copied = filteredElems.map((item) =>
                    item.id === el.id
                      ? {
                          ...el,
                          isChecked: !isChecked,
                        }
                      : item
                  );
                  setFilteredElems(copied);
                }}
              >
                {`${el.name} ${isChecked ? "V" : ""}`}
              </li>
            );
          })}
        <span
          onClick={() => {
            setPage(page > 0 ? page - 1 : 0);
          }}
        >
          {"<"}
        </span>
        <span>{page + 1}</span>
        <span
          onClick={() => {
            setPage(
              page < Math.ceil(filteredElems.length / PAGE_SIZE) - 1
                ? page + 1
                : page
            );
          }}
        >
          {">"}
        </span>
      </ul>
    </>
  );
};

export default Autocomplete;
